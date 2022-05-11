import "../css/B1Q2.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const B1Q8 = () => {
  const [count, setCount] = useState("0회");

  useEffect(() => {
    window.addEventListener(
      "message",
      e => {
        if (e.data.message) {
          console.log(e.data.message);
          if (e.data.message == "Fail") {
            setCount("실패");
          } else {
            setCount(e.data.message + "회");
          }

          console.log(count);
        }
      },
      false
    );
  }, []);
  const navigate = useNavigate();
  return (
    <div className="B1Q2">
      <div>
        <div
          className="quit"
          onClick={() => {
            navigate("/Save", { state: { page: "B1Q8" } });
          }}
        >
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp"> 준비운동을 해요!</div>
        <div className="Content">
          <p>
            경주 전 몸을 풀기 위해 준비 운동을 하려고 해요. <br />
            성공하지 못한다면 거북이가 나중에 힘들지도 몰라요. <br />
            거북이가 되어 열심히 준비운동으로 팔벌려뛰기 7회를 해볼까요?
          </p>
          <div className="cam">
            <iframe
              src="https://dongle06.github.io/AI-Pose/Stretching2.html"
              width="100%"
              height="100%"
              allow="camera;microphone"
            ></iframe>
          </div>
          <div className="ex">
            <img className="ex_img" src={require("../img/squat.png")} />
          </div>
          {/*<button type="button" onClick={init}>
            Start
          </button>*/}
          <div className="count">{count}</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q8;
