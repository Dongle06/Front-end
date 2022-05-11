import "../css/B1Q1.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const B1Q4 = () => {
  const navigate = useNavigate();
  const [pose, setPose] = useState("");
  useEffect(() => {
    window.addEventListener(
      "message",
      e => {
        if (e.data.message) {
          console.log(e.data.message);
          if (e.data.message == "HanseUp") {
            setPose("반칙");
          } else {
            setPose("포기");
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
            navigate("/Save", { state: { page: "B1Q4" } });
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
            토끼가 낮잠을 자는 사이, 거북이는 도착선에 가까워지고 말았어요.{" "}
            <br />
            하지만 아직 토끼에게도 기회가 있답니다. <br />
            아래 그림을 보고 동작을 따라해 선택해보세요! <br />
            <br />
          </p>
          <div className="paint4">
            <img
              className="img4"
              alt="book"
              src={require("../img/action1.png")}
            />
            <div>포기한다.</div>
          </div>
          <div>
            <div className="cam4">
              <iframe
                src="https://dooli1971039.github.io/Participatory-fairy-tale-service_test/motion/test14_posnet/OX.html"
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
              src={require("../img/action2.png")}
            />
            <div>반칙한다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default B1Q4;
