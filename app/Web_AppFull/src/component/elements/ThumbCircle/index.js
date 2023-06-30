import style from "./ThumbCircle.module.css";

function ThumbCircle(props) {
  return (
    <>
      {props.data.map((thumbcircle, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.box}>
            <img className={style.imgBig} src={thumbcircle.imageSinger}></img>
            <img className={style.imgSmall} src={thumbcircle.imageSinger}></img>
          </div>
          <div className={style.box}>
            <h1 className={style.title}>{thumbcircle.nameSingers}</h1>
            <p>{thumbcircle.American} </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ThumbCircle;
