import { useState, useEffect } from "react";

import style from "./NhacMoi.module.css";
import List from "../../elements/List";

function NhacMoi() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((lists) => {
        setLists(lists);
      });
  }, []);
  const dataList = lists.slice(0, 100);
  return (
    <>
      <div className={style.pagebody}>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
            <div className="null-left"></div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
            <div className="main-menu mb-3 mt-2">
              <div className="main-menu-all">
                {/*  */}

                <div className="category-all-mysong ">
                  <ul className={style.ulAlbum}>
                    <div className={style.list}>
                      <List data={dataList} />
                    </div>
                  </ul>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NhacMoi;
