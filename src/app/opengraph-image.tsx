import { ImageResponse } from "next/og";

export const alt = "Custom Function Training | Master Custom Function Programming";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c1b33",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#8eebff",
          }}
        >
          Custom Function Training
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.05, maxWidth: 920 }}>
            Master Custom Function Programming
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#d5e4ff" }}>
            Learn. Practice. Prepare. Build Confidence.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
