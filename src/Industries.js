import "./Services.css";
import "./Industries.css";
import React, { useState } from "react";
export default function Industries() {
  const [imageSrc, setImageSrc] = useState(
    "https://creteweb.blob.core.windows.net/assets/industry/1728388650-Automotive.mp4"
  );
  const changeImageSrc = (newPath) => {
    setImageSrc(newPath);
  };
  return (
    <div className="Services" style={{ paddingBottom: "7vh" }}>
      <div style={{ marginLeft: "4.8vw", paddingTop: "15vh" }}>
        <h1 id="h1">
          Digitlization across{" "}
          <span style={{ color: "orange" }}>Industries.</span>
        </h1>
        <div id="div1">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div id="div2">
              <h1
                style={{ marginLeft: "5vw", color: "white", paddingTop: "3vw" }}
              >
                <span style={{ color: "orange" }}>Automative </span>Industries
              </h1>

              <video id="video" src={imageSrc} autoPlay muted loop></video>
            </div>
            <text id="txt">Learn More 🡥</text>
            <div id="div3">
              <button
                className="btnsIndustry"
                style={{
                  background: "#20252A",
                  boxShadow: "-15px 15px 15px -15px rgba(0, 0, 0, 0.4)",
                }}
                onClick={() =>
                  changeImageSrc(
                    "https://creteweb.blob.core.windows.net/assets/industry/1728388650-Automotive.mp4"
                  )
                }
              >
                Automotive
              </button>
              <button
                className="btnsIndustry"
                style={{
                  background: "#1c2126",
                }}
                onClick={() =>
                  changeImageSrc(
                    "https://creteweb.blob.core.windows.net/assets/industry/1728485592-Real Estate.mp4"
                  )
                }
              >
                Real Estate
              </button>
              <button
                className="btnsIndustry"
                style={{
                  background: "#181c21",
                }}
                onClick={() =>
                  changeImageSrc(
                    "https://creteweb.blob.core.windows.net/assets/industry/1728557336-Retail.mp4"
                  )
                }
              >
                Retail
              </button>
              <button
                className="btnsIndustry"
                style={{
                  background: "#14171c",
                }}
                onClick={() =>
                  changeImageSrc(
                    "https://creteweb.blob.core.windows.net/assets/industry/1728459160-Entertainment.mp4"
                  )
                }
              >
                Entertainment
              </button>
              <button
                className="btnsIndustry"
                style={{
                  background: "#111417",
                }}
                onClick={() =>
                  changeImageSrc(
                    "https://creteweb.blob.core.windows.net/assets/industry/1728463300-Tourism.mp4"
                  )
                }
              >
                Tourism
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
