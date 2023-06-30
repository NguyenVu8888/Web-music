import style from "./Thumb.module.css";

function Thumb(props) {
  return (
    <>
      {props.data.map((thumb, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.boxContent}>
            <div className={style.box}>
              <img className={style.imgThumb} src={thumb.imageSong} alt="" />
              <div className={style.content}>
                <a className={style.ln}>
                  <i
                    className="far fa-play-circle"
                    id={thumb.nameSong}
                    onClick={() => {
                      let musicPlayer = document.getElementById("musicPlayer");
                      var x = document.getElementById(thumb.nameSong);

                      x.setAttribute("data", thumb.sourceSong);
                      // x.setAttribute("className", "active");

                      localStorage.removeItem("thumb");
                      localStorage.removeItem("title");
                      localStorage.removeItem("singer");

                      localStorage.setItem("thumb", thumb.imageSong);
                      localStorage.setItem("title", thumb.nameSong);
                      localStorage.setItem("singer", thumb.singer);

                      localStorage.removeItem("currentMusic");
                      localStorage.removeItem("currentMusic1");
                      localStorage.setItem("currentMusic", index);

                      var y = "http://localhost:4000/" + x.getAttribute("data");

                      musicPlayer.src = y;
                      musicPlayer.play();
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <div className={style.sideContent}>
            <h4 className={style.textOver} title={thumb.nameSong}>
              {thumb.nameSong}
            </h4>
            <h4 className={style.textOver} title={thumb.singer}>
              <a href="">{thumb.singer}</a>
            </h4>
            <h1 className={style.textOver}>{thumb.createdAt}</h1>
          </div>

          <div className={style.sideMore}>
            <a href="" className={style.sideMoreBtn}>
              <i className="fas fa-ellipsis-h"></i>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Thumb;
