import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZF1EIWrzHD24ee8F`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      
      <div className="body__songs">
      

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
      
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          
        </div>
      </div>
    </div>
  );
}

export default Body;
