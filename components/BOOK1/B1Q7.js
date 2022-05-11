import "../css/B1Q2.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const B1Q7 = () => {
  const [count, setCount] = useState("");

  useEffect(() => {
    window.addEventListener(
      "message",
      e => {
        if (e.data.message) {
          //console.log(e.data.message);
          if (e.data.message == "Fail") {
            setCount("실패");
          } else if (e.data.message == "Success") {
            setCount("성공");
          }

          //console.log(count);
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
            navigate("/Save", { state: { page: "B1Q7" } });
          }}
        >
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp"> 동작을 따라해요!</div>
        <div className="Content">
          <p>
            포기하지 않은 토끼는 빨리 다리에 난 쥐를 해결하고 다시 달리기를
            시작하려고 해요. <br />
            그러려면 약간의 유연성이 필요한 다음의 스트레칭 동작을 해내야
            한답니다. <br />
            다음 자세를 5초간 유지해주세요!
          </p>
          <div className="cam">
            <iframe
              src="https://dongle06.github.io/AI-Pose/Stretching.html"
              width="100%"
              height="100%"
              allow="camera;microphone"
            ></iframe>
          </div>
          <div className="ex"></div>

          <div className="count">{count}</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q7;
