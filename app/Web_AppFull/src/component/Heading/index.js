import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import History from "../body/History";

import "./Heading.css";

function Heading() {
  const [historis, setHistoris] = useState([]);

  const [editName, SetEditName] = useState("");
  const [editImageUser, SetEditImageUser] = useState("");
  const [editEmail, SetEditEmail] = useState("");
  const [editPass, SetEditPass] = useState("");
  const [editPlaylist, SetEditPlaylist] = useState("");
  const [editFavorites, SetEditFavorites] = useState("");

  const idPrivate = localStorage.getItem("private");
  const [privateUser, setPrivateUser] = useState([]);

  const [reload, setReload] = useState("");

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

  useEffect(() => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((historis) => {
        setHistoris(historis);
      });
  }, []);

  const dataHistory = historis.slice(0, 10);

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("private");
    localStorage.removeItem("role");
    localStorage.removeItem("privateImage");
    localStorage.removeItem("privateName");
    setReload(Math.random());
  };

  const handleChange = (color) => {
    document.body.style.backgroundColor = color;
    document.getElementById("heading").style.backgroundColor = color;
    document.getElementById("heading1").style.backgroundColor = color;
    console.log(document.getElementById("heading"));
  };

  const editUser = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("newName", editName);
    urlencoded.append("newImageUser", editImageUser);
    urlencoded.append("newPassword", editPass);
    urlencoded.append("newEmail", editEmail);
    urlencoded.append("newPlaylist", editPlaylist);
    urlencoded.append("newFavorites", editFavorites);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/account/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edited success");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="right-menu">
      <div className="row">
        <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
          <div className="null-left"></div>
        </div>
        <div className="col-xl-10 col-lg-10 col-md-11 col-sm-11 " id="heading">
          <div className="main-menu mb-3 mt-2">
            <div className="main-menu-all">
              <div className="head1 sticky-top">
                <div className="head2" id="heading1">
                  <div className="row headPage">
                    <div className="col-xl-9 col-lg-10 col-md-10 col-sm-10 ">
                      <div className="list-navbar">
                        <div className="btn-head">
                          <button className="nav-item">
                            <i className="fas fa-arrow-left"></i>
                          </button>
                          <button className="nav-item">
                            <i className="fas fa-arrow-right"></i>
                          </button>
                        </div>
                        <History />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-md-2">
                      <ul className="sub-list-head justify-content-end align-items-center">
                        <li>
                          <div class="dropdown">
                            <a
                              className="su-head dropdown-toggle"
                              data-toggle="dropdown"
                            >
                              <i className="fas fa-tshirt"></i>
                            </a>
                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item"
                                onClick={() => {
                                  handleChange("antiquewhite");
                                }}
                              >
                                Antiquewhite
                              </a>

                              <a
                                class="dropdown-item"
                                onClick={() => {
                                  handleChange("gainsboro");
                                }}
                              >
                                Gainsboro
                              </a>
                              <a
                                class="dropdown-item"
                                onClick={() => {
                                  handleChange("lightpink");
                                }}
                              >
                                Lightpink
                              </a>
                              <a
                                class="dropdown-item"
                                onClick={() => {
                                  handleChange("lightsalmon");
                                }}
                              >
                                Lightsalmon
                              </a>
                              <a
                                class="dropdown-item"
                                onClick={() => {
                                  handleChange("lightcyan");
                                }}
                              >
                                Lightcyan
                              </a>
                              <a
                                class="dropdown-item"
                                onClick={() => {
                                  handleChange("transparent");
                                }}
                              >
                                Normal
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="su-head" href="">
                            <i className="fas fa-upload"></i>
                          </a>
                        </li>
                        <li>
                          <a className="su-head">
                            <i className="fas fa-cog"></i>
                          </a>
                        </li>
                        <li>
                          {localStorage.getItem("private") ? (
                            <div class="dropdown">
                              <button
                                type="button"
                                class="btn dropdown-toggle"
                                data-toggle="dropdown"
                              >
                                Thêm
                              </button>
                              {localStorage.getItem("role") == "admin" ? (
                                <div class="dropdown-menu">
                                  <a
                                    class="dropdown-item"
                                    data-toggle="modal"
                                    data-target="#userModel"
                                  >
                                    Thông tin cá nhân
                                  </a>

                                  <Link to="/Admin" class="dropdown-item">
                                    <div className="account">Admin</div>
                                  </Link>
                                  <a
                                    class="dropdown-item"
                                    onClick={() => {
                                      alert("Working");
                                    }}
                                  >
                                    Setting
                                  </a>
                                  <Link to="/" class="dropdown-item">
                                    <div
                                      className="account"
                                      onClick={() => {
                                        Logout();
                                      }}
                                    >
                                      Logout
                                    </div>
                                  </Link>
                                </div>
                              ) : (
                                <div class="dropdown-menu">
                                  <a
                                    class="dropdown-item"
                                    data-toggle="modal"
                                    data-target="#userModel"
                                  >
                                    Thông tin cá nhân
                                  </a>

                                  <a
                                    class="dropdown-item"
                                    onClick={() => {
                                      alert("Working");
                                    }}
                                  >
                                    Setting
                                  </a>
                                  <Link to="/" class="dropdown-item">
                                    <div
                                      className="account"
                                      onClick={() => {
                                        Logout();
                                      }}
                                    >
                                      Logout
                                    </div>
                                  </Link>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link to="/Login" class="dropdown-item">
                              <div className="account" alt="">
                                Login/Logout
                              </div>
                            </Link>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="userModel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addSingerTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Thong tin ca nhan
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body col-lg-12">
              <div className="editInfor">
                <div className="showInfor col-lg-4">
                  <div className="imagUser">
                    <img
                      src={
                        privateUser.length != 0
                          ? privateUser[0].imageUser
                          : "https://cdn.pixabay.com/photo/2016/07/30/13/16/dandelion-1557110_640.jpg"
                      }
                      className="userImage"
                    ></img>
                  </div>
                  <div className="nameUser">
                    Name:
                    {privateUser.length != 0
                      ? privateUser[0].name
                      : "Name user"}
                  </div>
                  <div
                    className="emailUser"
                    title={
                      privateUser.length != 0
                        ? privateUser[0].email
                        : "Email user"
                    }
                  >
                    Email:
                    {privateUser.length != 0
                      ? privateUser[0].email
                      : "Email user"}{" "}
                  </div>
                  <div className="playlistUser">
                    Playlist:{" "}
                    {privateUser.length != 0
                      ? privateUser[0].playlist
                      : "Playlist"}{" "}
                  </div>
                  <div className="favouriteUser">
                    Favorites:
                    {privateUser.length != 0
                      ? privateUser[0].favorites
                      : "Favorites"}{" "}
                  </div>
                </div>
                <div className="changeInfor col-lg-8">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="nameAc">Tên nguoi dung</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameAc"
                        placeholder="Tên nguoi dung"
                        onChange={(event) => {
                          SetEditName(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="image">Anh dai dien</label>
                      <input
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="Anh dai dien"
                        onChange={(event) => {
                          SetEditImageUser(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passs">Mật khẩu</label>
                      <input
                        type="password"
                        className="form-control"
                        id="passs"
                        placeholder="Mật khẩu"
                        onChange={(event) => {
                          SetEditPass(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        onChange={(event) => {
                          SetEditEmail(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="playlist">Playlist</label>
                      <input
                        type="text"
                        className="form-control"
                        id="playlist"
                        placeholder="Playlist"
                        onChange={(event) => {
                          SetEditPlaylist(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="favorites">Favorites</label>
                      <input
                        type="text"
                        className="form-control"
                        id="favorites"
                        placeholder="Favorites"
                        onChange={(event) => {
                          SetEditFavorites(event.target.value);
                        }}
                      />
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        editUser(idPrivate);
                      }}
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
