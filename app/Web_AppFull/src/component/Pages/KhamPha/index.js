import { useState, useEffect } from "react";

import style from "./KhamPha.module.css";
import Thumb from "../../elements/Thumb";
import ThumbCircle from "../../elements/ThumbCircle";
import ThumbMain from "../../elements/ThumbMain";
import Postcard from "../../elements/Postcard";
import Card from "../../elements/Card";
import ThumbTop from "../../elements/ThumbTop";
import Slide from "../../elements/Slide";

function KhamPha() {
  const [thumbs, setThumbs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((thumbs) => {
        setThumbs(thumbs);
      });
  }, []);

  const datathumb = thumbs.slice(0, 12);

  const [thumbmains, setThumbmains] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((thumbmains) => {
        setThumbmains(thumbmains);
      });
  }, []);

  const dataThummain = thumbmains.slice(8, 12);

  const [postcards, setPostcrads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/singer")
      .then((res) => res.json())
      .then((postcards) => {
        setPostcrads(postcards);
      });
  }, []);

  const dataPostcard = postcards.slice(0, 3);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/playlist")
      .then((res) => res.json())
      .then((crads) => {
        setCards(crads);
      });
  }, []);
  const dataCard = cards.slice(0, 3);

  const [thumbtops, setThumbtops] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/mv")
      .then((res) => res.json())
      .then((thumbtops) => {
        setThumbtops(thumbtops);
      });
  }, []);

  const dataThumbTop = thumbtops.slice(5, 9);

  const [thumbcircles, setthumbcircles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/singer")
      .then((res) => res.json())
      .then((thumbcircles) => {
        setthumbcircles(thumbcircles);
      });
  }, []);
  const dataThumbCircle = thumbcircles.slice(0, 6);

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

                <div className="page-body">
                  <div className={style.galery}>
                    <Slide data={datathumb} />
                  </div>

                  <div className={style.region}>
                    <div className={style.head}>
                      <h2 className={style.title}>Mới phát hành</h2>
                      <div className={style.btnRegion}>
                        <a className={style.btn}>Tất cả</a>
                        <a className={style.btn}>Việt Nam</a>
                        <a className={style.btn}>Quốc tế</a>
                        <a className={style.lastBtn}>
                          Tất cả...
                          <i className="fas fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className={style.newsPulished}>
                      <Thumb data={datathumb} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <div className={style.btnRegion}>
                      <h2 className={style.title}>Chill</h2>
                      <a className={style.lastBtn}>
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.chill}>
                      <ThumbMain data={dataThummain} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <h2 className={style.title}>Năng lượng tích cực</h2>
                    <div className={style.chill}>
                      <ThumbMain data={dataThummain} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <h2 className={style.title}>Nghệ sỹ thịnh hành</h2>
                    <div className={style.chill}>
                      <ThumbMain data={dataThummain} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <h2 className={style.title}>Bảng xếp hạng nhac mới</h2>
                    <div className={style.bxh}>
                      <Postcard data={dataPostcard} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <h2 className={style.title}>Zing chart</h2>
                    <div className={style.chart}>
                      <Card data={dataCard} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <div className={style.btnRegion}>
                      <h2 className={style.title}>Top 100</h2>
                      <a className={style.lastBtn}>
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.topHundred}>
                      <ThumbTop data={dataThumbTop} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <h2 className={style.title}>Album hot</h2>
                    <div className={style.topHundred}>
                      <ThumbTop data={dataThumbTop} />
                    </div>
                  </div>

                  <div className={style.region}>
                    <div className={style.btnRegion}>
                      <h2 className={style.title}>Radio nổi bật</h2>
                      <a className={style.lastBtn}>
                        Tất cả...
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </div>
                    <div className={style.radio}>
                      <ThumbCircle data={dataThumbCircle} />
                    </div>
                  </div>
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

export default KhamPha;
