import style from "./ThumbTop.module.css";
import { useNavigate } from "react-router-dom";

function ThumbTop(props) {
  const navigate = useNavigate();
  return (
    <>
      {props.data.map((thumbtop, index) => (
        <div
          className={style.boxContent}
          key={index}
          onClick={() => {
            navigate("/Album");
          }}
        >
          <div className={style.box}>
            <img className={style.imgThumb} src={thumbtop.imageMv} alt="" />
            <div className={style.content}>
              <a href="" className={style.ln}>
                <i className="far fa-heart "></i>
              </a>
              <a href="" className={style.ln}>
                <i className="far fa-circle-play fa-2xl"></i>
              </a>
              <a href="" className={style.ln}>
                <i className="fas fa-ellipsis-h "></i>
              </a>
            </div>
          </div>

          <div className={style.underContent}>
            <div className={style.title}>{thumbtop.nameMv}</div>
            <p className={style.title1}>{thumbtop.author} </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ThumbTop;
