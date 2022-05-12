import "./MyPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
import axios from "axios";
import cookies from "react-cookies";
import Auth from "../../hoc/auth";

const MyPage = () => {
  const navigate = useNavigate();
  const [BookId, setBookId] = useState(0);
  const [book1, setBook1] = useState("");
  const [book2, setBook2] = useState("");
  const [BookList, setBookList] = useState([]);
  //const location = useLocation();
  //const { id } = location.state;
  const Id = cookies.load("Id");
  //console.log("state", location.state);
  const onClickHandler = () => {
    axios.post("https://donglebook.org/api/logout").then(response => {
      //console.log(response.data);
      if (response.data.message == "success") {
        cookies.remove("Id");
        cookies.remove("jwt");
        navigate("/login");
      } else {
        alert("로그아웃 하는데 실패했습니다.");
      }
    });
  };

  const onCreate = page => {
    var BookValue = {
      id: BookId,
      page,
      name: "토끼와거북이",
      img: "../img/book1.png"
    };
    setBookList(BookList => [...BookList, BookValue]);
    setBookId(BookId + 1);
  };

  /*axios
    .get("https://donglebook.org/storage/findUsername/" + Id + "?format=json")
    .then(response => {
      if (response.status == 200) {
        console.log(response.data);
        const save = JSON.stringify(response.data);
        const ParseSave = JSON.parse(save);

        var data1 = JSON.stringify(
          ParseSave[Object.keys(ParseSave).length - 1].page
        );
        var data2 = JSON.stringify(
          ParseSave[Object.keys(ParseSave).length - 2].page
        );
        //onCreate(1, data1);
        //onCreate(2, data2);
        //setBook1(data);
        //setBook2(ParseSave[Object.keys(ParseSave).length - 2].page);
        console.log(data1);
        console.log("?");
        //console.log(book2);

        //console.log("/" + book1);
        //console.log(ParseSave[Object.keys(ParseSave).length - 1].page);
      } else {
        alert("불러오기에 실패했습니다.");
      }
    });*/

  useLayoutEffect(() => {
    if (book1 != "") {
      onCreate(book1);
      console.log(book1);
    }
  }, [book1]);
  useLayoutEffect(() => {
    if (book2 != "") {
      onCreate(book2);
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
          console.log(save);
          if (Object.keys(ParseSave).length == 1) {
            setBook1(ParseSave[Object.keys(ParseSave).length - 1].page);
          } else if (response.data != "") {
            setBook1(ParseSave[Object.keys(ParseSave).length - 1].page);
            setBook2(ParseSave[Object.keys(ParseSave).length - 2].page);
          }

          //onCreate(1, data1);
          //onCreate(2, data2);
          //setBook1(data);
          //setBook2(ParseSave[Object.keys(ParseSave).length - 2].page);
          //console.log(book1);
          //console.log("?");
          //console.log(book2);

          //console.log("/" + book1);
          //console.log(ParseSave[Object.keys(ParseSave).length - 1].page);
        } else {
          alert("불러오기에 실패했습니다.");
        }
      });
  }, []);

  //console.log(book2);
  /*const BookLi = [
    {
      id: 1,
      page: book1,
      name: "토끼와거북이",
      img: "../img/book1.png"
    },
    {
      id: 2,
      page: book2,
      name: "토끼와거북이",
      img: "../img/book1.png"
    }
  ];
  console.log(BookLi);*/

  //const navigateState = useNavigate().state;
  //const [userId, setUserId] = useState(navigateState && navigateState.id);
  return (
    <div className="Main">
      <div className="leftBook">
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
            <p className="user_id2"> 아이디 : {Id}</p>
            <p className="user_email"> 이메일 : aer561@naver.com</p>
            <p className="logout" onClick={onClickHandler}>
              로그아웃
            </p>
            <p className="withdraw">회원탈퇴</p>
          </div>
          <div className="header">
            <h1 className="load">불러오기</h1>
            <p className="load">동화가 아직 완성되지 않았어요.</p>
          </div>
          {Array.isArray(BookList)
            ? BookList.map(it => (
                <div
                  key={it.id}
                  className="book"
                  onClick={() => {
                    navigate("/" + it.page);
                  }}
                >
                  <img
                    className="book_img"
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
      <div className="line"></div>
      <div className="rightBook">
        <div className="header2">
          <button className="goMain" onClick={() => navigate(-1)}>
            메인화면
          </button>
        </div>
        <div className="bookSelect"></div>
      </div>
    </div>
  );
};

export default Auth(MyPage, true);
