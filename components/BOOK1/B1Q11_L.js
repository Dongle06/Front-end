import video from "./Video/T-NE-NG.mp4";
import ReactPlayer from "react-player/lazy";
import { useNavigate } from "react-router-dom";
function B1Q11_L() {
  //운동 제대로
  const EndedVideo = () => {
    navigate("/B1Q12");
  };
  const navigate = useNavigate();
  return (
    <div className="Anim">
      <div className="video">
        {" "}
        <ReactPlayer
          className="react-player"
          url={video} // 플레이어 url
          width="100%" // 플레이어 크기 (가로)
          height="100%" // 플레이어 크기 (세로)
          playing={true} // 자동 재생 on
          muted={false}
          onEnded={() => EndedVideo()} // 플레이어 끝났을 때 이벤트
        />
      </div>
      <div
        className="quit1"
        onClick={() => {
          navigate("/Save", { state: { page: "B1Q11_L" } });
        }}
      >
        <img className="quit_img" alt="quit" src={require("../img/quit.png")} />
      </div>
      <div
        className="skip"
        onClick={() => {
          navigate("/B1Q12");
        }}
      >
        <img className="skip_img" alt="skip" src={require("../img/skip.png")} />
      </div>
    </div>
  );
}

export default B1Q11_L;
