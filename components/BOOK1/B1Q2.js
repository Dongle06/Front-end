import "../css/B1Q2.css";
import ReactPlayer from "react-player/lazy";
import video from "./Video/stretching1.mp4";
import Q2 from "./sounds/Q2.mp3";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";

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

const B1Q2 = () => {
  const [count, setCount] = useState("0회");
  const [audio, playing, toggle] = useAudio(Q2);
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
          if (e.data.message == "Fail") {
            setCount("실패");
            setTimeout(function() {
              navigate("/B1Q2_R");
            }, 2000);
          } else if (e.data.message == "Success") {
            setCount("성공");
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
  useEffect(() => {
    toggle();
  }, []);
  useEffect(() => {
    if (count === "7회") {
      setTimeout(function() {
        navigate("/B1Q2_L");
      }, 3000);
    }
  }, [count]);
  return (
    <div className="B1Q2">
      <div>
        <div
          className="quit"
          onClick={() => {
            audio.pause();

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
              frameBorder="0"
              src="https://dongle06.github.io/AI-Pose/Stretching2.html"
              width="100%"
              height="100%"
              allow="camera;microphone"
            ></iframe>
          </div>
          <div className="ex">
            <ReactPlayer
              className="react-player"
              url={video} // 플레이어 url
              width="100%" // 플레이어 크기 (가로)
              height="100%" // 플레이어 크기 (세로)
              playing={true} // 자동 재생 on
              muted={false}
              loop={true}
              // 플레이어 끝났을 때 이벤트
            />
            {/*<img className="ex_img" src={require("../img/squat.png")} />*/}
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
