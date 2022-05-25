import "../css/B1Q2.css";
import { createBrowserHistory } from "history";
import Q7 from "./sounds/B1Q7.mp3";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { setUseProxies } from "immer";

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

const B1Q7 = () => {
  const [count, setCount] = useState("");
  const [audio, playing, toggle] = useAudio(Q7);
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

  useEffect(() => {
    window.addEventListener(
      "message",
      e => {
        if (e.data.message) {
          //console.log(e.data.message);
          if (e.data.message == "Fail") {
            setCount("실패");
            audio.pause();
            setTimeout(function() {
              navigate("/B1Q7_L");
            }, 2000);
          } else if (e.data.message == "Success") {
            setCount("성공");
            audio.pause();
            setTimeout(function() {
              navigate("/B1Q7_R");
            }, 2000);
          } else {
            setCount(e.data.message);
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
            audio.pause();
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
            다음 자세를 7초간 유지해주세요!
          </p>
          <div className="cam">
            <iframe
              frameBorder="0"
              src="https://dongle06.github.io/AI-Pose/Stretching.html"
              width="100%"
              height="100%"
              allow="camera;microphone"
            ></iframe>
          </div>
          <div className="ex">
            <img
              alt="ex"
              className="ex_img"
              src={require("../img/stretching2.png")}
            />
          </div>

          <div className="count1">{count}</div>
        </div>
      </div>
    </div>
  );
};
export default B1Q7;
