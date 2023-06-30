import { useState, useEffect } from "react";

import style from "./Radio.module.css";
import ThumbCircle from "../../elements/ThumbCircle";
import PostcardRadio from "../../elements/PostcardRadio";
import Card from "../../elements/Card";
import Epsidole from "../../elements/Epsidole";
import Chanelhot from "../../elements/Chanelhot";
import RanksPostcard from "../../elements/RanksPostcard";

function Radio() {
  const [thumbcircles, setthumbcircles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/singer")
      .then((res) => res.json())
      .then((thumbcircles) => {
        setthumbcircles(thumbcircles);
      });
  }, []);
  const dataThumbCircle = thumbcircles.slice(0, 5);

  const [postcardRadios, setPostcardRadios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/mv")
      .then((res) => res.json())
      .then((postcardRadios) => {
        setPostcardRadios(postcardRadios);
      });
  }, []);

  const dataPostcardRadio = postcardRadios.slice(5, 9);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/playlist")
      .then((res) => res.json())
      .then((crads) => {
        setCards(crads);
      });
  }, []);
  const dataCard = cards.slice(2, 5);

  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((ranks) => {
        setRanks(ranks);
      });
  }, []);
  const dataRank = ranks.slice(7, 13);

  const [epsidoles, setEpsidoles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/singer")
      .then((res) => res.json())
      .then((epsidoles) => {
        setEpsidoles(epsidoles);
      });
  }, []);
  const dataEp = epsidoles.slice(0, 6);

  const [chanels, setChanels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/mv")
      .then((res) => res.json())
      .then((chanels) => {
        setChanels(chanels);
      });
  }, []);

  const dataChanelhot = chanels.slice(7, 9);

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
                  <div className={style.head}>Radio</div>
                  <div className={style.content}>
                    <div className={style.radio}>
                      <ThumbCircle data={dataThumbCircle} />
                    </div>
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.btnRegion}>
                    <div className={style.head}>Khám phá postcard</div>
                    <a className="btn last-btn">
                      Tất cả...
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                  <div className={style.contentKhamPha}>
                    <PostcardRadio data={dataPostcardRadio} />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.btnRegion}>
                    <div className={style.head}>Thể loại postcard</div>
                    <a className="btn last-btn">
                      Tất cả...
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                  <div className={style.contentTheLoai}>
                    <Card data={dataCard} />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.btnRegion}>
                    <div className={style.head}>Bảng xếp hạng postcrad</div>
                    <a className="btn last-btn">
                      Tất cả...
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                  <div className={style.contentBXH}>
                    <RanksPostcard data={dataRank} />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.head}>Các tập nổi bật</div>
                  <div className={style.ep}>
                    <Epsidole data={dataEp} />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.btnRegion}>
                    <div className={style.head}>Chương trình nổi bật</div>
                    <a className="btn last-btn">
                      Tất cả...
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                  <div className={style.contentCT}>
                    <Chanelhot data={dataChanelhot} />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.head}>Zing news</div>
                  <div className={style.contentZNews}>
                    <PostcardRadio data={dataPostcardRadio} />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.head}>Vietcetera</div>
                  <div className={style.contentZNews}>
                    <PostcardRadio data={dataPostcardRadio} />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.head}> Pladio</div>
                  <div className={style.contentZNews}>
                    <PostcardRadio data={dataPostcardRadio} />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.head}>On Air</div>
                  <div className={style.contentZNews}>
                    <PostcardRadio data={dataPostcardRadio} />
                  </div>
                </div>

                <div className={style.section}>
                  <div className={style.btnRegion}>
                    <div className={style.head}>Chương trình mới</div>
                    <a className="btn last-btn">
                      Tất cả...
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                  <div className={style.contentZNews}>
                    <PostcardRadio data={dataPostcardRadio} />
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

export default Radio;
