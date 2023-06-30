import { useState, useEffect } from "react";

import style from "./ThumbCharts.module.css";

function ThumbCharts(props) {
  return (
    <>
      <div
        className={style.wrapBox}
        id={props.data.nameSong}
        onClick={() => {
          let musicPlayer = document.getElementById("musicPlayer");
          var x = document.getElementById(props.data.nameSong);

          x.setAttribute("data", props.data.sourceSong);
          // x.setAttribute("className", "active");

          localStorage.removeItem("thumb");
          localStorage.removeItem("title");
          localStorage.removeItem("singer");

          localStorage.setItem("thumb", props.data.imageSong);
          localStorage.setItem("title", props.data.nameSong);
          localStorage.setItem("singer", props.data.singer);

          localStorage.removeItem("currentMusic");
          localStorage.removeItem("currentMusic1");
          localStorage.setItem("currentMusic1", 0);

          var y = "http://localhost:4000/" + x.getAttribute("data");

          musicPlayer.src = y;
          musicPlayer.play();
        }}
      >
        <div className={style.disThumb}>
          <div className={style.boxContent}>
            <div className={style.box}>
              <img
                className={style.imgThumb}
                src={props.data.imageSong}
                alt=""
              />
              <div className={style.content}>
                <a className={style.ln}>
                  <i className="far fa-play-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={style.disThumb}>
          <div className={style.sideContent}>
            <h4>{props.data.nameSong}</h4>
            <a href="">{props.data.singer}</a>
            <h1>{props.data.createAt}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThumbCharts;
