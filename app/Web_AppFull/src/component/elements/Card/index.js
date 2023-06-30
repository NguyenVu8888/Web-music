import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  return (
    <>
      {props.data.map((card, index) => (
        <div
          className={style.wrapBox}
          key={index}
          onClick={() => {
            navigate("/Album");
          }}
        >
          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img
                  className={style.imgThumb}
                  src={card.imagePlaylist}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
