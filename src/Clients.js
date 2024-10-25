import ClientsContainer from "./ClientsContainer";
import "./Services.css";
const logos = [
  {
    id: 1,
    images: [
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728997140-7amelha.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728996707-Almasif-Park.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728996355-Al%20Riyadh%20Misr.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728996389-AL-Warsha.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728999003-Ali%20Hafiz.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998935-ASR.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998875-Auto%20Club.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998837-Bab%20Aloush.png",
    ],
  },
  {
    id: 2,
    images: [
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998816-Burger%20County.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728996911-Dose-Spot.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998781-Drivit.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998733-elGrocer.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998707-Escape%20Gate.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728996960-Farouq-Ali-Hafez.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998581-GD%20Steel.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998547-GEC.png",
    ],
  },
  {
    id: 3,
    images: [
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998515-Hajjaty.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728997043-Healthy-box.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998476-Itmam.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998434-Keswa.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998326-Kids%20Town.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998251-Maskani.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998227-Middleman.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998199-Mohamed%20Fahmy.png",
    ],
  },
  {
    id: 4,
    images: [
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998171-Nara%20Soya.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998080-Nawaret%20Amassie.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728998033-Orcawise.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728997958-Otocab.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728997917-Own.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728997890-Romotors.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728997847-Rouh%20Beirut.png",
      "https://creteweb.blob.core.windows.net/assets/clients/medium/1728997802-Sandwicha.png",
    ],
  },
];

const logoss = logos.map((clnt) => (
  <ClientsContainer key={clnt.id} imgs={clnt.images} />
));
export default function Clients() {
  return (
    <div
      style={{
        width: "100vw",
        height: "80%",
        background: "black",
        paddingTop: "15vh",
      }}
    >
      <h1
        style={{
          color: "White",
          fontSize: "3em",
          marginTop: "0",
          marginLeft: "5vw",
        }}
      >
        Proudly Serving With <span style={{ color: "orange" }}>Exellence.</span>
        <button className="btnn" style={{ marginLeft: "25vw" }}>
          Explore Work
        </button>
      </h1>
      <div
        style={{
          marginLeft: "10vw",
          marginTop: "10vh",

          marginRight: "10vw",
        }}
      >
        {logoss}
      </div>
    </div>
  );
}
