import { useState, useRef, useEffect } from "react";

import "./Footer.css";
import albumImg from "../../assets/img/album-iu.jpeg";

function Footer() {
  const [audioStatus, changeAudioStatus] = useState(false);
  const [checkLoop, setCheckLoop] = useState(true);
  const myRef = useRef();

  const [reload, setReload] = useState("");

  const [thumb, setThumb] = useState("");
  const [title, setTitle] = useState("");
  const [singer, setSinger] = useState("");

  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((categoris) => {
        setCategoris(categoris);
      });
  }, []);

  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current.pause();

    changeAudioStatus(false);
  };

  const loopEnable = () => {
    myRef.current.loop = true;
    console.log("looped");
    setCheckLoop(false);
  };

  const loopDisnable = () => {
    myRef.current.loop = false;
    console.log("loop out");
    setCheckLoop(true);
  };

  const display = (ob) => {
    localStorage.removeItem("thumb");
    localStorage.removeItem("title");
    localStorage.removeItem("singer");

    localStorage.setItem("thumb", ob.imageSong);
    localStorage.setItem("title", ob.nameSong);
    localStorage.setItem("singer", ob.singer);
  };

  const backAudio = () => {
    let dk = localStorage.getItem("currentMusic");
    let dk1 = localStorage.getItem("currentMusic1");
    let position = parseInt(localStorage.getItem("currentMusic"));
    let position2 = parseInt(localStorage.getItem("currentMusic1"));

    let src;
    if (dk != null) {
      if (position - 1 < 0) {
        localStorage.removeItem("currentMusic");
        localStorage.setItem("currentMusic", categoris.length - 1);
        src =
          "http://localhost:4000/" + categoris[categoris.length - 1].sourceSong;
        display(categoris[categoris.length - 1]);
      } else {
        localStorage.removeItem("currentMusic");
        localStorage.setItem("currentMusic", position - 1);
        src = "http://localhost:4000/" + categoris[position - 1].sourceSong;
        display(categoris[position - 1]);
      }
    } else if (dk1 != null) {
      if (position2 - 1 < 0) {
        localStorage.removeItem("currentMusic1");
        localStorage.setItem("currentMusic1", categoris.length - 1);
        src =
          "http://localhost:4000/" + categoris[categoris.length - 1].sourceSong;
        display(categoris[categoris.length - 1]);
      } else {
        localStorage.removeItem("currentMusic1");
        localStorage.setItem("currentMusic1", position2 - 1);
        src = "http://localhost:4000/" + categoris[position2 - 1].sourceSong;
        display(categoris[position2 - 1]);
      }
    }

    let musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = src;
    myRef.current.play();
    setReload(Math.random());
  };

  const nextAudio = () => {
    let dk = localStorage.getItem("currentMusic");
    let dk1 = localStorage.getItem("currentMusic1");
    let position = parseInt(localStorage.getItem("currentMusic"));
    let position2 = parseInt(localStorage.getItem("currentMusic1"));

    let src;

    if (dk != null) {
      if (position == categoris.length - 1) {
        localStorage.removeItem("currentMusic");
        localStorage.setItem("currentMusic", 0);
        src = "http://localhost:4000/" + categoris[0].sourceSong;
        display(categoris[0]);
      } else {
        localStorage.removeItem("currentMusic");
        localStorage.setItem("currentMusic", position + 1);
        src = "http://localhost:4000/" + categoris[position + 1].sourceSong;
        display(categoris[position + 1]);
      }
    } else if (dk1 != null) {
      if (position2 == categoris.length - 1) {
        localStorage.removeItem("currentMusic1");
        localStorage.setItem("currentMusic1", 0);
        src = "http://localhost:4000/" + categoris[0].sourceSong;
        display(categoris[0]);
      } else {
        localStorage.removeItem("currentMusic1");
        localStorage.setItem("currentMusic1", position2 + 1);
        src = "http://localhost:4000/" + categoris[position2 + 1].sourceSong;
        display(categoris[position2 + 1]);
      }
    }

    let musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = src;
    myRef.current.play();
    setReload(Math.random());
  };

  const randomMusic = () => {
    let x = Math.floor(Math.random() * (categoris.length - 1));
    localStorage.removeItem("currentMusic");
    localStorage.setItem("currentMusic", x);
    let src = "http://localhost:4000/" + categoris[x].sourceSong;
    let musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.src = src;
    myRef.current.play();
    display(categoris[x]);
    setReload(Math.random());
  };

  return (
    <>
      <div className="fake"></div>
      <div className="footer-play-song">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-2">
            <div className="detai-song footer-detai-song">
              {localStorage.getItem("thumb") ? (
                <>
                  <img
                    src={localStorage.getItem("thumb")}
                    className="thumb"
                    alt=""
                  />
                  <div className="detai-name-song">
                    <marquee>{localStorage.getItem("title")}</marquee>
                    <p>{localStorage.getItem("singer")}</p>
                  </div>
                </>
              ) : (
                <>
                  <img src={albumImg} alt="" />
                  <div className="detai-name-song">
                    <marquee>碧碧碧 Name Song</marquee>
                    <p>Singer</p>
                  </div>
                </>
              )}
              <ul className="nav-song nav-song1">
                <li>
                  <a href="">
                    <i className="far fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fas fa-ellipsis-h"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-4 col-md-8">
            <div className="footer-btn-play-song">
              <ul>
                <li onClick={randomMusic}>
                  <a>
                    <i className="fas fa-random"></i>
                  </a>
                </li>
                <li onClick={backAudio}>
                  <a>
                    <i className="fas fa-step-backward"></i>
                  </a>
                </li>

                {audioStatus ? (
                  <li>
                    <a>
                      <i
                        className="fa-solid fa-pause fa-sm"
                        onClick={pauseAudio}
                      ></i>
                    </a>
                  </li>
                ) : (
                  <li>
                    <a>
                      <i
                        className="far fa-play-circle"
                        onClick={startAudio}
                      ></i>
                    </a>
                  </li>
                )}

                <li onClick={nextAudio}>
                  <a>
                    <i className="fas fa-step-forward"></i>
                  </a>
                </li>

                {checkLoop ? (
                  <li onClick={loopEnable}>
                    <a>
                      <i className="fas fa-sync-alt" o></i>
                    </a>
                  </li>
                ) : (
                  <li onClick={loopDisnable}>
                    <a>
                      <div className="activee">
                        <i className="fas fa-sync-alt"></i>
                      </div>
                    </a>
                  </li>
                )}
              </ul>
              <div>
                <audio
                  ref={myRef}
                  id="musicPlayer"
                  className="musicPlayer"
                  src=""
                  controls
                ></audio>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-1">
            <div className="footer-btn-right">
              <i className="fas fa-video"></i>
              <i className="fas fa-microphone"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
