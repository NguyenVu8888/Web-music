import style from "./Chanelhot.module.css";

function Chanelhot(props) {
  return (
    <>
      {props.data.map((chanel, index) => (
        <div className={style.wrapBox} key={index}>
          <div className={style.disThumb}>
            <div className={style.boxContent}>
              <div className={style.box}>
                <img className={style.imgThumb} src={chanel.videoMv} alt="" />
              </div>
            </div>
          </div>

          <div className={style.disThumb}>
            <div className={style.sideContent}>
              <div> {chanel.nameMv} </div>
              <h4 className={style.title}>{chanel.author}</h4>
              <div className={style.descreption}>{chanel.videoMv}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Chanelhot;
