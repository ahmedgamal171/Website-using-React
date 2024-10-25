import "./Portfolio.css";
import "./Services.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function WorkContainer({
  source = "",
  projectname = "",
  Infromation = "",
}) {
  return (
    <div style={{ position: "relative" }}>
      <video id="video1" src={source} autoPlay muted loop></video>
      <div id="divx">
        <h1 id="hdr1">{projectname}</h1>
        <p style={{ color: "#7d685f", fontSize: "1.2em" }}>{Infromation}</p>
      </div>
      <div style={{ position: "absolute", top: "85%", left: "85%" }}>
        <button className="btnn">Explore work </button>
      </div>
    </div>
  );
}
