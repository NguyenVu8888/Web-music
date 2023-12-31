import { Link } from "react-router-dom";

import mainlogo from "../../assets/img/mainlogo.png";
import "./Nav.css";

function Nav() {
  return (
    <div className="left-menu">
      <div className="placeLogo">
        <Link className="logo-go-home text-center" to="/">
          <img src={mainlogo} alt="" className="logo" />
        </Link>
      </div>

      <ul className="left-on-menu" id="leftItems">
        <li className="left-on-item ">
          {localStorage.getItem("private") ? (
            <Link to="/Home" className="on-item-click">
              <i className="fab fa-phoenix-squadron "></i>
              Cá Nhân
            </Link>
          ) : (
            <a
              className="on-item-click"
              onClick={() => {
                alert("You need to login first");
              }}
            >
              <i className="fab fa-phoenix-squadron "></i>
              Cá Nhân
            </a>
          )}
        </li>
        <li className="left-on-item">
          <Link to="/" className="on-item-click">
            <i className="fas fa-record-vinyl"></i>
            Khám Phá
          </Link>
        </li>
        <li className="left-on-item">
          <Link to="/ZingChart" className="on-item-click">
            <i className="fas fa-heartbeat"></i>
            #zingchart
          </Link>
        </li>
        <li className="left-on-item">
          <Link to="/Radio" className="on-item-click">
            <i className="fa-solid fa-radio"></i>
            Radio
          </Link>
        </li>
        <li className="left-on-item">
          {localStorage.getItem("private") ? (
            <Link
              to=""
              className="on-item-click"
              onClick={() => {
                alert("Working");
              }}
            >
              <i className="far fa-newspaper"></i>
              Theo Dõi
            </Link>
          ) : (
            <a
              className="on-item-click"
              onClick={() => {
                alert("You need to login first");
              }}
            >
              <i className="far fa-newspaper"></i>
              Theo Dõi
            </a>
          )}
        </li>
      </ul>
      <ul className="left-under-menu">
        <li className="left-on-item">
          <Link to="/NhacMoi" className="on-item-click">
            <i className="fas fa-music"></i>
            Nhạc mới
          </Link>
        </li>
        <li className="left-on-item">
          <Link to="/Theloai" className="on-item-click">
            <i className="fab fa-slack"></i>
            Thể loại
          </Link>
        </li>
        <li className="left-on-item">
          <Link to="/MV" className="on-item-click">
            <i className="fas fa-video"></i>
            MV
          </Link>
        </li>
        <li className="left-on-item n76">
          <div className="ad">
            <p>Nghe nhạc không quảng cáo với kho nhạc VIP</p>
            <a href="" className="btn-vip">
              MUA VIP
            </a>
          </div>
        </li>
        <li className="left-on-item left-on-content t76">
          <h4>Thư Viện</h4>
          <a href="" className="on-item-click">
            <i className="fas fa-pencil-alt"></i>
          </a>
        </li>
        <li className="left-on-item">
          <a href="" className="on-item-click">
            <i className="fab fa-napster"></i>
            Bài hát
          </a>
        </li>
        <li className="left-on-item">
          <a href="" className="on-item-click">
            <i className="fas fa-sliders-h"></i>
            Playlist
          </a>
        </li>
        <li className="left-on-item">
          <a href="" className="on-item-click">
            <i className="far fa-clock"></i>
            Gần đây
          </a>
        </li>
        <li className="left-on-item tag">
          <a href="" className="on-item-click">
            Tháng 1
          </a>
        </li>
        <li className="left-on-item tag">
          <a href="" className="on-item-click">
            Nhạc Quốc Tế
          </a>
        </li>
      </ul>
      <div className="create-playlist">
        <a href="" className="add-playlist">
          <i className="fas fa-plus"></i>
          Tạo mới Playlist
        </a>
      </div>
    </div>
  );
}

export default Nav;
