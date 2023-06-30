import { useNavigate } from "react-router-dom";

import "./Playlist.css";

function Playlist(props) {
  const navigate = useNavigate();
  return (
    <div className="playlist container">
      <div className="content-playlist">
        <a className="ct">PLAYLIST</a>
        <div className="contr-np">
          <a href="">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a href="">
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="playlist-items row">
        {props.data.map((playlist, index) => (
          <div
            className="playlist-item playlist-item1  col-xl-2 col-lg-3 col-md-3"
            key={index}
            id={playlist.NamePlaylist}
            onClick={() => {
              navigate("/Album");
            }}
          >
            <img src={playlist.imagePlaylist} alt="" />
            <span>{playlist.NamePlaylist}</span>
            <p>{playlist.ListSong}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist;
