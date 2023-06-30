import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./MVDetail.css";

function MVDetail(props) {
  const [reload, setReload] = useState("");

  const [mvs, setMvs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((mvs) => {
        setMvs(mvs);
      });
  }, []);

  const [mvsDisplay, setMvsDisplay] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/mv")
      .then((res) => res.json())
      .then((mvsDisplay) => {
        setMvsDisplay(mvsDisplay);
      });
  }, []);

  const display = mvsDisplay[Math.floor(Math.random() * mvsDisplay.length)];
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div className="appDetaiMv mt-2">
        <div className="container_customer">
          <div className="row">
            <div className="col-xl-8">
              <div className="Show_video_detai">
                <iframe
                  className="iframe_detai_Mv"
                  width="860"
                  height="515"
                  src={
                    display
                      ? display.videoMv
                      : "https://www.youtube.com/embed/JsA6A-EbjiU"
                  }
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="name_Video_detai">
                  {display
                    ? display.nameMv
                    : "Ngày Trái Tim Khóc - Cao Tùng Anh"}
                </div>
                <div className="infor_author align-items-center">
                  <a href="" className="author_link">
                    <img
                      className="img_author_detai authorAvata"
                      src={
                        display
                          ? display.imageMv
                          : "https://yt3.ggpht.com/7NfKBa-tpWYX0WFXwJSRnyJWgJBr9oiG6_XUlXp_T1jSunb0g8K1cBpTi6Azlg9o85toepk8Xw=s88-c-k-c0x00ffffff-no-rj"
                      }
                      alt=""
                    />
                  </a>
                  <div className="infor_base_author">
                    <div className="name_author">
                      {display ? display.author : "DiaBlo"} Music Entertainment
                    </div>
                    <div className="more_info_author">
                      {display ? display.likeMv : "94"}k người đăng ký
                    </div>
                  </div>
                </div>
                <div className="title_mv_detai">
                  <div className="w90">
                    3.213.050 lượt xem Đã công chiếu vào 22 thg 7, 2019 #Rum
                    #OmTronNoiNho RUM - Ôm Trọn Nỗi Nhớ | Official MV Available
                    Here : https://backl.ink/22472695
                    https://mp3.zing.vn/bai-hat/Om-Tron-N... #OmTronNoiNho#OTNN
                    #Rum Excutive Producer : HO MINH TRIET Produced, Composed by
                    RUM Lyrics by TRUNGG I.U Arranged by DARRYS Recorded by DIO
                    Mixed by DIO, LAZII Mastered by DRUM7 Background Vocal by
                    MITHƯ Talent: NGUYEN PHUONG DUNG D.O.P/Set Design: DUC ANH
                    Producer: THANH PHAT Camera Operator: KHOA HUYNH Focus
                    Puller: TIEN HOA Script Supervisor: HUY HUNG Line Producer:
                    MINH HOA BTS: EO CHANG HY M.U.A: MIEU ANH THU MV Produced by
                    XANHTEAMDN Trên phố vắng giờ chỉ còn mỗi anh cô đơn bước đi
                    thôi, không còn có em luôn đi theo anh nữa rồi. Nhưng may
                    mắn sao trong dự án lần này của anh thì có Tiki đi cùng. Cảm
                    ơn Tiki rất nhiều đã đồng hành cùng Rum trong dự án lần này.
                    Mọi người ơi, Tiki đi cùng Rum tại đây nào:
                    http://bit.ly/TikiDiCungRum ___ Follow Rum:
                    https://www.instagram.com/rumrumne
                    https://www.facebook.com/rumrumne
                    https://www.facebook.com/rumrumofficial
                    https://www.tiktok.com/@rumrumnee _____________ © Bản quyền
                    thuộc về Rum © Copyright by Rum ☞ Do not Reup
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <ul className="list-group">
                {mvs.map((mv, index) => (
                  <li
                    className="list-group-item list_infor_mv align-items-center mt-2"
                    key={index}
                    onClick={() => {
                      setReload(mv.nameSong);
                    }}
                  >
                    <div className="box_image_mv">
                      <img className="image_Mv_sub" src={mv.imageSong} alt="" />
                    </div>
                    <div className="infor_mv_sub">
                      <div className="name_mv_sub">{mv.nameSong}</div>
                      <div className="more_info_subMv">
                        {mv.singer} Official
                      </div>
                    </div>
                  </li>
                ))}

                {/* <li className="list-group-item list_infor_mv align-items-center mt-2">
                  <img
                    className="image_Mv_sub"
                    src="https://i.ytimg.com/vi/_lehN1SDnag/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD7igjHjBpl8VLdTdulCMTGf0HgDA"
                    alt=""
                  />
                  <div className="infor_mv_sub">
                    <div className="name_mv_sub">
                      MIN - ĐỪNG YÊU NỮA, EM MỆT RỒI | OFFICIAL MUSIC VIDEO
                    </div>
                    <div className="more_info_subMv">MIN OFFICIAL</div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MVDetail;
