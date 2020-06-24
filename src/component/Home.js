import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./sidenav";
import "../styles.css";
import "../App.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "x 4s",
    animationName: Radium.keyframes(fadeIn, "bounce"),
  },
  bounce1: {
    animation: "x 8s",
    animationName: Radium.keyframes(fadeIn, "bounce"),
  },
  bounce2: {
    animation: "x 10s",
    animationName: Radium.keyframes(fadeIn, "bounce"),
  },
  bounce3: {
    animation: "x 12s",
    animationName: Radium.keyframes(fadeIn, "bounce"),
  },
  bounce4: {
    animation: "x 14s",
    animationName: Radium.keyframes(fadeIn, "bounce"),
  },
  fadeIn: {
    marginLeft: "30px",
  },
};
function Home() {
  return (
    <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
      <div className="row m-0 ">
        <SideBar />

        <div
          className="col-7 col-sm-8 col-md-9 col-lg-10 "
          style={{ height: "100vh", backgroundColor: "whitesmoke" }}
        >
          <StyleRoot>
            <div className="test" style={styles.bounce}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "46px",
                  color: "black",
                  marginTop: "5%",
                  fontStyle: "italic",
                }}
              >
                Welcome to i<span style={{ color: "orange" }}>Horizon</span> Web
                Portal
              </h1>
            </div>
            <div>
              <h2
                style={{
                  fontStyle: "italic",
                  textAlign: "center",
                  color: "gray",
                  marginTop: "5%",
                }}
              >
                In Association With
              </h2>
            </div>
            <div style={{ height: 2000 }}>
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  marginTop: "10%",
                }}
              >
                <img
                  className="img-thumbnail"
                  src={require("../image/logo1.png")}
                  alt="Generation Logo"
                  width={230}
                  style={(styles.bounce1, { margin: "1%" })}
                />
                <img
                  className="img-thumbnail"
                  src={require("../image/logo3.png")}
                  alt="Generation Logo"
                  width={158}
                  height={130}
                  style={(styles.bounce2, { margin: "1%" })}
                />
                <img
                  className="img-thumbnail"
                  src={require("../image/logo4.png")}
                  alt="Generation Logo"
                  width={130}
                  height={130}
                  style={(styles.bounce3, { margin: "1%" })}
                />
                <img
                  className="img-thumbnail"
                  src={require("../image/logo2.png")}
                  alt="Generation Logo"
                  width={83}
                  style={(styles.bounce4, { margin: "1%" })}
                />
              </div>
            </div>
          </StyleRoot>
        </div>
      </div>
    </div>
  );
}

export default Home;
