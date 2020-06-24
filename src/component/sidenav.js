import React from "react";
import {
  FiUploadCloud,
  FiUpload,
  FiSend,
  FiCloud,
  FiEye,
} from "react-icons/fi";
import { MdRateReview } from "react-icons/md";
import { Link } from "react-router-dom";

import "../styles.css";
import logo from "../image/ihorizon.png";
const SideBar = () => {
  return (
    <div className=" col-5 col-sm-4 col-md-3 col-lg-2 right-side-log m-0 p-0 ">
      <div className=" right-side-log-image">
        <div className="over-lay">
          <div className=" background-css" style={{ height: "100vh" }}>
            <nav className="primary-nav navbar-expand-md">
              <div className="side-title text-center text-light py-5">
                <Link to="/" className="nav-item nav-link">
                  <div className="logo" style={{ paddingBottom: "15%" }}>
                    <img
                      src={logo}
                      alt="logo"
                      width={90}
                      className="rounded-circle"
                      style={{ border: "4px solid orange" }}
                    />
                  </div>
                </Link>
                <Link
                  style={{ paddingRight: "18%" }}
                  to="/UploadVideo"
                  className="nav-item nav-link nav-list-css"
                >
                  <FiUploadCloud size={25} /> Upload Video
                </Link>
                <Link
                  style={{ paddingRight: "19%" }}
                  to="/UploadBinai"
                  className="nav-item nav-link nav-list-css"
                >
                  <FiUpload size={25} />
                  {"   "} Upload Binai
                </Link>
                <Link
                  to="/Career"
                  className="nav-item nav-link nav-list-css"
                  style={{ paddingRight: "36%" }}
                >
                  <FiSend size={25} />
                  {"   "}Career
                </Link>
                <Link
                  to="/UploadVideo"
                  className="nav-item nav-link nav-list-css"
                >
                  <FiCloud size={25} /> Upload Content
                </Link>
                <Link
                  to="/UploadZoom"
                  className="nav-item nav-link nav-list-css"
                >
                  <FiCloud size={25} className="ml-2" /> Upload Zoom link
                </Link>
                <Link
                  to="/Reviews"
                  className="nav-item nav-link nav-list-css"
                  style={{ paddingRight: "35%" }}
                >
                  <MdRateReview size={25} className="ml-2" /> Reviews
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
