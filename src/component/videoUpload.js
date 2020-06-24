import React, { Component } from "react";
import SideBar from "./sidenav";
import { FaFileUpload } from "react-icons/fa";

import { storage } from "../Firebase";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: gray;
`;
class VideoUpload extends Component {
  state = {
    video: "",
    loading: false,
  };
  handleChange = (e) => {
    if (e.target.files[0]) {
      const video = e.target.files[0];
      this.setState({ video });
    }
  };
  handleUpload = () => {
    this.setState({ loading: true });
    const { video } = this.state;
    const uploadTask = storage.ref(`videos/${video.name}`).put(video);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("videos")
          .child(video.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ loading: false });
          });
      }
    );
  };
  render() {
    return (
      <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
        <div className="row m-0 ">
          <SideBar />

          <div
            className="col-7 col-sm-8 col-md-9 col-lg-10 "
            style={{ flex: 1 }}
          >
            <div
              style={{
                marginTop: "10%",
                marginLeft: "20%",
                border: "1px solid #03a5fc",
                width: "50%",
                height: "50%",
                borderRadius: "4%",
              }}
              className="shadow"
            >
              <div
                className="col-12 offset-5"
                style={{ marginTop: "10%", marginBottom: "10%" }}
              >
                <FaFileUpload size={53} color="#03a5fc" />
              </div>
              {this.state.loading && (
                <div className="sweet-loading">
                  <BarLoader
                    css={override}
                    size={30}
                    color={"#489DF2"}
                    loading={this.state.loading}
                  />
                </div>
              )}{" "}
              <div className="col-12 offset-2">
                <input type="file" onChange={this.handleChange} />
                <button onClick={this.handleUpload} className="btn btn-primary">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoUpload;
