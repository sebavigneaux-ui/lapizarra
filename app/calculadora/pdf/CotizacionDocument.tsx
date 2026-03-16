import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Paleta de marca
const MAGENTA = "#EC008C";
const DARK = "#231F20";
const GRAY = "#666666";
const LIGHT = "#F5F5F5";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica",
    paddingTop: 0,
    paddingBottom: 40,
  },
  // Header negro
  header: {
    backgroundColor: DARK,
    paddingHorizontal: 40,
    paddingVertical: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLogo: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1,
  },
  headerSub: {
    color: MAGENTA,
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  headerRight: {
    alignItems: "flex-end",
  },
  headerDate: {
    color: "#FFFFFF",
    fontSize: 9,
    opacity: 0.5,
  },
  // Banda magenta
  banda: {
    backgroundColor: MAGENTA,
    height: 4,
  },
  // Body
  body: {
    paddingHorizontal: 40,
  },
  // Sección de contexto
  contextoBox: {
    backgroundColor: LIGHT,
    padding: 20,
    marginTop: 28,
    marginBottom: 28,
    flexDirection: "row",
    gap: 0,
  },
  contextoItem: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0",
    paddingRight: 16,
    marginRight: 16,
  },
  contextoItemLast: {
    flex: 1,
    paddingRight: 0,
    marginRight: 0,
  },
  contextoLabel: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: MAGENTA,
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  contextoValue: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  // Sección título
  seccionTitulo: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: GRAY,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  // Filas de desglose
  desgloseRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  desgloseLeft: {
    flex: 1,
  },
  desgloseNombre: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: DARK,
  },
  desgloseNivel: {
    fontSize: 8,
    color: GRAY,
    marginTop: 2,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  desgloseNivelTop: {
    fontSize: 8,
    color: "#B8860B",
    marginTop: 2,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontFamily: "Helvetica-Bold",
  },
  desgloseMonto: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    textAlign: "right",
  },
  // Total
  totalBox: {
    backgroundColor: DARK,
    padding: 20,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    color: "#FFFFFF",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    opacity: 0.6,
  },
  totalMonto: {
    color: MAGENTA,
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    letterSpacing: -0.5,
  },
  // Nota
  nota: {
    fontSize: 8,
    color: GRAY,
    marginTop: 12,
    lineHeight: 1.5,
  },
  // Footer
  footer: {
    marginTop: 36,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  footerBrand: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    letterSpacing: 0.5,
  },
  footerSub: {
    fontSize: 8,
    color: MAGENTA,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginTop: 2,
  },
  footerContact: {
    alignItems: "flex-end",
  },
  footerContactText: {
    fontSize: 8,
    color: GRAY,
    lineHeight: 1.6,
  },
});

export interface CotizacionData {
  nombre: string;
  empresa: string;
  correo: string;
  tipoLabel: string;
  asistentesLabel: string;
  regionLabel: string;
  desglose: Array<{ label: string; monto: [number, number]; nivelId?: string }>;
  total: [number, number];
  fecha: string;
}

function fmt(n: number): string {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return `$${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$0`;
}

function fmtRango([min, max]: [number, number]): string {
  return `${fmt(min)} – ${fmt(max)}`;
}

const NIVEL_LABELS: Record<string, string> = {
  basico: "Básica",
  medio: "Media",
  top: "Premium",
};

export function CotizacionDocument({ data }: { data: CotizacionData }) {
  const itemsSeleccionados = data.desglose.filter((d) => d.nivelId !== undefined);

  return (
    <Document title={`Simulación LaPizarra · ${data.empresa}`}>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerLogo}>LaPizarra</Text>
            <Text style={styles.headerSub}>Productora · Agencia Creativa</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={[styles.headerDate, { color: "#FFFFFF", opacity: 0.4, marginBottom: 2 }]}>
              Simulación de evento
            </Text>
            <Text style={styles.headerDate}>{data.fecha}</Text>
          </View>
        </View>
        <View style={styles.banda} />

        <View style={styles.body}>
          {/* Contexto */}
          <View style={styles.contextoBox}>
            <View style={styles.contextoItem}>
              <Text style={styles.contextoLabel}>Empresa</Text>
              <Text style={styles.contextoValue}>{data.empresa}</Text>
            </View>
            <View style={styles.contextoItem}>
              <Text style={styles.contextoLabel}>Tipo de evento</Text>
              <Text style={styles.contextoValue}>{data.tipoLabel}</Text>
            </View>
            <View style={styles.contextoItem}>
              <Text style={styles.contextoLabel}>Asistentes</Text>
              <Text style={styles.contextoValue}>{data.asistentesLabel}</Text>
            </View>
            <View style={styles.contextoItemLast}>
              <Text style={styles.contextoLabel}>Región</Text>
              <Text style={styles.contextoValue}>{data.regionLabel}</Text>
            </View>
          </View>

          {/* Desglose */}
          <Text style={styles.seccionTitulo}>Servicios seleccionados</Text>
          {itemsSeleccionados.map((item, i) => (
            <View key={i} style={styles.desgloseRow}>
              <View style={styles.desgloseLeft}>
                <Text style={styles.desgloseNombre}>{item.label}</Text>
                {item.nivelId && (
                  <Text
                    style={
                      item.nivelId === "top"
                        ? styles.desgloseNivelTop
                        : styles.desgloseNivel
                    }
                  >
                    {NIVEL_LABELS[item.nivelId] ?? item.nivelId}
                  </Text>
                )}
              </View>
              <Text style={styles.desgloseMonto}>{fmtRango(item.monto)}</Text>
            </View>
          ))}

          {/* Total */}
          <View style={styles.totalBox}>
            <Text style={styles.totalLabel}>Estimación total</Text>
            <Text style={styles.totalMonto}>{fmtRango(data.total)}</Text>
          </View>

          {/* Notas */}
          <Text style={styles.nota}>
            * Valores referenciales en pesos chilenos, sin IVA. Incluye honorarios de producción y gestión LaPizarra (17–20%).{"\n"}
            * Esta estimación puede variar según disponibilidad de proveedores, fechas, requerimientos específicos y complejidad de producción.{"\n"}
            * El equipo de LaPizarra preparará una propuesta formal una vez que conversemos sobre tu proyecto.
          </Text>

          {/* Footer */}
          <View style={styles.footer}>
            <View>
              <Text style={styles.footerBrand}>LaPizarra</Text>
              <Text style={styles.footerSub}>Productora · Agencia Creativa · Chile</Text>
            </View>
            <View style={styles.footerContact}>
              <Text style={styles.footerContactText}>sebastian@somoslapizarra.cl</Text>
              <Text style={styles.footerContactText}>+56 9 5841 9326</Text>
              <Text style={styles.footerContactText}>somoslapizarra.cl</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
