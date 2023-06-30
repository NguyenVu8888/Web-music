import { useState, useEffect } from "react";

function SettingSong() {
  const [songs, setSongs] = useState([]);

  const [songName, setSongName] = useState("");
  const [singerName, setSingerName] = useState("");
  const [songImage, setSongImage] = useState("");
  const [songsoucre, setSongSource] = useState("");
  const [songLyrics, setSongLyrics] = useState("");
  const [songListen, setSongListen] = useState("");
  const [songProduction, setSongProduction] = useState("");

  const [id, setID] = useState("");
  const [editSongName, setEditSongName] = useState("");
  const [editSingerName, setEditSingerName] = useState("");
  const [editSongImage, setEditSongImage] = useState("");
  const [editSongSource, setEditSongSource] = useState("");
  const [editSonglyrics, setEditSongLyrics] = useState("");

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = () => {
    fetch("http://localhost:4000/api/songs")
      .then((res) => res.json())
      .then((songs) => {
        setSongs(songs);
      });
  };

  const addSong = () => {
    var formdata = new FormData();
    formdata.append("nameSong", songName);
    formdata.append("singer", singerName);
    formdata.append("imageSong", songImage);
    formdata.append("sourceSong", songsoucre);
    formdata.append("lyrics", songLyrics);
    formdata.append("listen", songListen);
    formdata.append("production", songProduction);
    formdata.append("createdAt", "");
    formdata.append("updatedAt", "");

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/songs", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add song success");
        getSongs();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSelected = (index) => {
    const elementSelected = songs[index];
    setEditSongName(elementSelected.nameSong);
    setEditSingerName(elementSelected.singer);
    setEditSongImage(elementSelected.imageSong);
    setEditSongSource(elementSelected.sourceSong);
    setEditSongLyrics(elementSelected.lyrics);
    setID(elementSelected._id);
  };

  const editSong = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("NewnameSong", editSongName);
    urlencoded.append("Newsinger", editSingerName);
    urlencoded.append("NewimageSong", editSongImage);
    urlencoded.append("NewsourceSong", editSongSource);
    urlencoded.append("Newlyrics", editSonglyrics);
    urlencoded.append("createdAt", "");
    urlencoded.append("updatedAt", "");

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/songs/${id}`, requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edit song success");
        getSongs();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deleteSong = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/songs/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("delete song success");
        getSongs();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="table_set">
        <div className="category-all-mysong">
          <ul style={{ height: "780px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Tên bài hát</th>
                  <th scope="col">Ca sĩ</th>
                  <th scope="col">Lời bài hát</th>
                  <th scope="col">Lượt nghe</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addSong"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>

              <div
                className="modal fade"
                id="addSong"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addSongTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Thêm Bài Hát</h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form
                        method="post"
                        action=""
                        encType="multipart/form-data"
                      >
                        <div className="form-group">
                          <label htmlFor="nameSong">Tên bài hát</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nameSong"
                            placeholder="Tên bài hát"
                            onChange={(event) => {
                              setSongName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="singer">Ca sĩ</label>
                          <input
                            type="text"
                            className="form-control"
                            id="singer"
                            placeholder="Ca sĩ"
                            onChange={(event) => {
                              setSingerName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="imageSong">hình ảnh bài hát</label>
                          <input
                            type="text"
                            className="form-control"
                            id="imageSong"
                            placeholder="đường dẫn hình ảnh"
                            onChange={(event) => {
                              setSongImage(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="sourceSong">Nguon bai hat</label>
                          <input
                            type="file"
                            className="form-control"
                            id="sourceSong"
                            placeholder="đường dẫn nguon"
                            onChange={(event) => {
                              setSongSource(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lyric">Lời bài hát</label>
                          <textarea
                            className="form-control"
                            id="lyric"
                            defaultValue={"xxxxxxx"}
                            onChange={(event) => {
                              setSongLyrics(event.target.value);
                            }}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="listen">Lượt nghe</label>
                          <input
                            type="number"
                            className="form-control"
                            id="listen"
                            placeholder="dien so luot nghe (dang so)"
                            onChange={(event) => {
                              setSongListen(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="production">Don vi san xuat</label>
                          <input
                            type="text"
                            className="form-control"
                            id="production"
                            placeholder="don vi san xuat"
                            onChange={(event) => {
                              setSongProduction(event.target.value);
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addSong}
                        >
                          Thêm
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {songs.map((song, index) => (
                  <tr key={index}>
                    <td>{song.nameSong}</td>
                    <td>{song.singer}</td>
                    <td>{song.lyrics}</td>
                    <td>{song.listen}</td>
                    <td>
                      <button
                        className="item_crud"
                        type="button"
                        data-toggle="modal"
                        data-target="#editSong"
                        onClick={() => {
                          handleSelected(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deleteSong(song._id);
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ul>
        </div>

        <div
          className="modal fade"
          id="editSong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Song</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form method="post" action="">
                  <div className="form-group">
                    <label>Tên bài hát</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editSongName}
                      onChange={(event) => {
                        setEditSongName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ca sĩ</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editSingerName}
                      onChange={(event) => {
                        setEditSingerName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Hình ảnh bài hát</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="đường dẫn hình ảnh"
                      onChange={(event) => {
                        setEditSongImage(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>nguon bai hat</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="nguon bai hat"
                      onChange={(event) => {
                        setEditSongSource(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Lời bài hát</label>
                    <textarea
                      className="form-control"
                      defaultValue={editSonglyrics}
                      onChange={(event) => {
                        setEditSongLyrics(event.target.value);
                      }}
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editSong(id);
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
    </>
  );
}

export default SettingSong;
