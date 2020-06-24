import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoUpload from "./component/videoUpload";
import Career from "./component/Career";
import Home from "./component/Home";
import UploadBinai from "./component/UploadBinai";
import UploadZoom from "./component/UploadZoom";
import Review from "./component/review";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/UploadVideo" component={VideoUpload} />
        <Route path="/UploadBinai" component={UploadBinai} />
        <Route path="/Career" component={Career} />
        <Route path="/UploadZoom" component={UploadZoom} />
        <Route path="/Reviews" component={Review} />
      </Switch>
    </Router>
  );
};

export default Routes;
