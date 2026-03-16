"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { CotizacionDocument } from "../pdf/CotizacionDocument";
import type { CotizacionData } from "../pdf/CotizacionDocument";

export default function PDFDownloadButton({ data }: { data: CotizacionData }) {
  return (
    <PDFDownloadLink
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      document={React.createElement(CotizacionDocument, { data }) as any}
      fileName="simulacion-lapizarra.pdf"
    >
      {({ loading }) => (
        <button
          disabled={loading}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm border transition-all duration-200 ${
            loading
              ? "border-white/10 text-white/25 cursor-wait"
              : "border-white/25 text-white/60 hover:text-white hover:border-white/50"
          }`}
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Preparando PDF...
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Descargar PDF
            </>
          )}
        </button>
      )}
    </PDFDownloadLink>
  );
}
