import { useState, useEffect } from "react";

import Topic from "../../elements/Topic";
import style from "./Theloai.module.css";
import imgEX1 from "../../../assets/img/bg-ani.jpg";
import CardTopic from "../../elements/CardTopic";
import CardTopicHot from "../../elements/CardTopicHot";

function TheLoai() {
  const [cardTopics, setCardTopics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((cardTopics) => {
        setCardTopics(cardTopics);
      });
  }, []);
  const datacardtopic = cardTopics.slice(0, 3);

  const [cardTopicHots, setCardTopicHots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((cardTopicHots) => {
        setCardTopicHots(cardTopicHots);
      });
  }, []);
  const dataCardtopichot = cardTopicHots.slice(11, 14);

  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/rank")
      .then((res) => res.json())
      .then((topics) => {
        setTopics(topics);
      });
  }, []);

  const dataTopic = topics.slice(0, 14);

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

                <div className={style.section}>
                  <div className={style.img}>
                    <img className={style.imgIntro} src={imgEX1} alt="" />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.head}>Nổi bật</div>
                  <div className={style.wrap}>
                    <CardTopic data={datacardtopic} />
                  </div>
                  <div className={style.bot}>
                    <a className={style.btn}>Xem tất cả</a>
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.head}>Quốc gia</div>
                  <div className={style.wrap}>
                    <CardTopic data={datacardtopic} />
                  </div>
                  <div className={style.bot}>
                    <a className={style.btn}>Xem tất cả</a>
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.head}>Tâm trạng và hoạt động</div>
                  <div className={style.wrap}>
                    <CardTopicHot data={dataCardtopichot} />
                  </div>
                  <div className={style.bot}>
                    <a className={style.btn}>Xem tất cả</a>
                  </div>
                </div>

                <div className={style.section}>
                  <Topic data={dataTopic} />
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

export default TheLoai;
