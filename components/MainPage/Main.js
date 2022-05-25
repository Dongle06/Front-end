import "./Main.css";
import { useNavigate, useLocation } from "react-router-dom";
import Auth from "../../hoc/auth";
import cookies from "react-cookies";
const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //const { id } = location.state;
  const Id = cookies.load("Id");
  //console.log("state", location.state);

  return (
    <div className="MyPage">
      <div className="leftBook">
        <div className="header">
          <h1>책을 골라보아요</h1>
        </div>
        <div className="bookSelect1">
          <div className="bookRow">
            <div
              className="book1"
              onClick={() => {
                navigate("/Book1");
              }}
            >
              <img
                className="book_img"
                alt="book"
                src={require("../img/book1.png")}
              />
              <div className="bookTitle">
                <h2>토끼와 거북이</h2>
              </div>
            </div>
            <div
              className="book2"
              onClick={() => {
                alert("해당 동화책은 준비중이에요");
              }}
            >
              <img
                className="book_img"
                alt="book1"
                src={require("../img/book2.png")}
              />
              <div className="bookTitle">
                <h2>아기돼지 삼형제</h2>
              </div>
            </div>
          </div>
          <div className="bookRow">
            <div
              className="book1"
              onClick={() => {
                alert("해당 동화책은 준비중이에요");
              }}
            >
              <img
                className="book_img"
                alt="book"
                src={require("../img/book3.png")}
              />
              <div className="bookTitle">
                <h2>피터팬</h2>
              </div>
            </div>
            <div
              className="book2"
              onClick={() => {
                alert("해당 동화책은 준비중이에요");
              }}
            >
              <img
                className="book_img"
                alt="book1"
                src={require("../img/book4.png")}
              ></img>

              <div className="bookTitle">
                <h2>신데렐라</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="rightBook">
        <div className="header2">
          <div
            className="user"
            onClick={() => {
              navigate("/mypage", { state: { id: Id } });
            }}
          >
            <img
              className="user_img"
              alt="user_img"
              src={require("../img/profile.png")}
            />
            <p className="user_id">{Id}님</p>
          </div>
        </div>
        <div className="bookSelect2">
          <div className="bookRow2">
            {" "}
            <div
              className="book1"
              onClick={() => {
                alert("해당 동화책은 준비중이에요");
              }}
            >
              <img
                className="book_img"
                alt="book"
                src={require("../img/book5.png")}
              />
              <div className="bookTitle">
                <h2>선녀와 나무꾼</h2>
              </div>
            </div>
            <div
              className="book2"
              onClick={() => {
                alert("해당 동화책은 준비중이에요");
              }}
            >
              <img
                className="book_img"
                alt="book1"
                src={require("../img/book6.png")}
              />
              <div className="bookTitle">
                <h2>미운 오리 새끼</h2>
              </div>
            </div>
          </div>
          <div className="bookRow2">
            {" "}
            <div
              className="book1"
              onClick={() => {
                alert("해당 동화책은 준비중이에요");
              }}
            >
              <img
                className="book_img"
                alt="book"
                src={require("../img/book7.png")}
              />
              <div className="bookTitle">
                <h2>헨젤과 그레텔</h2>
              </div>
            </div>
            <div
              className="book2"
              onClick={() => {
                alert("해당 동화책은 준비중이에요");
              }}
            >
              <img
                className="book_img"
                alt="book1"
                src={require("../img/book8.png")}
              />
              <div className="bookTitle">
                <h2>빨간 모자</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="next">
          <div className="pageCount">1 / 1</div>
          <div className="next_bt">
            <img alt="next_bt" src={require("../img/nextButton.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};
//export default Main;
export default Auth(Main, true);
