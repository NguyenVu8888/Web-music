import style from "./List.module.css";

function List(props) {
  return (
    <>
      {props.data.map((list, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.contentBody}>
            <div className={style.num}>{list.listen}</div>
            <div className={style.space}> - </div>

            <div
              className={style.wrap}
              id={list.nameSong}
              onClick={() => {
                let musicPlayer = document.getElementById("musicPlayer");
                var x = document.getElementById(list.nameSong);

                x.setAttribute("data", list.sourceSong);
                // x.setAttribute("className", "active");

                localStorage.removeItem("thumb");
                localStorage.removeItem("title");
                localStorage.removeItem("singer");

                localStorage.setItem("thumb", list.imageSong);
                localStorage.setItem("title", list.nameSong);
                localStorage.setItem("singer", list.singer);

                localStorage.removeItem("currentMusic");
                localStorage.removeItem("currentMusic1");
                localStorage.setItem("currentMusic", index);

                var y = "http://localhost:4000/" + x.getAttribute("data");

                musicPlayer.src = y;
                musicPlayer.play();
              }}
            >
              <div className={style.boxContent}>
                <div className={style.box}>
                  <img className={style.imgThumb} src={list.imageSong} alt="" />
                  <div className={style.content}>
                    <a className={style.ln}>
                      <i className="far fa-play-circle fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className={style.sideContent}>
                <h4 className={style.title}>{list.nameSong}</h4>
                <p className="textOver">
                  <a href="" className={style.lnk}>
                    {list.singer}
                  </a>
                </p>
              </div>

              <div className={style.descreption}>
                <a href="" className={style.des}>
                  Listen: {list.listen}
                </a>
              </div>
            </div>

            <div className={style.icon}>
              <a href="">
                <i className="fas fa-microphone"></i>
              </a>
            </div>

            <div className={style.icon}>
              <a href="">
                <i className="far fa-heart"></i>
              </a>
            </div>

            <div className={style.end}>
              <div className={style.time}> {list.createAt}</div>
              <div className={style.more}>
                <a href="">
                  <i className="fas fa-ellipsis-h"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
