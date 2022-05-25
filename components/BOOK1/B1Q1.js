import "../css/B1Q1.css";
import { createBrowserHistory } from "history";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Q1 from "./sounds/Q1.mp3";
import again from "./sounds/again.mp3";
import Q1_s from "./sounds/Q1_select.mp3";
import Auth from "../../hoc/auth";
import { useSpeechRecognition } from "react-speech-kit";

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

const B1Q1 = () => {
  const [audio, playing, toggle] = useAudio(Q1);
  const navigate = useNavigate();
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
      {
        stop();
      }
      setTimeout(function() {
        navigate("/B1Q1_R");
      }, 2000);
    } else if (value.includes("콩콩")) {
      console.log("콩콩");
      stop();
      setTimeout(function() {
        navigate("/B1Q1_L");
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
            audio.pause();
            stop();
            navigate("/Save", { state: { page: "B1Q1" } });
          }}
        >
          <img
            className="quit_img"
            alt="quit"
            src={require("../img/quit.png")}
          />
        </div>
        <div className="exp">주인공을 골라보세요!</div>
        <div className="Content">
          <p>
            토끼와 거북이가 달리기 경주를 하기로 했어요. <br />
            여러분은 토끼와 거북이 중 한 친구의 몸에 들어가 경주를 이끌 수
            있답니다! <br />
            누구의 몸으로 들어갈까요?
            <br />
            <br />
            아래와 같이 말해보세요!
          </p>
          <div className="paint1">
            <img
              className="img"
              alt="book"
              src={require("../img/rabbit2.png")}
            />
            <div className="text_r">토끼는 "빵빵"</div>
          </div>
          <div className="paint2">
            <img
              className="img"
              alt="book"
              src={require("../img/turtle2.png")}
            />
            <div className="text_t">거북이는 "콩콩"</div>
          </div>
          <div>
            <img
              className="micro"
              alt="micro"
              src={require("../img/micro.png")}
            />
          </div>
          <div className="answer">{value}</div>

          {listening && <div className="reco">인식 중</div>}
        </div>
      </div>
    </div>
  );
};
export default B1Q1;
