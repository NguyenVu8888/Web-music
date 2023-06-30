import { useState, useEffect } from "react";

import style from "./Charts.module.css";
import ThumbCharts from "../ThumbCharts";

function Charts(props) {
  const [thumbcharts, setThumbcharts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((thumbcharts) => {
        setThumbcharts(thumbcharts);
      });
  }, []);

  const dataThumbchart =
    thumbcharts[Math.floor(Math.random() * thumbcharts.length)];

  return (
    <>
      {props.data.map((chart, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.head}>
            <div className={style.textHead} title={chart.nameMv}>
              {chart.nameMv}
            </div>
            <i className="fa fa-play-circle fa-3x"></i>
          </div>

          <div className={style.body}>
            <div className={style.contentBody}>
              <div className={style.num}>{chart.shareMv}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <ThumbCharts data={dataThumbchart} />
              </div>
              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.time}>{chart.likeMv}</div>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>

            <div className={style.contentBody}>
              <div className={style.num}>{chart.shareMv}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <ThumbCharts data={dataThumbchart} />
              </div>
              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.time}>{chart.likeMv}</div>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>

            <div className={style.contentBody}>
              <div className={style.num}>{chart.shareMv}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <ThumbCharts data={dataThumbchart} />
              </div>
              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.time}>{chart.likeMv}</div>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>

            <div className={style.contentBody}>
              <div className={style.num}>{chart.shareMv}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <ThumbCharts data={dataThumbchart} />
              </div>
              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.time}>{chart.likeMv}</div>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>

            <div className={style.contentBody}>
              <div className={style.num}>{chart.shareMv}</div>
              <div className={style.space}> - </div>
              <div className={style.mid}>
                <div className={style.mid}>
                  <ThumbCharts data={dataThumbchart} />
                </div>
              </div>

              <div className={style.icon}>
                <i className="fas fa-microphone"></i>
              </div>
              <div className={style.end}>
                <div className={style.time}>{chart.likeMv}</div>
                <div className={style.more}>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
            </div>
          </div>
          <div className={style.bot}>
            <a className={style.btn}> Xem tất cả</a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Charts;
