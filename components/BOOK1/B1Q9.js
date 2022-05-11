import "../css/B1Q1.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const B1Q9 = () => {
  const navigate = useNavigate();
  const [pose, setPose] = useState("");
  useEffect(() => {
    window.addEventListener(
      "message",
      e => {
        if (e.data.message) {
          console.log(e.data.message);
          if (e.data.message == "O") {
            setPose("도와줌");
          } else {
            setPose("안도와줌");
          }

          console.log(pose);
        }
      },
      false
    );
  }, []);
  return (
    <div className="B1Q1">
      <div>
        <div
          className="quit"
          onClick={() => {
            navigate("/Save", { state: { page: "B1Q9" } });
          }}
        >
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp">동작을 따라해보세요!</div>
        <div className="Content">
          <p>
            풍뎅이가 매우 힘들어 보이네요!
            <br />
            곤경에 처한 풍뎅이를 도와줄까요? <br />
            아래 그림을 보고 동작을 따라해 선택해보세요! <br />
            <br />
          </p>
          <div className="paint4">
            <img
              className="img4"
              alt="book"
              src={require("../img/action3.png")}
            />
            <div>도와준다.</div>
          </div>
          <div>
            <div className="cam4">
              <iframe
                src="https://dongle06.github.io/AI-Pose/OX.html"
                width="100%"
                height="100%"
                allow="camera;microphone"
              ></iframe>
            </div>
          </div>
          <div className="paint4">
            <img
              className="img4"
              alt="book"
              src={require("../img/action1.png")}
            />
            <div>도와주지않는다.</div>
          </div>
          <div className="cam2"></div>
        </div>
      </div>
    </div>
  );
};
export default B1Q9;
