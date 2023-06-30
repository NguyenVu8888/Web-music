import { useState, useEffect } from "react";

function SettingAlbum() {
  const [albums, setAlbums] = useState([]);

  const [albumName, setAlbumName] = useState("");
  const [nameSinger, setNameSinger] = useState("");
  const [release, setRelease] = useState("");
  // const [albumImages, setAlbumImage] = useState("");
  const [listSong, setlistSong] = useState("");

  const [id, setID] = useState("");
  const [editAlbumName, SetEditAlbumName] = useState("");
  const [editNameSinger, SetEditNameSinger] = useState("");
  const [editRelease, setEditRelease] = useState("");
  // const [editAlbumImage, setEditAlbumImage] = useState("");
  const [editListSong, setEditListSong] = useState("");

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = () => {
    fetch("http://localhost:4000/api/album/")
      .then((res) => res.json())
      .then((albums) => {
        setAlbums(albums);
      });
  };

  const addAlbum = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("NameAlbum", albumName);
    urlencoded.append("NameSinger", nameSinger);
    urlencoded.append("releaseYear", release);
    // urlencoded.append("imageAlbum", albumImages);
    urlencoded.append("listSongs", listSong);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/album/", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add user success");
        getAlbums();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSelect = (index) => {
    const elementSelected = albums[index];
    SetEditAlbumName(elementSelected.NameAlbum);
    SetEditNameSinger(elementSelected.NameSinger);
    setEditRelease(elementSelected.releaseYear);
    setID(elementSelected._id);
  };

  const editAlbum = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("NewNameAlbum", editAlbumName);
    urlencoded.append("NewNameSinger", editNameSinger);
    urlencoded.append("NewreleaseYear", editRelease);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/album/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edited album success");
        getAlbums();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deleteAlbum = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/album/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("delete album success");
        getAlbums();
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
                  <th scope="col">Tên Album</th>
                  <th scope="col">ten singer</th>
                  <th scope="col">release year</th>
                  <th scope="col">Image Album</th>
                  <th scope="col">List songs</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#AlbumModal"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>
              <div
                className="modal fade"
                id="AlbumModal"
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
                        Quản lý Album
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
                          <label htmlFor="nameAlbum">Tên album</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nameAlbum"
                            placeholder="Tên album"
                            onChange={(event) => {
                              setAlbumName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="namesinger">Singer Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="namesinger"
                            placeholder="Singer Name"
                            onChange={(event) => {
                              setNameSinger(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="release">Release year</label>
                          <input
                            type="text"
                            className="form-control"
                            id="release"
                            placeholder="Release year"
                            onChange={(event) => {
                              setRelease(event.target.value);
                            }}
                          />
                        </div>
                        {/* <div className="form-group">
                      <label htmlFor="image">Images Album</label>
                      <input
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="Images Album"
                        onChange={(event) => {
                          setAlbumImage(event.target.value);
                        }}
                      />
                    </div> */}
                        <div className="form-group">
                          <label htmlFor="songs">List Songs</label>
                          <input
                            type="text"
                            className="form-control"
                            id="songs"
                            placeholder="List songs"
                            onChange={(event) => {
                              setlistSong(event.target.value);
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addAlbum}
                        >
                          Add
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {albums.map((album, index) => (
                  <tr key={index}>
                    <td>{album.NameAlbum}</td>
                    <td>{album.NameSinger}</td>
                    <td>{album.releaseYear}</td>
                    <td>{album.imageAlbum}</td>
                    <td>{album.listSongs}</td>
                    <td>
                      <button
                        type="button"
                        className=" item_crud"
                        data-toggle="modal"
                        data-target="#AlbumEdit"
                        onClick={() => {
                          handleSelect(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deleteAlbum(album._id);
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
          id="AlbumEdit"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTit">
                  Edit Album Information
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
                <form action="">
                  <div className="form-group">
                    <label htmlFor="nameAlbumsE">Album Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={editAlbumName}
                      id="nameAlbumsE"
                      placeholder="Album Name"
                      onChange={(event) => {
                        SetEditAlbumName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="namesingerE">Singer Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={editNameSinger}
                      id="namesingerE"
                      placeholder="Singer Name"
                      onChange={(event) => {
                        SetEditNameSinger(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="releaseE">Quyền truy cập</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={editRelease}
                      id="releaseE"
                      placeholder="Quyền truy cập"
                      onChange={(event) => {
                        setEditRelease(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editAlbum(id);
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

export default SettingAlbum;
