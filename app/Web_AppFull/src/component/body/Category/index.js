import "./Category.css";
import albumImg from "../../../assets/img/album-iu.jpeg";

function Category(props) {
  return (
    <div className="category-my-song">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <div className="category-slide-album">
            <img src={albumImg} alt="" className="category-slide-album_img" />
          </div>
        </div>
        <div className="category-all-mysong col-xl-9 col-lg-8">
          <ul>
            {props.data.map((category, index) => (
              <li
                className="active"
                key={index}
                id={category.nameSong}
                onClick={() => {
                  let musicPlayer = document.getElementById("musicPlayer");
                  var x = document.getElementById(category.nameSong);

                  x.setAttribute("data", category.sourceSong);
                  // x.setAttribute("className", "active");

                  localStorage.removeItem("thumb");
                  localStorage.removeItem("title");
                  localStorage.removeItem("singer");

                  localStorage.setItem("thumb", category.imageSong);
                  localStorage.setItem("title", category.nameSong);
                  localStorage.setItem("singer", category.singer);

                  localStorage.removeItem("currentMusic");
                  localStorage.removeItem("currentMusic1");
                  localStorage.setItem("currentMusic", index);

                  var y = "http://localhost:4000/" + x.getAttribute("data");

                  musicPlayer.src = y;
                  musicPlayer.play();
                }}
              >
                <div className="detai-song">
                  <img src={category.imageSong} alt="" />
                  <div className="detai-name-song">
                    <span>{category.nameSong}</span>
                    <p>{category.singer}</p>
                  </div>
                </div>

                <div className="time-song">{category.listen}</div>
                <ul className="nav-song">
                  <li>
                    <a href="">
                      <i className="fas fa-microphone"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="far fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Category;
