import style from "./CardTopic.module.css";

function CardTopic(props) {
  return (
    <>
      {props.data.map((CardTopic, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.boxContent}>
            <div className={style.box}>
              <img
                className={style.imgThumb}
                src={CardTopic.imageSong}
                alt=""
              />
              <div className={style.content}>
                <div className={style.ln}>{CardTopic.nameSong}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardTopic;
