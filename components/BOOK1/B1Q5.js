import "../css/B1Q2.css";
import { createBrowserHistory } from "history";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Q5 from "./sounds/B1Q5.mp3";
import ReactDOM from "react-dom";

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

const B1Q5 = () => {
  const [audio, playing, toggle] = useAudio(Q5);
  useEffect(() => {
    toggle();
  }, []);
  const navigate = useNavigate();
  const [pose, setPose] = useState("");
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
    window.addEventListener(
      "message",
      e => {
        if (e.data.message) {
          console.log(e.data.message);
          if (
            e.data.message == "Angry" ||
            e.data.message == "Disgust" ||
            e.data.message == "Fear"
          ) {
            setPose("화남");
            setTimeout(function() {
              navigate("/B1Q13_A");
            }, 2000);
          } else if (e.data.message == "Happy" || e.data.message == "Neutral") {
            setPose("기쁨");
            setTimeout(function() {
              navigate("/B1Q13_H");
            }, 2000);
          } else if (e.data.message == "Sad" || e.data.message == "Surprise") {
            setPose("슬픔");
            setTimeout(function() {
              navigate("/B1Q13_S");
            }, 2000);
          } else {
            setPose("표정을 다시 한 번 지어주세요.");
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
            audio.pause();
            navigate("/Save", { state: { page: "B1Q5" } });
          }}
        >
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp"> 표정을 지어보아요!</div>
        <div className="Content2">
          <p>
            경주에서 진 토끼가 거북이에게 해주고 싶은 말이 있다고 해요.
            <br />
            말에 맞는 표정을 짓는 것은 매우 중요하답니다. <br />
            여러분은 토끼가 어떤 기분일 것 같나요? <br />
            토끼의 기분을 표정으로 표현해주세요! <br />
            여러분이 짓는 표정에 따라 토끼가 거북이에게 건네는 말이
            달라질거예요! <br />
          </p>
          <div className="camOut">
            <div className="cam5">
              <iframe
                frameBorder="0"
                src="https://yoonjiy.github.io/tfjs-emotion-detection/"
                width="100%"
                height="100%"
                allow="camera;microphone"
              ></iframe>
            </div>
          </div>
          <div className="state">{pose}</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q5;
