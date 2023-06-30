import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MV.css";

function MV() {
  const [mvs, setMvs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/mv")
      .then((res) => res.json())
      .then((mvs) => {
        setMvs(mvs);
      });
  }, []);

  const display = mvs[Math.floor(Math.random() * mvs.length)];

  const navigate = useNavigate();
  const GotoMV = () => {
    navigate("/MVDetail");
  };

  return (
    <>
      <div className="right-menu pagebody">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
            <div className="null-left"></div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
            <div className="main-menu mb-3 mt-2">
              <div className="main-menu-all">
                {/*  */}

                <div className="container">
                  <div className="videoShow">
                    <div className="famousVideo mt-4">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-sm-6">
                          <div className="info_video">
                            <h1 className="NameVideo tx_01">
                              {display
                                ? display.nameMv
                                : "Yêu 1 người có ước mơ"}
                            </h1>
                            <span className="author tx_02">
                              {display ? display.author : "Bùi Trường Linh"}
                            </span>
                            <div className="title">
                              {/* {display ? display.title : "83.808 lượt xem Đã công chiếu vào 4 thg 11, 2021
                              #ADT #Lemese Lemese - Anh Đâu Thấy x Graykee ...đã
                              lỡ yêu rồi sao để ngày maii / Official Music Video"} */}
                              83.808 lượt xem Đã công chiếu vào 4 thg 11, 2021
                              #ADT #Lemese Lemese - Anh Đâu Thấy x Graykee ...đã
                              lỡ yêu rồi sao để ngày maii / Official Music Video
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-sm-6">
                          <div className="Mv_Video">
                            <iframe
                              className="iframe_Mv"
                              width="560px"
                              height="315px"
                              src={
                                display
                                  ? display.videoMv
                                  : "https://www.youtube.com/embed/dhDdW0mwyXg"
                              }
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="more_video mt-4">
                      <div className="row">
                        {mvs.map((mv) => (
                          <div className="col-xl-4 mt-2 cardd" onClick={GotoMV}>
                            <div className=" card_mv_customer">
                              <img
                                className="card card-img-top"
                                src={mv.imageMv}
                                alt="Card cap"
                              />
                              <div className="card-body">
                                <h5 className="card-title mb0">{mv.nameMv}</h5>
                                <p className="card-text mb0">{mv.production}</p>
                                <div className="more_info">
                                  <span className="card-text">
                                    Like: {mv.likeMv}
                                  </span>
                                  <span className="card-text">
                                    Share: {mv.shareMv} -- time
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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

export default MV;
