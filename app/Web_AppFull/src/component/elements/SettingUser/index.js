import { useState, useEffect } from "react";

function SettingUser() {
  const [users, setUsers] = useState([]);

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [id, setID] = useState("");
  const [editUsername, SetEditUsername] = useState("");
  const [editPass, SetEditPass] = useState("");
  const [editRole, setEditRole] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    fetch("http://localhost:4000/api/account")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      });
  };

  const addUser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", Username);
    urlencoded.append("password", Password);
    urlencoded.append("email", email);
    urlencoded.append("name", nameUser);
    urlencoded.append("playlist", "");
    urlencoded.append("favorites", "");
    urlencoded.append("history", "");
    urlencoded.append("role", role);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/account/register", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        alert("add user success");
        getUser();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSelect = (index) => {
    const elementSelected = users[index];
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
        getUser();
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
        getUser();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="table_set">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tên tài khoản</th>
              <th scope="col">Mật khẩu</th>
              <th scope="col">Email</th>
              <th scope="col">Tên người dùng</th>
              <th scope="col">Quyền truy cập</th>
              <th scope="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#userModal"
                >
                  <i className="fa-solid fa-plus"></i> Thêm
                </button>
              </th>
            </tr>
          </thead>
          <div
            className="modal fade"
            id="userModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addSingerTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Quản lý user
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
                      <label htmlFor="nameAcc">Tên tài khoản</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nameAcc"
                        placeholder="Tên tài khoản"
                        onChange={(event) => {
                          setUsername(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pass">Mật khẩu</label>
                      <input
                        type="password"
                        className="form-control"
                        id="pass"
                        placeholder="Mật khẩu"
                        onChange={(event) => {
                          setPassword(event.target.value);
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
                          setEmail(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Tên chủ tài khoản</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Tên chủ tài khoản"
                        onChange={(event) => {
                          setNameUser(event.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="role">Quyền truy cập</label>
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder="Quyền truy cập"
                        onChange={(event) => {
                          setRole(event.target.value);
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={addUser}
                    >
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <tbody>
            {users.map((user, index) => (
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
          </tbody>
        </table>

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

export default SettingUser;
