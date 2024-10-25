import "./Services.css";

export default function ServiceContainer({
  servicetitle = "no title",
  details = "",
}) {
  return (
    <div className="service-container">
      <h2 className="service-title">{servicetitle}</h2>
      <div
        style={{
          marginTop: "50%",
          display: "-ms-flexbox",
          flexDirection: "",
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
