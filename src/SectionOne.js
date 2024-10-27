import logo from "./Images/Secondary Logo H.svg";
import frame from "./Images/Side Menu.png";
import "./SectionOne.css";
import { useState } from "react";
import scrollingicon from "./Images/Scrolling Animation.svg";

export default function SectionOne() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="SectionOne">
      <div>
        <div
          style={{
            position: "fixed",
            top: "0",
            margin: "0",
            left: "0",
            width: "100vw",
            zIndex: "10",
          }}
        >
          <img id="logo" src={logo} />
          <img id="sidemenu" onClick={toggleMenu} src={frame} />
        </div>
        {isMenuOpen && (
          <div
            className="side-menu"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              height: "50vh",
              width: "100vw",
              backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
              zIndex: 20,
              transition: "transform 0.6s ease",
            }}
          >
            <img
              src="data:image/png;base64,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"
              onClick={toggleMenu}
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "4vw",
                marginTop: "3vh",
                width: "2vw",
                height: "2vh",
                color: "white",
                cursor: "pointer",
              }}
            ></img>
            <li>
              <img
                style={{
                  marginLeft: "2.5vw",
                  display: "block",
                  textAlign: "left",
                }}
                src="https://test.creteagency.com/images/menu-logo.svg"
              ></img>
            </li>
            <ul
              style={{
                marginLeft: "0",
                listStyle: "none",
                color: "white",
                textAlign: "left",
              }}
              className="listitems"
            >
              <li>Crete Story</li>
              <li>
                Industries 22&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+
              </li>
              <li>
                Services &emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;+
              </li>
              <li>Our Work</li>
              <li>Careers</li>
              <li>Get in Touch</li>
            </ul>
          </div>
        )}
        <div id="SectionOneParagraphContainer">
          <p id="paragraph1">
            Make your furture so{" "}
            <span style={{ color: "orange" }}>Irresistble,</span>
            <br />
            it becomes<span style={{ color: "orange" }}> Inevitable.</span>
          </p>
          <p id="paragraph2">
            At Crete we plan,design and market
            <br />
            delightful digital products
          </p>
        </div>
      </div>
      <img id="scrollingicon" src={scrollingicon} />
    </div>
  );
}
