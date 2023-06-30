import { useState, useEffect } from "react";

function SettingSinger() {
  const [singers, setSingers] = useState([]);

  const [singerName, setSingerName] = useState("");
  const [birth, setbirth] = useState("");
  const [national, setNational] = useState("");
  const [songName, setSongName] = useState("");
  const [singerImage, setSingerImage] = useState("");

  const [editName, setEditName] = useState("");
  const [editBirth, setEditBirth] = useState("");
  const [editNational, setEditnational] = useState("");
  const [editSongs, setEditSongs] = useState("");
  const [editImage, setEditImage] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    getSinger();
  }, []);
  const getSinger = () => {
    fetch("http://localhost:4000/api/singer")
      .then((res) => res.json())
      .then((singers) => {
        setSingers(singers);
      });
  };

  const addSinger = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("nameSingers", singerName);
    urlencoded.append("Birthday", birth);
    urlencoded.append("nationality", national);
    urlencoded.append("nameSong", songName);
    urlencoded.append("imageSinger", singerImage);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/singer", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add singer success");
        getSinger();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSelected = (index) => {
    const elementSelected = singers[index];
    setEditName(elementSelected.nameSingers);
    setEditBirth(elementSelected.Birthday);
    setEditnational(elementSelected.nationality);
    setEditSongs(elementSelected.nameSong);
    setEditImage(elementSelected.imageSinger);
    setID(elementSelected._id);
  };

  const editSinger = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("NewnameSingers", editName);
    urlencoded.append("NewBirthday", editBirth);
    urlencoded.append("Newnationality", editNational);
    urlencoded.append("NewnameSong", editSongs);
    urlencoded.append("NewimageSinger", editImage);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/singer/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edit singer success");
        getSinger();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deleteSinger = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/singer/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("delete singer success");
        getSinger();
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
                  <th scope="col">Tên ca sĩ</th>
                  <th scope="col">Ngày sinh</th>
                  <th scope="col">Quốc tịch</th>
                  <th scope="col">Các bài hát</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addSinger"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>
              <div
                className="modal fade"
                id="addSinger"
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
                        Thêm Ca Sĩ
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
                          <label htmlFor="nameSinger">Tên ca sĩ</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nameSinger"
                            placeholder="Tên ca sĩ"
                            onChange={(event) => {
                              setSingerName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="birthDay">Ngày sinh</label>
                          <input
                            type="Date"
                            className="form-control"
                            id="birthDay"
                            placeholder="Ngày sinh"
                            onChange={(event) => {
                              setbirth(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="national">Quốc tịch</label>
                          <input
                            type="text"
                            className="form-control"
                            id="national"
                            placeholder="Quốc tịch"
                            onChange={(event) => {
                              setNational(event.target.value);
                            }}
                          />
                        </div>
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
                          <label htmlFor="imageSinger">Hình ảnh ca sĩ</label>
                          <input
                            type="text"
                            className="form-control"
                            id="imageSinger"
                            placeholder="đường dẫn hình ảnh"
                            onChange={(event) => {
                              setSingerImage(event.target.value);
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addSinger}
                        >
                          Thêm
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {singers.map((singer, index) => (
                  <tr key={index}>
                    <td>{singer.nameSingers}</td>
                    <td>{singer.Birthday}</td>
                    <td>{singer.nationality}</td>
                    <td>{singer.nameSong}</td>
                    <td>
                      <button
                        className="item_crud"
                        type="button"
                        data-toggle="modal"
                        data-target="#editSinger"
                        onClick={() => {
                          handleSelected(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deleteSinger(singer._id);
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
          id="editSinger"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Edit Singer Information
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
                    <label htmlFor="nameSinger">Tên ca sĩ</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameSinger"
                      value={editName}
                      placeholder="Tên ca sĩ"
                      onChange={(event) => {
                        setEditName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="birthDay">Ngày sinh</label>
                    <input
                      type="Date"
                      className="form-control"
                      id="birthDay"
                      placeholder="Ngày sinh"
                      onChange={(event) => {
                        setEditBirth(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="national">Quốc tịch</label>
                    <input
                      type="text"
                      className="form-control"
                      id="national"
                      value={editNational}
                      placeholder="Quốc tịch"
                      onChange={(event) => {
                        setEditnational(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nameSong">Tên bài hát</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameSong"
                      value={editSongs}
                      placeholder="Tên bài hát"
                      onChange={(event) => {
                        setEditSongs(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageSinger">Hình ảnh ca sĩ</label>
                    <input
                      type="text"
                      className="form-control"
                      id="imageSinger"
                      placeholder="đường dẫn hình ảnh"
                      onChange={(event) => {
                        setEditImage(event.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editSinger(id);
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

export default SettingSinger;
