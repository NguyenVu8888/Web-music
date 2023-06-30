import { useState, useEffect } from "react";

import "./DetailAlbum.css";
import ThumbCircle from "../ThumbCircle";
import ThumbMain from "../ThumbMain";
import ui from "../../../assets/img/bg-ani.jpg";

function DetailAlbum() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/album")
      .then((res) => res.json())
      .then((albums) => {
        setAlbums(albums);
      });
  }, []);

  const displayAlbum = albums[Math.floor(Math.random() * albums.length)];

  const [thumbcircles, setthumbcircles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/singer")
      .then((res) => res.json())
      .then((thumbcircles) => {
        setthumbcircles(thumbcircles);
      });
  }, []);
  const dataThumbCircle = thumbcircles.slice(0, 6);

  const [songAlbum, setSongAlbum] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((songAlbum) => {
        setSongAlbum(songAlbum);
      });
  }, []);

  const displayAlbumImage =
    songAlbum[Math.floor(Math.random() * songAlbum.length)];

  const [thumbmains, setThumbmains] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((thumbmains) => {
        setThumbmains(thumbmains);
      });
  }, []);

  const dataThummain = thumbmains.slice(0, 4);

  return (
    <>
      <div className="right-menu pagebody">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
            <div className="null-left"></div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
            <div className="main-menu mb-3 mt-2">
              <div className="main-menu-all">
                {/*  */}

                <div class="container-fluid pt-3 ">
                  <div class="row">
                    <div class="col-xl-4 leftcustom">
                      <img
                        class="imgThumb"
                        src={
                          displayAlbumImage ? displayAlbumImage.imageSong : ui
                        }
                      />
                      <div class="contentCustom">
                        <div class="title">
                          Piano bình yên{" "}
                          {displayAlbum ? displayAlbum.NameAlbum : "xxx"}
                        </div>
                        <div>
                          Xuất bản :
                          {displayAlbum
                            ? displayAlbum.releaseYear
                            : "00/00/0000"}
                        </div>
                        <div>
                          <span>
                            <a href="#">
                              {displayAlbum
                                ? displayAlbum.listSongs[0]
                                : "???????"}
                            </a>
                          </span>
                          <span>
                            <a href="#">Iron,</a>
                          </span>
                          <span>
                            <a href="#">diamon,</a>
                          </span>
                        </div>
                        <div>
                          {displayAlbum ? displayAlbum.singer : "Singer name"}
                        </div>
                        <div>
                          {displayAlbumImage ? displayAlbumImage.listen : "??"}k
                          Người yêu thích
                        </div>
                        <div
                          class="btn"
                          onclick={() => {
                            alert("day la buttom");
                          }}
                        >
                          <span class="insideBtn">
                            <i class="fa-solid fa-play"></i>
                          </span>
                          <span>Tiếp tục phát</span>
                        </div>
                        <div class="under">
                          <div class="underbtn">
                            <a href="">
                              <i className="far fa-heart"></i>
                            </a>
                          </div>
                          <div class="underbtn">
                            <a href="">
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-8 rightcustom ">
                      <div className="titlete">
                        Lời tựa: cảm nhận sự bình yên của piano
                      </div>
                      <div className="category-all-mysong ">
                        <ul className="ulAlbum">
                          <table class="customtable" data-spy="scroll">
                            <thead>
                              <tr>
                                <th>x</th>
                                <th class="roww1">Bài hát</th>
                                <th class="roww2">Album</th>
                                <th class="roww3">Thời gian</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/*  */}
                              {songAlbum.map((category, index) => (
                                <tr
                                  class="elementtable"
                                  key={index}
                                  id={category.nameSong}
                                  onClick={() => {
                                    let musicPlayer =
                                      document.getElementById("musicPlayer");
                                    var x = document.getElementById(
                                      category.nameSong
                                    );

                                    x.setAttribute("data", category.sourceSong);
                                    // x.setAttribute("className", "active");

                                    localStorage.removeItem("thumb");
                                    localStorage.removeItem("title");
                                    localStorage.removeItem("singer");

                                    localStorage.setItem(
                                      "thumb",
                                      category.imageSong
                                    );
                                    localStorage.setItem(
                                      "title",
                                      category.nameSong
                                    );
                                    localStorage.setItem(
                                      "singer",
                                      category.singer
                                    );

                                    localStorage.removeItem("currentMusic");
                                    localStorage.removeItem("currentMusic1");
                                    localStorage.setItem("currentMusic", index);

                                    var y =
                                      "http://localhost:4000/" +
                                      x.getAttribute("data");

                                    musicPlayer.src = y;
                                    musicPlayer.play();
                                  }}
                                >
                                  <td>
                                    <input type="checkbox" />
                                  </td>
                                  <td class="roww1">{category.singer}</td>
                                  <td class="roww2">{category.nameSong}</td>

                                  <td class="roww3">
                                    <div class="visiblecustom">time</div>
                                    <div class="hiden">
                                      <div className="under1">
                                        <div class="underbtn1">
                                          <a href="">
                                            <i className="far fa-heart"></i>
                                          </a>
                                        </div>
                                        <div class="underbtn1">
                                          <a href="">
                                            <i className="fas fa-ellipsis-h"></i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              ))}

                              {/*  */}
                              <tr>
                                <td></td>
                                <div>
                                  Songs: {songAlbum.length}
                                  <span className="dot">.</span> timeTotal
                                </div>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="section">
                    <div className="head">Nghệ sỹ tham gia</div>
                    <div className="content">
                      <div className="radio">
                        <ThumbCircle data={dataThumbCircle} />
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div className="head">Có thể bạn quan tâm</div>
                    <div className="content">
                      <ThumbMain data={dataThummain} />
                    </div>
                  </div>
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

export default DetailAlbum;
