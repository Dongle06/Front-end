import "./MyPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import axios from "axios";
import cookies from "react-cookies";
import Auth from "../../hoc/auth";

const MyPage = () => {
  const navigate = useNavigate();
  const [BookId1, setBookId1] = useState(0);
  const [BookId2, setBookId2] = useState(0);
  const [book1, setBook1] = useState("");
  const [book2, setBook2] = useState("");
  const [BookList, setBookList] = useState([]);
  //const location = useLocation();
  //const { id } = location.state;
  const Id = cookies.load("Id");
  const email = cookies.load("email");
  //console.log("state", location.state);
  const onClickHandler = () => {
    axios.post("https://donglebook.org/api/logout").then(response => {
      //console.log(response.data);
      if (response.data.message == "success") {
        cookies.remove("Id");
        cookies.remove("jwt");
        cookies.remove("email");
        navigate("/login");
      } else {
        alert("로그아웃 하는데 실패했습니다.");
      }
    });
  };

  const onCreate = (page, book_id) => {
    var BookValue = {
      id: parseInt(book_id),
      page,
      name: "토끼와거북이",
      img: "../img/book1.png"
    };
    setBookList(BookList => [...BookList, BookValue]);
    //setBookId(BookId + 1);
  };

  useLayoutEffect(() => {
    if (book1 != "") {
      onCreate(book1, BookId1);
      console.log(book1, BookId1);
    }
  }, [book1]);
  useLayoutEffect(() => {
    if (book2 != "") {
      onCreate(book2, BookId2);
      console.log(book2);
    }
  }, [book2]);
  useLayoutEffect(() => {
    console.log(BookList);
  }, [BookList]);

  useLayoutEffect(() => {
    axios
      .get("https://donglebook.org/storage/findUsername/" + Id + "?format=json")
      .then(response => {
        if (response.status == 200) {
          console.log(response.data);
          const save = JSON.stringify(response.data);
          const ParseSave = JSON.parse(save);
          if (Object.keys(ParseSave).length == 1) {
            setBookId1(ParseSave[Object.keys(ParseSave).length - 1].id);
            setBook1(ParseSave[Object.keys(ParseSave).length - 1].page);
          } else if (response.data != "") {
            setBookId1(ParseSave[Object.keys(ParseSave).length - 1].id);

            setBookId2(ParseSave[Object.keys(ParseSave).length - 2].id);
            setBook1(ParseSave[Object.keys(ParseSave).length - 1].page);
            setBook2(ParseSave[Object.keys(ParseSave).length - 2].page);
          }
        } else {
          alert("불러오기에 실패했습니다.");
        }
      });
  }, []);

  return (
    <div className="MyPage">
      <div className="leftBook1">
        <div className="header">
          <h1>내 정보</h1>
        </div>

        <div>
          <div className="User_info">
            <img
              className="user_img2"
              alt="user_img"
              src={require("../img/profile.png")}
            />
            <div className="user_info">
              <p className="user_id2"> 아이디 : {Id}</p>
              <p className="user_email"> 이메일 : {email}</p>
            </div>
            <div className="user_ch">
              <div className="withdraw">회원탈퇴</div>
              <div className="logout" onClick={onClickHandler}>
                로그아웃
              </div>
            </div>
          </div>
          <div className="BookSave">
            <div className="header">
              <h2>불러오기</h2>
              <div className="load">동화가 아직 완성되지 않았어요.</div>
            </div>

            {Array.isArray(BookList)
              ? BookList.map(it => (
                  <div
                    key={it.id}
                    className="book"
                    onClick={() => {
                      axios
                        .get("https://donglebook.org/storage/delete/" + it.id)
                        .then(response => {});
                      navigate("/" + it.page);
                    }}
                  >
                    <img
                      className="book_img2"
                      alt="book"
                      src={require("../img/book1.png")}
                    />
                    <div className="bookTitle">
                      <h2>{it.name}</h2>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="rightBook1">
        <div className="header3">
          <button className="goMain" onClick={() => navigate(-1)}>
            메인화면
          </button>
        </div>

        <div className="bookSelect"></div>
      </div>
    </div>
  );
};
//export default MyPage;
export default Auth(MyPage, true);
