import React, { Component } from "react";
import SideBar from "./sidenav";
import "../styles.css";
import firebase from "../Firebase";
import { BarLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: gray;
`;

class UploadZoom extends Component {
  state = {
    link: "",
    password: "",
    meeting_id: "",
    loading: false,
    Day: "",
  };
  handleForm = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { link, password, meeting_id, Day } = this.state;
    firebase
      .database()
      .ref(`zoom/${Day}`)
      .set({
        Link: link,
        Meeting_id: meeting_id,
        Password: password,
      })
      .then(() => {
        this.setState({
          link: "",
          meeting_id: "",
          password: "",
          Day: "",
          loading: false,
        });
      });
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
            <form
              onSubmit={this.handleForm}
              className="was-validated shadow p-4"
              style={{
                width: "50%",
                marginLeft: "20%",
                marginTop: "5%",
                borderRadius: "3%",
              }}
            >
              {this.state.loading && (
                <div className="sweet-loading">
                  <BarLoader
                    css={override}
                    size={150}
                    color={"#489DF2"}
                    loading={this.state.loading}
                  />
                </div>
              )}{" "}
              <div className="form-group">
                <label for="uname">Zoom Link:</label>
                <input
                  onChange={(e) => this.setState({ link: e.target.value })}
                  type="text"
                  className="form-control "
                  id="uname"
                  placeholder="Enter username"
                  name="uname"
                  value={this.state.link}
                  required
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="form-group">
                <label for="uname">Meeting ID:</label>
                <input
                  type="text"
                  className="form-control "
                  id="uname"
                  placeholder="Enter username"
                  name="uname"
                  value={this.state.last_name}
                  required
                  onChange={(e) =>
                    this.setState({ meeting_id: e.target.value })
                  }
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="form-group">
                <label for="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control "
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                  value={this.state.password}
                  required
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>
              <div className="form-group">
                <label for="pwd">Day :</label>
                <input
                  type="number"
                  id="quantity"
                  className="form-control "
                  name="quantity"
                  min="1"
                  max="31"
                  onChange={(e) => this.setState({ Day: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "50%",
                  marginLeft: "25%",
                }}
              >
                Submit
              </button>{" "}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadZoom;
