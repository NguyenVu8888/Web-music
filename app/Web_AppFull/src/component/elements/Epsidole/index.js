import style from "./Epsidole.module.css";

function Epsidole(props) {
  return (
    <>
      {props.data.map((epsidole, index) => (
        <div
          className={style.wrapBox}
          key={index}
          id={epsidole.nameSingers}
          onClick={() => {
            let musicPlayer = document.getElementById("musicPlayer");
            var x = document.getElementById(epsidole.nameSingers);

            x.setAttribute("data", "uploads/1687094852888.mp3");
            // x.setAttribute("className", "active");
            localStorage.setItem("currentMusic", index + 2);

            var y = "http://localhost:4000/" + x.getAttribute("data");

            musicPlayer.src = y;
            musicPlayer.play();
          }}
        >
          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img
                  className={style.imgThumb}
                  src={epsidole.imageSinger}
                  alt=""
                />
                <div className={style.content}>
                  <a href="" className={style.ln}>
                    <i className="far fa-play-circle fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={style.disThumb}>
            <div className={style.sideContent}>
              <h4 className={style.title}>{epsidole.nameSingers}</h4>
              <a href="" className={style.lnk}>
                {epsidole.nameSong}
              </a>
              <div className={style.bot}>
                <div>
                  {epsidole.nationality} <span className={style.dot}>.</span>
                  <span className={style.botDot}>
                    <a href="" className={style.ln}>
                      <i className="fas fa-bookmark"></i>
                    </a>
                    <a href="">
                      <i className="fas fa-ellipsis-h "></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Epsidole;
