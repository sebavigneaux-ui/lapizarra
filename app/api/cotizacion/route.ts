export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { CotizacionDocument } from "../../calculadora/pdf/CotizacionDocument";
import type { CotizacionData } from "../../calculadora/pdf/CotizacionDocument";

const SEBASTIAN_EMAIL = "sebastian@somoslapizarra.cl";

function htmlBody(data: CotizacionData): string {
  return `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#231F20;">
      <div style="background:#231F20;padding:24px 32px;">
        <p style="margin:0;color:#EC008C;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;">
          Simulación de evento · LaPizarra
        </p>
      </div>
      <div style="padding:32px;">
        <p style="font-size:16px;margin:0 0 8px;">Hola, <strong>${data.nombre}</strong>.</p>
        <p style="font-size:14px;color:#666;margin:0 0 24px;line-height:1.6;">
          Aquí tienes el detalle de la simulación que realizaste en la calculadora de LaPizarra.
          Adjuntamos el PDF con el desglose completo.
        </p>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr style="background:#F5F5F5;">
            <td style="padding:10px 14px;font-size:11px;font-weight:bold;color:#EC008C;text-transform:uppercase;letter-spacing:1px;">Empresa</td>
            <td style="padding:10px 14px;font-size:13px;font-weight:bold;">${data.empresa}</td>
          </tr>
          <tr>
            <td style="padding:10px 14px;font-size:11px;font-weight:bold;color:#EC008C;text-transform:uppercase;letter-spacing:1px;">Tipo de evento</td>
            <td style="padding:10px 14px;font-size:13px;">${data.tipoLabel}</td>
          </tr>
          <tr style="background:#F5F5F5;">
            <td style="padding:10px 14px;font-size:11px;font-weight:bold;color:#EC008C;text-transform:uppercase;letter-spacing:1px;">Asistentes</td>
            <td style="padding:10px 14px;font-size:13px;">${data.asistentesLabel}</td>
          </tr>
          <tr>
            <td style="padding:10px 14px;font-size:11px;font-weight:bold;color:#EC008C;text-transform:uppercase;letter-spacing:1px;">Región</td>
            <td style="padding:10px 14px;font-size:13px;">${data.regionLabel}</td>
          </tr>
          <tr style="background:#231F20;">
            <td style="padding:14px;font-size:11px;font-weight:bold;color:#EC008C;text-transform:uppercase;letter-spacing:1px;">Estimación total</td>
            <td style="padding:14px;font-size:18px;font-weight:bold;color:#EC008C;">${data.total[0] >= 1_000_000 ? `$${(data.total[0] / 1_000_000).toFixed(1)}M` : `$${Math.round(data.total[0] / 1000)}K`} – ${data.total[1] >= 1_000_000 ? `$${(data.total[1] / 1_000_000).toFixed(1)}M` : `$${Math.round(data.total[1] / 1000)}K`}</td>
          </tr>
        </table>
        <p style="font-size:12px;color:#999;line-height:1.6;">
          Valores referenciales en pesos chilenos, sin IVA. Esta estimación puede variar según
          disponibilidad de proveedores, fechas y requerimientos específicos.
        </p>
        <div style="margin-top:28px;padding-top:20px;border-top:1px solid #E0E0E0;">
          <p style="font-size:13px;font-weight:bold;margin:0;">LaPizarra</p>
          <p style="font-size:12px;color:#666;margin:4px 0 0;">sebastian@somoslapizarra.cl · +56 9 5841 9326</p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const data: CotizacionData = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ ok: false, error: "RESEND_API_KEY no configurada" }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Generar PDF
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const element = React.createElement(CotizacionDocument, { data }) as any;
    const pdfBuffer = await renderToBuffer(element);

    const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");

    const fromAddress = process.env.EMAIL_FROM ?? "LaPizarra <onboarding@resend.dev>";

    // Enviar al cliente
    await resend.emails.send({
      from: fromAddress,
      to: [data.correo],
      subject: `Simulación de evento · ${data.empresa} · LaPizarra`,
      html: htmlBody(data),
      attachments: [
        {
          filename: "simulacion-lapizarra.pdf",
          content: pdfBase64,
        },
      ],
    });

    // Enviar copia a Sebastián
    await resend.emails.send({
      from: fromAddress,
      to: [SEBASTIAN_EMAIL],
      subject: `[Nueva simulación] ${data.empresa} · ${data.tipoLabel}`,
      html: htmlBody(data),
      attachments: [
        {
          filename: "simulacion-lapizarra.pdf",
          content: pdfBase64,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error enviando cotización:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
