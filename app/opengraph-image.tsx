import { ImageResponse } from "next/og";
export const alt = "SWOT, digital marketing agency in Sri Lanka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() { return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, color: "#f7f4ec", background: "linear-gradient(135deg,#5426db,#30118d)", fontFamily: "Arial, sans-serif" }}><div style={{ display: "flex", fontSize: 48, fontWeight: 900 }}>SWOT</div><div style={{ display: "flex", maxWidth: 980, fontSize: 86, lineHeight: .92, fontWeight: 900, letterSpacing: -4 }}>MAKE EVERY MARKETING MOVE COUNT.</div><div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26 }}><span style={{ display: "flex", width: 22, height: 22, background: "#c8ff22" }} />Digital marketing, creative and performance for Sri Lanka.</div></div>, size); }
