import "./Services.css";
import { useState } from "react";
export default function ServiceContainer({
  servicetitle = "no title",
  details = "",
  videos = "",
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="service-container"
      style={{ position: "relative", background: "transparent" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        src={videos}
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "0",
          left: "0",
          opacity: isHovered ? "1" : "0",
          transition: "opacity 0.5s ease",
          filter: "brightness(1.3)",
        }}
      ></video>
      <h2 className="service-title" style={{ position: "relative", zIndex: 1 }}>
        {servicetitle}
      </h2>
      <div
        style={{
          position: "relative",

          marginTop: "50%",
          zIndex: 1,
        }}
      >
        {details.map((detail, index) => (
          <button className="btn" key={index}>
            {detail}
          </button>
        ))}
      </div>
    </div>
  );
}
