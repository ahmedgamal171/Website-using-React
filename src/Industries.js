import "./Services.css";
import "./Industries.css";
import autom from "./Videos/Automotive.mp4";
export default function Industries() {
  return (
    <div className="Services" style={{ paddingBottom: "7vh" }}>
      <div style={{ marginLeft: "4.8vw", paddingTop: "15vh" }}>
        <h1
          style={{
            marginLeft: "4wv",
            marginTop: "0",
            fontSize: "2.1em",
            color: "white",
          }}
        >
          Digitlization across{" "}
          <span style={{ color: "orange" }}>Industries.</span>
        </h1>
        <div
          style={{
            borderRadius: "0.9em",
            backgroundColor: "#20252A",
            marginTop: "7vh",
            width: "90vw",
            height: "90vh",
            // display: "flex",
            // flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "auto",
                width: "60vw",
              }}
            >
              <h1
                style={{ marginLeft: "5vw", color: "white", paddingTop: "3vw" }}
              >
                <span style={{ color: "orange" }}>Automative </span>Industries
              </h1>

              <video
                style={{ marginLeft: "5vw", width: "auto", height: "80%" }}
                src={autom}
                autoPlay
                muted
                loop
              ></video>
            </div>
            <text
              style={{
                textDecoration: "Underline",
                color: "white",
                paddingTop: "11.5vh",
                marginLeft: "-13.8vh",
              }}
            >
              Learn More 🡥
            </text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "90vh",
                width: "47vh",
                marginLeft: "16vh",
              }}
            >
              <button
                className="btnsIndustry"
                style={{
                  background: "#20252A",
                  boxShadow: "-15px 15px 15px -15px rgba(0, 0, 0, 0.4)",
                }}
              >
                Automotive
              </button>
              <button
                className="btnsIndustry"
                style={{
                  background: "#1c2126",
                  // boxShadow: "-20px 0 15px -15px rgba(0, 0, 0, 0.6)",
                }}
              >
                Real Estate
              </button>
              <button
                className="btnsIndustry"
                style={{
                  background: "#181c21",
                  // boxShadow: "-25px 0 15px -15px rgba(0, 0, 0, 0.7)",
                }}
              >
                Retail
              </button>
              <button
                className="btnsIndustry"
                style={{
                  background: "#14171c",
                  // boxShadow: "-30px 0 15px -15px rgba(0, 0, 0, 0.8)",
                }}
              >
                Entertainment
              </button>
              <button
                className="btnsIndustry"
                style={{
                  background: "#111417",
                  // boxShadow: "-35px 0 15px -15px rgba(0, 0, 0, 0.9)",
                }}
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
