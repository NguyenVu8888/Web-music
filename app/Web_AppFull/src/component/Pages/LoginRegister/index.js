import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import style from "./LoginRegister.module.css";

function LoginRegister() {
  // section login start
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("http://localhost:4000/api/account/login", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.token);
        localStorage.setItem("private", result.id);
        localStorage.setItem("privateImage", result.image);
        localStorage.setItem("privateName", result.name);
        localStorage.setItem("role", result.role);

        if (localStorage.getItem("role") == "admin") {
          navigate("/Admin");
        } else {
          navigate("/Home");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("username,password Wrong");
      });
  };

  // end section login

  // section regiter start

  const [regisUsername, setRegisUsername] = useState("");
  const [regisPass, setRegisPass] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");

  const register = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", regisUsername);
    urlencoded.append("password", regisPass);
    urlencoded.append("email", email);
    urlencoded.append("name", nameUser);
    urlencoded.append("playlist", "");
    urlencoded.append("favorites", "");
    urlencoded.append("history", "");
    urlencoded.append("role", "");

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
        alert("create success");
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // end section register

  var changelog = () => {
    var log = document.getElementById("log");
    var regis = document.getElementById("regis");
    if ((log.style.display = "flex" && regis.style.display == "none")) {
      log.style.display = "none";
      regis.style.display = "flex";
    } else {
      log.style.display = "flex";
      regis.style.display = "none";
    }
  };

  return (
    <>
      <div className={style.app}>
        <div className={style.content}>
          <div className={style.contentApp}>
            <div className={style.container}>
              <div className={style.contentLogin} id="log">
                <div className={style.loginLeft}>
                  <div className={style.title}>Login</div>
                  <div className={style.tip}>welcome to my website !!!</div>
                </div>

                <div className={style.loginRight}>
                  <div className={style.ip}>
                    <label htmlFor="">User Name</label>
                    <input
                      type="text"
                      className={style.ipLog}
                      placeholder="UserName"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                    />
                  </div>

                  <div className={style.ip}>
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      className={style.ipLog}
                      placeholder="password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                  <button
                    className={style.submit}
                    type="button"
                    onClick={login}
                  >
                    Login
                  </button>
                  <div className="question_user">
                    <span>Bạn chưa có tài khoản ?</span>
                    <span className={style.changeBtn} onClick={changelog}>
                      SignUp ?
                    </span>
                    <a href="" className={style.whatSigin}>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="" className={style.whatSigin}>
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.contentRegister} id="regis">
                <div className={style.loginLeft}>
                  <div className={style.title}>Register</div>
                  <div className={style.tip}>welcome to my website !!!</div>
                </div>

                <div className={style.loginRight}>
                  <div className={style.ip}>
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      className={style.ipLog}
                      placeholder="Email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className={style.ip}>
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      className={style.ipLog}
                      placeholder="Name"
                      onChange={(event) => {
                        setNameUser(event.target.value);
                      }}
                    />
                  </div>
                  <div className={style.ip}>
                    <label htmlFor="">User Name</label>
                    <input
                      type="text"
                      className={style.ipLog}
                      placeholder="UserName"
                      onChange={(event) => {
                        setRegisUsername(event.target.value);
                      }}
                    />
                  </div>

                  <div className={style.ip}>
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      className={style.ipLog}
                      placeholder="password"
                      onChange={(event) => {
                        setRegisPass(event.target.value);
                      }}
                    />
                  </div>
                  <button className={style.submit} onClick={register}>
                    Register
                  </button>
                  <div className="question_user">
                    <span>Bạn đã có tài khoản ?</span>
                    <span className={style.changeBtn} onClick={changelog}>
                      SignIn ?
                    </span>
                    <a href="" className={style.whatSigin}>
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="" className={style.whatSigin}>
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;
