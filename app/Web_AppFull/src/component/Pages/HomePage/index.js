import { useState, useEffect } from "react";

import Category from "../../body/Category";
import Playlist from "../../body/Playlist";
import MVlit from "../../body/MVlit";
import Album from "../../body/Album";
import Artist from "../../body/Artist";
import "./Page1.css";

function Page1() {
  const idPrivate = localStorage.getItem("private");
  const imagePrivate = localStorage.getItem("privateImage");
  const namePrivate = localStorage.getItem("privateName");
  const [privateUser, setPrivateUser] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/account/${idPrivate}`, requestOptions)
      .then((response) => response.json())
      .then((privateUser) => {
        setPrivateUser(privateUser);
      })
      .catch((error) => console.log("error", error));
  }, []);
  console.log(privateUser);

  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((categoris) => {
        setCategoris(categoris);
      });
  }, []);

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((albums) => {
        setAlbums(albums);
      });
  }, []);

  const dataAlbum = albums.slice(0, 8);

  const [artits, setArtits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/singer")
      .then((res) => res.json())
      .then((artits) => {
        setArtits(artits);
      });
  }, []);
  const dataArtits = artits.slice(0, 4);

  const [mvlist, setMvlist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/mv")
      .then((res) => res.json())
      .then((mvlist) => {
        setMvlist(mvlist);
      });
  }, []);
  const dataMvlist = mvlist.slice(5, 8);

  const [playlists, setPlayist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/playlist")
      .then((res) => res.json())
      .then((playlists) => {
        setPlayist(playlists);
      });
  }, []);

  const dataPlaylist = playlists.slice(0, 6);

  return (
    <>
      <div className="pagebody">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
            <div className="null-left"></div>
          </div>
          <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 ">
            <div className="main-menu mb-3 mt-2">
              <div className="main-menu-all">
                {/*  */}

                <div className="all-menu-main">
                  <div className="my-app-account">
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="null-l"></div>
                      </div>
                      <div className="my-mind col-xl-4">
                        <img
                          src={
                            privateUser.length != 0
                              ? privateUser[0].imageUser
                              : imagePrivate
                          }
                          alt=""
                          className="my-avata"
                        />
                        <br />
                        <span className="name-my-app">
                          {privateUser.length != 0
                            ? privateUser[0].name
                            : namePrivate}
                        </span>
                      </div>
                      <div className="col-xl-4">
                        <div className="core">
                          <a href="" className="core-click">
                            MUA VIP NGAY
                          </a>
                          <a href="" className="core-click">
                            NHẬP CODE VIP
                          </a>
                          <a href="" className="su-head chose">
                            <i className="fas fa-ellipsis-h"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="container category-navbar">
                      <ul className="nav-category">
                        <li>
                          <a href="" className="nav-category_link">
                            TỔNG QUAN
                          </a>
                        </li>
                        <li>
                          <a href="" className="nav-category_link">
                            BÀI HÁT
                          </a>
                        </li>
                        <li>
                          <a href="" className="nav-category_link">
                            PLAYLIST
                          </a>
                        </li>
                        <li>
                          <a href="" className="nav-category_link">
                            ALBUM
                          </a>
                        </li>
                        <li>
                          <a href="" className="nav-category_link">
                            MV
                          </a>
                        </li>
                        <li>
                          <a href="" className="nav-category_link">
                            NHỆ SĨ{" "}
                          </a>
                        </li>
                        <li>
                          <a href="halo" className="nav-category_link">
                            TẢI LÊN
                          </a>
                        </li>
                      </ul>
                      <div className="nav-play-music">
                        <div className="all-song">
                          <button>BÀI HÁT</button>
                        </div>
                        <div className="btn-pls play-song">
                          <button>
                            <i className="fas fa-upload"></i> TẢI LÊN
                          </button>
                          <button>
                            <i className="far fa-play-circle"></i> PHÁT TẤT CẢ
                          </button>
                        </div>
                      </div>

                      <Category data={categoris} />
                    </div>
                  </div>
                </div>
                <Playlist data={dataPlaylist} />
                <MVlit data={dataMvlist} />

                <Album data={dataAlbum} />
                <Artist data={dataArtits} />
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
