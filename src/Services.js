import "./Services.css";
import ServiceContainer from "./ServiceContainer";

export default function Services() {
  const servicee = [
    {
      id: 1,
      servicename: "Branding",
      Details: ["Logo Design", "Brand Communication"],
    },
    {
      id: 2,
      servicename: "Product Design",
      Details: [
        "UI",
        "UX",
        "Prototype",
        "Design Systems",
        "Business Development",
      ],
    },
    {
      id: 3,
      servicename: "Software Development",
      Details: ["Websites", "Mobile Apps"],
    },
    {
      id: 4,
      servicename: "Digital Marketing",
      Details: ["Websites", "Mobile Apps"],
    },
  ];

  const servicelist = servicee.map((srv) => (
    <ServiceContainer
      key={srv.id}
      servicetitle={srv.servicename}
      details={srv.Details}
    ></ServiceContainer>
  ));

  return (
    <div className="Services">
      <div style={{ marginLeft: "4.8vw", paddingTop: "10vh" }}>
        <h1 style={{ color: "white", margin: "0" }}>
          Innovation that Ensure <br />{" "}
          <span style={{ color: "Orange" }}>Your Market Success.</span>
          <button
            className="btnn"
            style={{ marginLeft: "60vw", marginBottom: "20px" }}
          >
            Explore Work
          </button>
        </h1>
      </div>
      <div
        style={{
          marginLeft: "10vh",
          marginTop: "12vh",
          paddingBottom: "2vh",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {servicelist}
      </div>
    </div>
  );
}
