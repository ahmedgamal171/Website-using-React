export default function Insights() {
  return (
    <div
      style={{
        width: "100%",
        background: "black",
        height: "100vh ",
        objectFit: "cover",
      }}
    >
      <img
        src="https://test.creteagency.com/images/Map.svg"
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          objectFit: "cover",
        }}
        alt="Pic not available"
      ></img>
      <div style={{ position: "relative" }}>
        <h1
          style={{
            color: "white",
            marginTop: 0,
            marginLeft: "5vh",
            boxShadow: "10px",
            textAlign: "center",
            fontWeight: "bolder",
          }}
        >
          Design Great Products is hard. <br />
          <span style={{ color: "Orange" }}>We have done over 100 of them</span>
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              width: "fit-content",
              marginLeft: "10vw",
              textAlign: "center",
              marginTop: "55vh",
            }}
          >
            <h2
              style={{
                color: "Orange",

                width: "fit-content",
              }}
            >
              +12 <br />
              <span
                style={{
                  color: "white",
                  fontSize: "0.7em",
                  fontFamily: "serif",
                }}
              >
                Countries
              </span>
            </h2>
            <h2
              style={{
                color: "Orange",
              }}
            >
              +64 <br />
              <span
                style={{
                  color: "white",
                  fontSize: "0.7em",
                  fontFamily: "serif",
                }}
              >
                Brands
              </span>
            </h2>
          </div>
          <div
            style={{
              width: "fit-content",
              marginLeft: "2vw",
              marginTop: "55vh",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                color: "Orange",

                width: "fit-content",
              }}
            >
              +31 <br />
              <span
                style={{
                  color: "white",
                  fontSize: "0.7em",
                  fontFamily: "serif",
                }}
              >
                Clients
              </span>
            </h2>
            <h2
              style={{
                color: "Orange",
              }}
            >
              +118 <br />
              <span
                style={{
                  color: "white",
                  fontSize: "0.7em",
                  fontFamily: "serif",
                }}
              >
                Projects
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
