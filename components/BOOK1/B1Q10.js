import "../css/B1Q1.css";
import { createBrowserHistory } from "history";
import Q10 from "./sounds/Q10.mp3";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const B1Q10 = () => {
  const [audio, playing, toggle] = useAudio(Q10);
  useEffect(() => {
    toggle();
  }, []);
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
  const navigate = useNavigate();
  const [pose, setPose] = useState("");
  useEffect(() => {
    window.addEventListener(
      "message",
      e => {
        if (e.data.message) {
          console.log(e.data.message);
          if (e.data.message == "O") {
            setPose("사용함");
            audio.pause();
            setTimeout(function() {
              navigate("/B1Q10_R");
            }, 2000);
          } else if (e.data.message == "X") {
            setPose("사용안함");
            setTimeout(function() {
              navigate("/B1Q10_L");
            }, 2000);
            audio.pause();
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
            navigate("/Save", { state: { page: "B1Q10" } });
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
            풍뎅이가 준 보석은 매우 반짝이고 아름다웠어요.
            <br />
            풍뎅이가 건넨 보석을 사용할까요? <br />
            아래 그림을 보고 동작을 따라해 선택해보세요! <br />
            <br />
          </p>
          <div className="paint4">
            <img
              className="img4"
              alt="book"
              src={require("../img/action3.png")}
            />
            <div>사용한다.</div>
          </div>
          <div>
            <div className="cam4">
              <iframe
                frameBorder="0"
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
            <div>사용하지않는다.</div>
          </div>
          <div className="pose">{pose}</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q10;
