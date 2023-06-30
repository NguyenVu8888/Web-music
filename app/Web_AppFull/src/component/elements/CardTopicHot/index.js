import { useState, useEffect } from "react";

import style from "./CardTopicHot.module.css";

function CardTopicHot(props) {
  return (
    <>
      {props.data.map((cardTopicHot, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img
                  className={style.imgThumb}
                  src={cardTopicHot.imageSong}
                  alt=""
                />
                <div className={style.content}>
                  <div className={style.ln}>{cardTopicHot.nameSong}</div>
                  <div className={style.imgTag}>
                    <img
                      className={style.img}
                      src={cardTopicHot.imageSong}
                      alt=""
                    />
                    <img
                      className={style.img}
                      src={cardTopicHot.imageSong}
                      alt=""
                    />
                    <img
                      className={style.img}
                      src={cardTopicHot.imageSong}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardTopicHot;
