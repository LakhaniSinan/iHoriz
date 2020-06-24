import React, { Component } from "react";
import SideBar from "./sidenav";
import { FaFileUpload } from "react-icons/fa";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";
import { storage } from "../Firebase";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: gray;
`;

class UploadBinai extends Component {
  state = {
    binai: "",
    loading: false,
  };
  handleChange = (e) => {
    if (e.target.files[0]) {
      const binai = e.target.files[0];
      this.setState({ binai });
    }
  };
  handleUpload = () => {
    this.setState({ loading: true });
    const { binai } = this.state;
    const uploadTask = storage.ref(`binais/${binai.name}`).put(binai);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("binais")
          .child(binai.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
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
                  Upload Binai
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadBinai;
