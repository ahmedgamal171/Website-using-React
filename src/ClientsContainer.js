import "./ClientsContainer.css";
export default function ClientsContainer({ imgs = [] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80vw",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        {imgs.map((img, index) => (
          <img
            className="img"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "12vh",
            }}
            src={img}
            key={index}
          ></img>
        ))}
      </div>
    </div>
  );
}
