import { useState, useEffect } from "react";

import "./History.css";

function History() {
  const [search, setSreach] = useState("");
  const [searchResult, setSreachResult] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/songs/search?q=${search}`, requestOptions)
      .then((response) => response.json())
      .then((sreachResult) => {
        setSreachResult(sreachResult);
      })
      .catch((error) => console.log("error", error));
  }, [search]);

  return (
    <>
      <div className="find align-items-center justify-content-end" id="find">
        <i className="fas fa-search posi"></i>
        <input
          className="input-head"
          id="input-head"
          type="text"
          placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
          onChange={(event) => {
            setSreach(event.target.value);
          }}
        />
        <div className="fake_after" id="fake_after"></div>
        {search.length > 0 ? (
          <ul className="input-head-history" id="history">
            {searchResult.map((history, index) => (
              <li
                key={index}
                id={history.nameSong}
                onClick={() => {
                  let musicPlayer = document.getElementById("musicPlayer");
                  var x = document.getElementById(history.nameSong);
                  x.setAttribute("data", history.sourceSong);
                  localStorage.removeItem("thumb");
                  localStorage.removeItem("title");
                  localStorage.removeItem("singer");

                  localStorage.setItem("thumb", history.imageSong);
                  localStorage.setItem("title", history.nameSong);
                  localStorage.setItem("singer", history.singer);

                  localStorage.removeItem("currentMusic");
                  localStorage.setItem("currentMusic", index);

                  var y = "http://localhost:4000/" + x.getAttribute("data");
                  musicPlayer.src = y;
                  musicPlayer.play();
                }}
              >
                <div href="">
                  <i className="fas fa-history"> </i>
                  {history.nameSong}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul></ul>
        )}
      </div>
    </>
  );
}

export default History;
