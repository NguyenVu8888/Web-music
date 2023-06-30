import style from "./PostcardRadio.module.css";
import { useNavigate } from "react-router-dom";

function PostcardRadio(props) {
  const navigate = useNavigate();
  return (
    <>
      {props.data.map((postcardRadio, index) => (
        <div
          className={style.boxContent}
          key={index}
          onClick={() => {
            navigate("/Album");
          }}
        >
          <div className={style.box}>
            <img
              className={style.imgThumb}
              src={postcardRadio.imageMv}
              alt=""
            />
          </div>

          <div className={style.underContent}>
            <h1 className={style.title} title={postcardRadio.nameMv}>
              {postcardRadio.nameMv}
            </h1>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostcardRadio;
