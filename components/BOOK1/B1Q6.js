import "../css/B1Q1.css";
import { useNavigate } from "react-router-dom";
const B1Q6 = () => {
  const navigate = useNavigate();
  return (
    <div className="B1Q1">
      <div>
        <div
          className="quit"
          onClick={() => {
            navigate("/Save", { state: { page: "B1Q6" } });
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
            토끼가 움직이지 못하고 있는 동안 <br />
            거북이는 열심히 달려 도착선에 가까워진 것 같아요! <br />
            하지만 아직 토끼에게도 기회가 있답니다. <br />
            아래 그림을 보고 동작을 따라해 선택해보세요!
            <br />
          </p>
          <div className="paint4">
            <img
              className="img4"
              alt="book"
              src={require("../img/action3.png")}
            />
            <div>포기한다.</div>
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
            <div>포기하지 않는다.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default B1Q6;
