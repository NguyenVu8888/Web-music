import { useState, useEffect } from "react";

function SettingPlaylist() {
  const [playlists, setPlaylists] = useState([]);

  const [namePlayList, setNamePlayList] = useState("");
  const [creator, setCreator] = useState("");
  const [category, setCategory] = useState("");
  const [imagePlayList, setImagePlayList] = useState("");
  const [listSongs, setListSong] = useState("");

  const [id, setID] = useState("");
  const [editNamePlayList, SetEditNamePlayList] = useState("");
  const [editCreator, SetEditCreator] = useState("");
  const [editCategory, setEditCategory] = useState("");

  useEffect(() => {
    getPlaylist();
  }, []);

  const getPlaylist = () => {
    fetch("http://localhost:4000/api/playlist")
      .then((res) => res.json())
      .then((plays) => {
        setPlaylists(plays);
      });
  };

  const addPlaylist = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("NamePlaylist", namePlayList);
    urlencoded.append("Creator", creator);
    urlencoded.append("category", category);
    urlencoded.append("imagePlaylist", imagePlayList);
    urlencoded.append("ListSong", listSongs);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/playlist", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add playlist success");
        getPlaylist();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSelect = (index) => {
    const elementSelected = playlists[index];
    SetEditNamePlayList(elementSelected.NamePlaylist);
    SetEditCreator(elementSelected.Creator);
    setEditCategory(elementSelected.category);
    setID(elementSelected._id);
  };

  const editPlaylist = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("NewNamePlaylist", editNamePlayList);
    urlencoded.append("NewCreator", editCreator);
    urlencoded.append("Newcategory", editCategory);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/playlist/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edited playlist success");
        getPlaylist();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deletePlaylist = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/playlist/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("delete playlist success");
        getPlaylist();
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
                  <th scope="col">Name playlist</th>
                  <th scope="col">Creator</th>
                  <th scope="col">Category</th>
                  <th scope="col">Image playlist</th>
                  <th scope="col">List songs</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#playlistModal"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>
              <div
                className="modal fade"
                id="playlistModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="addSingerTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        Quản lý Playlist
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
                    <div className="modal-body">
                      <form method="post" action="">
                        <div className="form-group">
                          <label htmlFor="namePlaylist">Playlist Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="namePlaylist"
                            placeholder="Playlist Name"
                            onChange={(event) => {
                              setNamePlayList(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="creator">Creator</label>
                          <input
                            type="text"
                            className="form-control"
                            id="creator"
                            placeholder="Creator"
                            onChange={(event) => {
                              setCreator(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="Category">Category</label>
                          <input
                            type="text"
                            className="form-control"
                            id="Category"
                            placeholder="Category"
                            onChange={(event) => {
                              setCategory(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="imgPlaylist">Image Playlist</label>
                          <input
                            type="text"
                            className="form-control"
                            id="imgPlaylist"
                            placeholder="Image Playlist"
                            onChange={(event) => {
                              setImagePlayList(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listsongP">List Songs playlist</label>
                          <input
                            type="text"
                            className="form-control"
                            id="listsongP"
                            placeholder="List Songs playlist"
                            onChange={(event) => {
                              setListSong(event.target.value);
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addPlaylist}
                        >
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {playlists.map((play, index) => (
                  <tr key={index}>
                    <td>{play.NamePlaylist}</td>
                    <td>{play.Creator}</td>
                    <td>{play.category}</td>
                    <td>{play.imagePlaylist}</td>
                    <td>{play.ListSong}</td>
                    <td>
                      <button
                        type="button"
                        className=" item_crud"
                        data-toggle="modal"
                        data-target="#playlistEdit"
                        onClick={() => {
                          handleSelect(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deletePlaylist(play._id);
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
          id="playlistEdit"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTit">
                  Edit Playlist Information
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

              <div className="modal-body">
                <form method="post" action="">
                  <div className="form-group">
                    <label htmlFor="namePlaylistE">Playlist Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="namePlaylistE"
                      placeholder="Playlist Name"
                      defaultValue={editNamePlayList}
                      onChange={(event) => {
                        SetEditNamePlayList(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="creatorE">Creator</label>
                    <input
                      type="text"
                      className="form-control"
                      id="creatorE"
                      placeholder="Creator"
                      defaultValue={editCreator}
                      onChange={(event) => {
                        SetEditCreator(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Category">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Category"
                      placeholder="Category"
                      defaultValue={editCategory}
                      onChange={(event) => {
                        setEditCategory(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editPlaylist(id);
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

export default SettingPlaylist;
