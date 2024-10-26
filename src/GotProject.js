import "./GotProject.css";
import "./Services.css";
export default function GotProject() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        marginTop: "0",
      }}
    >
      <div
        style={{
          width: "fit-content",
          marginTop: "10vh",
          marginLeft: "20vh",
          position: "absolute",
        }}
      >
        <h1 style={{ margin: "0", color: "white", fontSize: "3em" }}>
          Got <span style={{ color: "orange" }}>a Project?</span>
        </h1>
        <form style={{ marginTop: "10vh" }} action="/action_page.php">
          <label className="lbl" for="name">
            My Name is{" "}
          </label>
          <input type="text" id="name" className="txtfld" name="fname" />
          <label style={{ marginLeft: "5vw" }} className="lbl" for="Help">
            Need help with{" "}
          </label>
          <select id="lname" className="drpdown" name="Help">
            <option value="" selected disabled hidden></option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Digital marketing services">
              Digital Marketing Services
            </option>
            <option value="Web & Mobile Development">
              Web & Mobile Development
            </option>
            <option value="Branding & Design">Branding & Design </option>
            <option value="Support & Maintenance">
              Support & Maintenance{" "}
            </option>
            <option value="Request A Quote">Request A Quote </option>
          </select>
          <br />
          <br />
          <br />
          <br />
          <label className="lbl" for="Email">
            You can E-mail me at
          </label>
          <input
            className="txtfld"
            type="email"
            id="Email"
            style={{ width: "25vw", marginLeft: "0.5vw" }}
          />
          <label className="lbl" for="mobile" style={{ marginLeft: "1vw" }}>
            Or Call{" "}
          </label>
          <input
            className="txtfld"
            type="tel"
            id="mobile"
            style={{ width: "20vw", marginLeft: "0.5vw" }}
          />
          <br />
          <br />

          <br />
          <label className="lbl" style={{ marginLeft: "1vw" }}>
            About
          </label>
          <br />

          <div style={{ display: "flex", alignItems: "center" }}>
            <textarea
              className="txtar"
              id="About"
              style={{ width: "50vw", marginLeft: "0.5vw" }}
            />
            <input
              className="btnn"
              type="submit"
              value="Submit"
              style={{
                marginLeft: "7vw",
                width: "15vw",
                height: "10vh",
                marginTop: "0",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
