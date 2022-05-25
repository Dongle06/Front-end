import "../css/B1Q1.css";
import { createBrowserHistory } from "history";
import Q3 from "./sounds/B1Q3.mp3";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpeechRecognition } from "react-speech-kit";
const B1Q3 = () => {
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
  const navigate = useNavigate();
  const [audio, playing, toggle] = useAudio(Q3);
  const [value, setValue] = useState("");
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

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: result => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setValue(result);
    }
  });
  useEffect(() => {
    toggle();
  }, []);
  useEffect(() => {
    console.log(playing);
    if (!playing) {
      listen({ interimResults: false });
    }
  }, [playing]);
  useEffect(() => {
    if (value.includes("빵빵")) {
      console.log("빵빵");
      stop();
      setTimeout(function() {
        navigate("/B1Q3_R");
      }, 2000);
    } else if (value.includes("콩콩")) {
      console.log("콩콩");
      stop();
      setTimeout(function() {
        navigate("/B1Q3_L");
      }, 2000);
    } else {
    }
  }, [value]);
  return (
    <div className="B1Q1">
      <div>
        <div
          className="quit"
          onClick={() => {
            stop();
            audio.pause();
            navigate("/Save", { state: { page: "B1Q3" } });
          }}
        >
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp">빵빵 or 콩콩 중에 하나를 말해봐요!</div>
        <div className="Content">
          <p>
            토끼는 잠시 쉬어가고 싶다는 생각이 들었어요. <br />
            나무 밑에서 잠시 쉬어갈까요? <br />
            <br />
            아래와 같이 말해보세요!
          </p>
          <div className="paint1">
            <img className="img" alt="book" src={require("../img/rest.png")} />
            <div className="text_r">쉬었다가면 "빵빵"</div>
          </div>
          <div className="paint2">
            <img
              className="img"
              alt="book"
              src={require("../img/notrest.png")}
            />
            <div className="text_t">쉬지않는다면 "콩콩"</div>
          </div>
          <div>
            <img
              className="micro"
              alt="micro"
              src={require("../img/micro.png")}
            />
          </div>
          <div className="answer">{value}</div>

          {listening && <div>인식 중</div>}
        </div>
      </div>
    </div>
  );
};
export default B1Q3;
