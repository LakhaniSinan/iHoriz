import React from "react";
import firebase from "firebase";
import { FaRegUser } from "react-icons/fa";
import SideBar from "./sidenav";
class Reviews extends React.Component {
  state = { History: [] };
  componentDidMount() {
    firebase
      .database()
      .ref("reviews")
      .on("value", (snapshot) => {
        console.log(snapshot.val(), "snapsds");
        this.setState({ History: snapshot.val() });
      });
  }
  render() {
    let history = "";
    history = Object.entries(this.state.History);
    console.log(history, "hiss");

    return (
      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <div className="row m-0 ">
          <SideBar />
          <div
            className="col-7 col-sm-8 col-md-9 col-lg-10 "
            style={{ flex: 1, marginLeft: "2%", marginTop: "2%" }}
          >
            <h2>Reviews</h2>
            <div>
              {history.map((index) => {
                return (
                  <div
                    class="media border p-3 shadow-sm mb-2"
                    style={{ width: "50%", borderRadius: 5 }}
                  >
                    <FaRegUser
                      color="gray"
                      size={40}
                      style={{ margin: "1%" }}
                    />
                    <div class="media-body">
                      <h4>
                        {index[1].SenderName}{" "}
                        <small>
                          <i>
                            Posted on {index[1].date}/{index[1].month}/
                            {index[1].year}
                          </i>
                        </small>
                      </h4>
                      <p>{index[1].Review}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
