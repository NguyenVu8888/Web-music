import style from "./Postcard.module.css";

function Postcard(props) {
  return (
    <>
      {props.data.map((postcard, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img
                  className={style.imgThumb}
                  src={postcard.imageSinger}
                  alt=""
                />
                <div className={style.content}>
                  <a href="">
                    <i className="far fa-circle-play fa-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={style.disThumb}>
            <div className={style.sideContent}>
              <h4>{postcard.nameSingers}</h4>
              <a href="">{postcard.nationality}</a>
              <h1>
                <span># rank</span>
                <span>
                  <p className={style.date}>{postcard.createdAt}</p>
                </span>
              </h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Postcard;
