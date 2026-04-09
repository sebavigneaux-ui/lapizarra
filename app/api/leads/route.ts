export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_ID = "1drFXs9NrLMaW5t1CyuP26oRgr0JOyiBDzqDlzWrqQow";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    if (!credentialsJson) {
      return NextResponse.json({ ok: false, error: "Credenciales no configuradas" }, { status: 500 });
    }

    const credentials = JSON.parse(credentialsJson);
    // Vercel escapa los \n del private_key — los restauramos
    if (credentials.private_key) {
      credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });

    const bloquesStr = Object.entries(body.seleccionBloques as Record<string, string>)
      .map(([id, nivel]) => `${id}: ${nivel}`)
      .join(" | ");

    const fmt = (n: number) =>
      n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : `$${Math.round(n / 1000)}K`;

    const row = [
      timestamp,
      body.nombre,
      body.empresa,
      body.correo,
      body.mensaje || "",
      body.tipoLabel,
      body.asistentesLabel,
      body.regionLabel,
      body.diasLabel,
      body.fechaEvento || "",
      bloquesStr,
      fmt(body.totalMin),
      fmt(body.totalMax),
    ];

    // Si la hoja está vacía, agrega encabezados primero
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
            "Fecha", "Nombre", "Empresa", "Correo", "Mensaje",
            "Tipo de evento", "Asistentes", "Región", "Días", "Fecha evento",
            "Servicios seleccionados", "Total MIN", "Total MAX",
          ]],
        },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "A:M",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error guardando lead:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
