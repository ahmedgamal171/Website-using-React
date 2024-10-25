import "./Portfolio.css";
import "./Services.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WorkContainer from "./WorkContainer";

const arr = [
  {
    id: 1,
    src: "https://creteweb.blob.core.windows.net/assets/project/1728841978-Dose%20Spot%20Horizontal.mp4",
    projectname: "Dose Spot",
    Infromation: "Drive Thru Coffee Shop | Tabuk, KSA",
  },
  {
    id: 2,
    src: "https://creteweb.blob.core.windows.net/assets/project/1728841821-ASR%20Horizontal.mp4",
    projectname: "Auto Samir Rayan",
    Infromation: "Automotive | Egypt",
  },
  {
    id: 3,
    src: "https://creteweb.blob.core.windows.net/assets/project/1728480230-OWN%20Horizontal%20(1).mp4",
    projectname: "Own",
    Infromation: "Real Estate | Egypt",
  },
];

export default function Portfolio() {
  const arrr = arr.map((r) => (
    <WorkContainer
      key={r.id}
      projectname={r.projectname}
      Infromation={r.Infromation}
      source={r.src}
    ></WorkContainer>
  ));
  return (
    <div style={{ height: "100%", width: "auto", backgroundColor: "black" }}>
      {console.log(arrr)}
      <Carousel className="CarouselContainer">{arrr}</Carousel>
    </div>
  );
}
