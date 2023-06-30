import { useState, useEffect } from "react";

import style from "./Topic.module.css";
import ThumbTop from "../ThumbTop";

function Topic(props) {
  const [thumbtops, setThumbtops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/mv")
      .then((res) => res.json())
      .then((thumbtops) => {
        setThumbtops(thumbtops);
      });
  }, []);

  const dataThumbTop = thumbtops.slice(0, 4);

  return (
    <>
      {props.data.map((topic, index) => (
        <div className="section" key={index}>
          <div className={style.btnRegion}>
            <div className={style.head}>{topic.TopPopular}</div>
            <a className="btn last-btn">
              Tất cả...
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
          <div className={style.wrap}>
            <ThumbTop data={dataThumbTop} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Topic;
