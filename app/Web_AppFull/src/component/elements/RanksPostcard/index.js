import style from "./RanksPostcard.module.css";

function RanksPostcard(props) {
  return (
    <>
      {props.data.map((rank, index) => (
        <div
          className={style.wrapBox}
          key={index}
          id={rank.nameSong}
          onClick={() => {
            let musicPlayer = document.getElementById("musicPlayer");
            var x = document.getElementById(rank.nameSong);

            x.setAttribute("data", rank.sourceSong);
            // x.setAttribute("className", "active");

            localStorage.removeItem("thumb");
            localStorage.removeItem("title");
            localStorage.removeItem("singer");

            localStorage.setItem("thumb", rank.imageSong);
            localStorage.setItem("title", rank.nameSong);
            localStorage.setItem("singer", rank.singer);

            localStorage.removeItem("currentMusic");
            localStorage.removeItem("currentMusic1");
            localStorage.setItem("currentMusic", index + 7);

            var y = "http://localhost:4000/" + x.getAttribute("data");

            musicPlayer.src = y;
            musicPlayer.play();
          }}
        >
          <div className={style.disThumb}>
            <div className={style.rank}>{rank.listen}</div>
          </div>

          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img className={style.imgThumb} src={rank.imageSong} alt="" />
                <div className={style.content}>
                  <a className={style.ln}>
                    <i className="far fa-play-circle fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={style.disThumb}>
            <div className={style.sideContent}>
              <h4 className={style.title}>{rank.nameSong}</h4>
              <a href="" className={style.lnk}>
                {rank.lyrics}
              </a>
              <div className={style.bot}>
                <div>
                  {rank.listen} <span className={style.dot}>.</span>
                  {rank.listen}
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

export default RanksPostcard;
