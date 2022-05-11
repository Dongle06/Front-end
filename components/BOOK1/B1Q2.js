import "../css/B1Q2.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const B1Q2 = () => {
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
            navigate("/Save", { state: { page: "B1Q2" } });
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
            토끼는 날렵하고 빠른 동물로 유명하죠? <br />
            토끼를 돕기 위해 준비운동으로 팔벌려뛰기 7회를 해볼까요?
          </p>
          {/*<div className="cam" dangerouslySetInnerHTML={iframePart()} />*/}
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
export default B1Q2;
