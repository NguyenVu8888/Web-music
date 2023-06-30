import { useState, useEffect } from "react";

import "./Artist.css";

function Artist(props) {
  return (
    <div className="playlist container">
      <div className="content-playlist">
        <a className="ct">NGHỆ SĨ</a>
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
        {props.data.map((artis, index) => (
          <div
            className="playlist-item cs col-xl-3 col-lg-4 col-md-6"
            key={index}
          >
            <img className="cd" src={artis.imageSinger} alt="" />
            <span>{artis.nameSingers}</span>
            <p className="midCustom">{artis.Birthday}</p>

            <a href="" className="checkbtn">
              <i className="fas fa-check"></i>
              {artis.nationality}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artist;
