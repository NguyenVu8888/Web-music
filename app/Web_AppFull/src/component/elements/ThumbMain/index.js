import style from "./ThumbMain.module.css";
import { useNavigate } from "react-router-dom";

function ThumbMain(props) {
  const navigate = useNavigate();
  return (
    <>
      {props.data.map((thumbmain, index) => (
        <div
          className={style.boxContent}
          key={index}
          onClick={() => {
            navigate("/Album");
          }}
        >
          <div className={style.box}>
            <img className={style.imgThumb} src={thumbmain.imageSong} alt="" />
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
            <p>{thumbmain.lyrics} </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ThumbMain;
