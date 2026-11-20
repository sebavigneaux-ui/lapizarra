import { Resend } from "resend";

const DESTINO = "sebastian@somoslapizarra.cl";
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1drFXs9NrLMaW5t1CyuP26oRgr0JOyiBDzqDlzWrqQow";

const escapar = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/**
 * Envía un correo de aviso por cada lead nuevo. Nunca lanza error:
 * si falla, lo registra en los logs y el formulario sigue respondiendo OK.
 */
export async function notificarLeadPorCorreo(opts: {
  origen: string; // "Formulario home" | "Calculadora"
  asunto: string;
  campos: [string, string | undefined | null][];
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Correo lead: RESEND_API_KEY no configurada");
    return;
  }

  const filas = opts.campos
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top;white-space:nowrap">${escapar(k)}</td>` +
        `<td style="padding:6px 0;color:#111;white-space:pre-wrap">${escapar(String(v))}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px">
      <p style="color:#EC008C;font-weight:bold;text-transform:uppercase;letter-spacing:1px;font-size:12px;margin:0 0 8px">
        Nuevo lead · ${escapar(opts.origen)}
      </p>
      <table style="border-collapse:collapse;font-size:14px">${filas}</table>
      <p style="margin-top:24px;font-size:13px">
        <a href="${SHEET_URL}" style="color:#EC008C">Ver planilla de leads</a>
      </p>
    </div>`;

  const texto = opts.campos
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "LaPizarra <onboarding@resend.dev>",
      to: [DESTINO],
      subject: opts.asunto,
      html,
      text: `${texto}\n\nPlanilla: ${SHEET_URL}`,
      ...(opts.replyTo && { replyTo: opts.replyTo }),
    });
    if (error) console.error("Correo lead: error de Resend", JSON.stringify(error));
    else console.log("Correo lead: enviado");
  } catch (e) {
    console.error("Correo lead: excepción", e);
  }
}
