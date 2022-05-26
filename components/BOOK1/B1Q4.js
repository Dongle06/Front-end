import "../css/B1Q1.css";
import { createBrowserHistory } from "history";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Q4 from "./sounds/B1Q4.mp3";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [audio, playing, toggle];
};

const B1Q4 = () => {
  const navigate = useNavigate();

  const [audio, playing, toggle] = useAudio(Q4);
  const history = createBrowserHistory();
  useEffect(() => {
    const listenBackEvent = () => {
      // 뒤로가기 할 때 수행할 동작을 적는다
      audio.pause();
    };

    const unlistenHistoryEvent = history.listen(({ action }) => {
      if (action === "POP") {
        listenBackEvent();
      }
    });

    return unlistenHistoryEvent;
  }, [
    // effect에서 사용하는 state를 추가
  ]);
  useEffect(() => {
    let unlisten = history.listen(location => {
      if (history.action === "PUSH") {
      }
      if (history.action === "POP") {
      }
    });

    return () => {
      unlisten();
    };
  }, [history]);

  useEffect(() => {
    toggle();
  }, []);
  const [pose, setPose] = useState("");
  useEffect(() => {
    window.addEventListener(
      "message",
      e => {
        if (e.data.message) {
          if (e.data.message == "HandsUp") {
            setPose("반칙한다.");
            audio.pause();

            setTimeout(function() {
              navigate("/B1Q4_L");
            }, 2000);
          } else if (e.data.message == "X") {
            setPose("포기한다.");
            audio.pause();
            setTimeout(function() {
              navigate("/B1Q4_R");
            }, 2000);
          } else {
            setPose(e.data.message);
          }
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
            audio.pause();
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

          <div className="cam4">
            <iframe
              frameBorder="0"
              src="https://dongle06.github.io/AI-Pose/XHandsUp.html"
              width="100%"
              height="100%"
              allow="camera;microphone"
            ></iframe>
          </div>

          <div className="paint4">
            <img
              className="img4"
              alt="book"
              src={require("../img/action2.png")}
            />
            <div>반칙한다.</div>
          </div>
          <div className="pose">{pose}</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q4;
