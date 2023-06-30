import { useNavigate } from "react-router-dom";

import "./Album.css";

function Album(props) {
  const navigate = useNavigate();
  return (
    <div className="playlist container">
      <div className="content-playlist">
        <a className="ct">ALBUM</a>
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
        {props.data.map((album, index) => (
          <div
            key={index}
            className="playlist-item col-xl-3 col-lg-4 col-md-6"
            id={album.name}
            onClick={() => {
              navigate("/Album");
            }}
          >
            <img src={album.imageSong} alt="" />
            <span>{album.singer}</span>
            <p>Listen: {album.listen}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Album;
