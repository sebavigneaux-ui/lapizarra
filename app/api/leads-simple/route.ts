export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_ID = "1drFXs9NrLMaW5t1CyuP26oRgr0JOyiBDzqDlzWrqQow";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, empresa, correo, telefono, tipoEvento } = body;

    const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    if (!credentialsJson) {
      return NextResponse.json({ ok: false, error: "Credenciales no configuradas" }, { status: 500 });
    }

    const credentials = JSON.parse(credentialsJson);
    if (credentials.private_key) {
      credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });

    const row = [
      timestamp,
      nombre,
      empresa,
      correo,
      telefono || "",
      "",
      tipoEvento,
      "",
      "",
      "",
      "",
      "Formulario hero",
      "",
      "",
    ];

    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "A1",
    });

    if (!existing.data.values || existing.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: "A1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[
            "Fecha", "Nombre", "Empresa", "Correo", "Teléfono", "Mensaje",
            "Tipo de evento", "Asistentes", "Región", "Días", "Fecha evento",
            "Servicios seleccionados", "Total MIN", "Total MAX",
          ]],
        },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "A:N",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    const greenId = process.env.GREENAPI_ID_INSTANCE;
    const greenToken = process.env.GREENAPI_TOKEN;
    if (greenId && greenToken) {
      const mensaje = [
        "🔔 *Nuevo contacto — LaPizarra (Hero)*",
        "",
        `👤 ${nombre} · ${empresa}`,
        `📞 ${telefono || "No indicado"}`,
        `📧 ${correo}`,
        `📅 ${tipoEvento}`,
      ].join("\n");

      await fetch(
        `https://7107.api.greenapi.com/waInstance${greenId}/sendMessage/${greenToken}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chatId: "56958419326@c.us", message: mensaje }),
        }
      ).catch((e) => console.error("WhatsApp error:", e));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error guardando lead:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
