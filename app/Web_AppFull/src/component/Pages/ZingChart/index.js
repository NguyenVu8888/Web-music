import { useState, useEffect } from "react";

import Charts from "../../elements/Charts";
import style from "./ZingChart.module.css";
import List from "../../elements/List";
import chartsss from "../../../assets/img/line_chart.jpg";

function ZingChart() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((lists) => {
        setLists(lists);
      });
  }, []);
  const dataList = lists.slice(8, 18);

  const [charts, setCharts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/mv")
      .then((res) => res.json())
      .then((charts) => {
        setCharts(charts);
      });
  }, []);
  const dataChart = charts.slice(6, 8);

  return (
    <>
      <div className={style.pagebody}>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
            <div className="null-left"></div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
            <div className="main-menu mb-3 mt-2">
              <div className="main-menu-all">
                {/*  */}

                <div className={style.chart}>
                  <img className={style.image} src={chartsss} />
                </div>
                <div className={style.list}>
                  <List data={dataList} />
                </div>
                <div className={style.bot}>
                  <a href="" className={style.btn}>
                    Xem tất cả
                  </a>
                </div>
                <div className={style.charts}>
                  <Charts data={dataChart} />
                </div>

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZingChart;
