import './Drag.css';
import { useRef, useState } from 'react';

const SearchBar = ({urlSetter}) => {

  const textFieldContent = useRef("");

  return (
    <div>
      <input type="text" placeholder="Enter youtube URL" ref={textFieldContent}></input>
      <button onClick={() => urlSetter(textFieldContent.current.value)}>view</button>
    </div>
  )
}

const VideoWindow = ({url}) => {

  const [windowPosition, setWindowPosition] = useState({top: 0, left: 0});

  let isHidden = true;

  if(url !== ""){
    isHidden = false;
  }

  const getEmberdLinkFromUrl = url => {
    if(url !== ""){
      isHidden = false;
      return "https://www.youtube.com/embed/" + url.split("=").pop()
    }
  }

  const onMouseMove = e => {
    setWindowPosition({top: e.pageY- 20, left: e.pageX - 128})
  }
  return(
    <div className={isHidden ? "hide" : "videoContainer"} style = {{position: "absolute", ...windowPosition}}>
      <button onMouseMove={onMouseMove} className="dragBtn">.......<br/>.......</button>
      <iframe className="videoIframe" width="256" height="144" src={getEmberdLinkFromUrl(url)}
      title="YouTube iframe" frameborder="0"></iframe>
    </div>
  );
}
const Drag = () => {
  const [videoUrl, useVideoUrl] = useState("");

  return (
    <>
      <SearchBar urlSetter={useVideoUrl}/>
      <VideoWindow url={videoUrl}/>
    </>

  );
}

export default Drag;
