import React from "react";
import Footer from "./Footer";
import "./Player.css";
import Body from "./Body";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Footer spotify={spotify} />
        <Body spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
