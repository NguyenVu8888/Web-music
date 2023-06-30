import { useState, useEffect } from "react";

function SettingMv() {
  const [mvs, setMvs] = useState([]);

  const [mvName, setMvName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageMV, setImageMV] = useState("");
  const [videoMV, setVideoMV] = useState("");
  const [timeMv, setTimeMv] = useState("");
  const [production, setProduction] = useState("");
  const [likeMV, setLikeMV] = useState("");
  const [shareMV, setShareMV] = useState("");

  const [editMVName, setEditMVName] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editImageMV, setEditImageMV] = useState("");
  const [editVideoMV, setEditVIdeoMV] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editProduction, setEditProduction] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    getMV();
  }, []);

  const getMV = () => {
    fetch("http://localhost:4000/api/mv")
      .then((res) => res.json())
      .then((mvs) => {
        setMvs(mvs);
      });
  };

  const addMV = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("nameMv", mvName);
    urlencoded.append("author", author);
    urlencoded.append("timeMv", timeMv);
    urlencoded.append("production", production);
    urlencoded.append("videoMv", videoMV);
    urlencoded.append("imageMv", imageMV);
    urlencoded.append("likeMv", likeMV);
    urlencoded.append("shareMv", shareMV);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/mv", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add music video success");
        getMV();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSelected = (index) => {
    const elementSelected = mvs[index];
    setEditMVName(elementSelected.nameMv);
    setEditAuthor(elementSelected.author);
    setEditTime(elementSelected.timeMv);
    setEditProduction(elementSelected.production);
    setID(elementSelected._id);
  };

  const editMV = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("NewNameMv", editMVName);
    urlencoded.append("NewAuthor", editAuthor);
    urlencoded.append("NewTimeMv", editTime);
    urlencoded.append("NewImageMv", editImageMV);
    urlencoded.append("NewVideoMv", editVideoMV);
    urlencoded.append("NewProductionMv", editProduction);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/mv/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("edit mv success");
        getMV();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deleteMV = (id) => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:4000/api/mv/${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("delete mv success");
        getMV();
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
                  <th scope="col">Tên Mv</th>
                  <th scope="col">Tác giả</th>
                  <th scope="col">Thời lượng</th>
                  <th scope="col">Nhà sản xuất</th>
                  <th scope="col">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#mvModel"
                    >
                      <i className="fa-solid fa-plus"></i> Thêm
                    </button>
                  </th>
                </tr>
              </thead>
              <div
                className="modal fade"
                id="mvModel"
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
                        Thêm Music video
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
                          <label htmlFor="nameMV">Tên music video</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nameMV"
                            placeholder="Tên mv"
                            onChange={(event) => {
                              setMvName(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="author">Tác giả</label>
                          <input
                            type="text"
                            className="form-control"
                            id="author"
                            placeholder="Tác giả"
                            onChange={(event) => {
                              setAuthor(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="imagMV">anh bia</label>
                          <input
                            type="text"
                            className="form-control"
                            id="imageMV"
                            placeholder="duong dan hinh anh"
                            onChange={(event) => {
                              setImageMV(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="video">Video</label>
                          <input
                            type="text"
                            className="form-control"
                            id="video"
                            placeholder="duong dan nguon"
                            onChange={(event) => {
                              setVideoMV(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="time">Thời lượng</label>
                          <input
                            type="text"
                            className="form-control"
                            id="time"
                            placeholder="Thời lương"
                            onChange={(event) => {
                              setTimeMv(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="production">Nhà sản xuất</label>
                          <textarea
                            className="form-control"
                            id="production"
                            defaultValue={"xxxxxxx"}
                            onChange={(event) => {
                              setProduction(event.target.value);
                            }}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="like">So luot thich</label>
                          <input
                            type="number"
                            className="form-control"
                            id="like"
                            placeholder="so luot thich (number)"
                            onChange={(event) => {
                              setLikeMV(event.target.value);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="share">So luot chia se</label>
                          <input
                            type="number"
                            className="form-control"
                            id="share"
                            placeholder="So luot chia se (numer)"
                            onChange={(event) => {
                              setShareMV(event.target.value);
                            }}
                          />
                        </div>

                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={addMV}
                        >
                          Thêm
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <tbody>
                {mvs.map((mv, index) => (
                  <tr key={index}>
                    <td>{mv.nameMv}</td>
                    <td>{mv.author}</td>
                    <td>{mv.timeMv}</td>
                    <td>{mv.production}</td>
                    <td>
                      <button
                        className="item_crud"
                        type="button"
                        data-toggle="modal"
                        data-target="#editmvModel"
                        onClick={() => {
                          handleSelected(index);
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>

                      <button
                        className="item_crud"
                        onClick={() => {
                          deleteMV(mv._id);
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
          id="editmvModel"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Edit Music video
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
                    <label htmlFor="nameMV">Tên music video</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameMV"
                      placeholder="Tên mv"
                      value={editMVName}
                      onChange={(event) => {
                        setEditMVName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="author">Tác giả</label>
                    <input
                      type="text"
                      className="form-control"
                      id="author"
                      placeholder="Tác giả"
                      value={editAuthor}
                      onChange={(event) => {
                        setEditAuthor(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageMV">anh bia</label>
                    <input
                      type="text"
                      className="form-control"
                      id="imageMV"
                      placeholder=" anh bia"
                      onChange={(event) => {
                        setEditImageMV(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="videoMV">Video</label>
                    <input
                      type="text"
                      className="form-control"
                      id="videoMV"
                      placeholder="nguon mv"
                      onChange={(event) => {
                        setEditVIdeoMV(event.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Thời lượng</label>
                    <input
                      type="text"
                      className="form-control"
                      id="time"
                      placeholder="Thời lương"
                      value={editTime}
                      onChange={(event) => {
                        setEditTime(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="production">Nhà sản xuất</label>
                    <textarea
                      className="form-control"
                      id="production"
                      defaultValue={"xxxxxxx"}
                      value={editProduction}
                      onChange={(event) => {
                        setEditProduction(event.target.value);
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editMV(id);
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

export default SettingMv;
