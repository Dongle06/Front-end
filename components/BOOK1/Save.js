import "../css/B1Q1.css";
import { useNavigate, useLocation } from "react-router-dom";
import cookies from "react-cookies";
import axios from "axios";
const Save = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { page } = location.state;
  const Id = cookies.load("Id");
  const onClickHandler = () => {
    let body = {
      username: Id,
      page: page
    };

    axios
      .post("https://donglebook.org/storage/storage_list?format=json", body)
      .then(response => {
        console.log(response);
        if (response.status == 201) {
          navigate("/main");
        } else {
          alert("저장에 실패했습니다.");
        }
      });
  };

  return (
    <div className="B1Q1">
      <div>
        <div className="quit" onClick={() => navigate(-1)}>
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp">종료하시겠습니까?</div>
        <div className="Content">
          <div className="btn_div">
            <button className="btn1" onClick={onClickHandler}>
              저장하고 종료하기
            </button>
          </div>
          <div className="btn_div">
            <button
              className="btn2"
              onClick={() => {
                navigate("/main");
              }}
            >
              그냥 종료하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Save;
