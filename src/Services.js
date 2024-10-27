import "./Services.css";
import ServiceContainer from "./ServiceContainer";

export default function Services() {
  const servicee = [
    {
      id: 1,
      servicename: "Branding",
      Details: ["Logo Design", "Brand Communication"],
      video:
        "https://creteweb.blob.core.windows.net/assets/service/1728545437-Branding Service.mp4",
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
      video:
        "https://creteweb.blob.core.windows.net/assets/service/1728545490-Product Service.mp4",
    },
    {
      id: 3,
      servicename: "Software Development",
      Details: ["Websites", "Mobile Apps"],
      video:
        "https://creteweb.blob.core.windows.net/assets/service/1728545529-Software Service.mp4",
    },
    {
      id: 4,
      servicename: "Digital Marketing",
      Details: ["Websites", "Mobile Apps"],
      video:
        "https://creteweb.blob.core.windows.net/assets/service/1728545550-Marketing Service.mp4",
    },
  ];

  const servicelist = servicee.map((srv) => (
    <ServiceContainer
      key={srv.id}
      servicetitle={srv.servicename}
      details={srv.Details}
      videos={srv.video}
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
