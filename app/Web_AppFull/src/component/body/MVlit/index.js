import { useNavigate } from "react-router-dom";

import "./MVlit.css";

function MVlit(props) {
  const navigate = useNavigate();
  return (
    <div className="playlist container">
      <div className="content-playlist">
        <a className="ct">MV</a>
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
        {props.data.map((mv, index) => (
          <div
            className="playlist-item col-xl-4 col-lg-6"
            key={index}
            id={mv.nameMv}
            onClick={() => {
              navigate("/MVDetail");
            }}
          >
            <img className="heg" src={mv.imageMv} alt="" />
            <span>{mv.nameMv}</span>
            <p>{mv.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MVlit;
