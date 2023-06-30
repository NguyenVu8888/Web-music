import { useState, useEffect } from "react";

function SettingImage() {
  const [id, setID] = useState("");
  const [editUsername, SetEditUsername] = useState("");
  const [editPass, SetEditPass] = useState("");
  const [editRole, setEditRole] = useState("");

  const [search, setSreach] = useState("");
  const [searchResult, setSreachResult] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://localhost:4000/api/account/search?q=${search}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((sreachResult) => {
        console.log(sreachResult);
        console.log(typeof sreachResult);
        setSreachResult(sreachResult);
      })
      .catch((error) => console.log("error", error));
  }, [search]);

  const handleSelect = (index) => {
    const elementSelected = search[index];
    SetEditUsername(elementSelected.username);
    SetEditPass(elementSelected.password);
    setID(elementSelected._id);
    setEditRole(elementSelected.role);
  };

  const editUser = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("newUsername", editUsername);
    urlencoded.append("newPassword", editPass);
    urlencoded.append("newRole", editRole);

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
        alert("edited user success");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deleteUser = (id) => {
    var requestOptions = {
      method: "DELETE",
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
        alert("delete user success");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="searchUser">
        <input
          className="input-head"
          id="input-head"
          type="text"
          placeholder="Nhập tên người dùng hoặc email..."
          onChange={(event) => {
            setSreach(event.target.value);
          }}
        />
      </div>
      <div className="table_set">
        <div className="category-all-mysong">
          <ul style={{ height: "780px" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Tên tài khoản</th>
                  <th scope="col">Mật khẩu</th>
                  <th scope="col">Email</th>
                  <th scope="col">Tên người dùng</th>
                  <th scope="col">Quyền truy cập</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {search.length > 0 ? (
                  <>
                    {searchResult.map((user, index) => (
                      <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td>
                          <button
                            type="button"
                            className=" item_crud"
                            data-toggle="modal"
                            data-target="#userEdit"
                            onClick={() => {
                              handleSelect(index);
                            }}
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </button>

                          <button
                            className="item_crud"
                            onClick={() => {
                              deleteUser(user._id);
                            }}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </ul>
        </div>

        <div
          className="modal fade"
          id="userEdit"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addSingerTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTit">
                  Edit User Information
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
                    <label htmlFor="nameAc">Tên tài khoản</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={editUsername}
                      id="nameAc"
                      placeholder="Tên tài khoản"
                      onChange={(event) => {
                        SetEditUsername(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passs">Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      defaultValue={editPass}
                      id="passs"
                      placeholder="Mật khẩu"
                      onChange={(event) => {
                        SetEditPass(event.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Role">Quyền truy cập</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={editRole}
                      id="Role"
                      placeholder="Quyền truy cập"
                      onChange={(event) => {
                        setEditRole(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      editUser(id);
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

export default SettingImage;
