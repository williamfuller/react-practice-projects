import "./App.css"
import {useRef, useState} from "react";

const TENORAPIKEY = "" // put ya key here
const TENORROOT = "https://tenor.googleapis.com/v2"
const SEARCHENDPOINT = "search?q="

const Display = ({url}) => {

  return (
    <div className="container">
        <img className = {url !== ""?"gif":"gif hidden"} src={url} alt="Gif element"/>
    </div>
  )
}

const QueryBar = ({setUrl}) =>{

  const queryRef = useRef(null);

  function searchGif() {
    const fieldContents = queryRef.current.value;

    if(fieldContents !== ""){
      fetch(TENORROOT + "/" + SEARCHENDPOINT + fieldContents + "&key=" + TENORAPIKEY +"&limit=1")
      .then(response => response.json())
      .then(responseJson => {
        setUrl(responseJson["results"][0]["media_formats"]["gif"]["url"])
      })

    }
  }

  return(
    <div className="queryContainer">
      <input className = "queryInput" type="text" placeholder="What do you seek?" ref={queryRef}></input>
      <button className = "queryButton" onClick={() => searchGif()}>Find</button>
    </div>
  )
}

function App() {
  
  const [url, setUrl] = useState("")

  return (
    <>
      <h1>Super Simple GIF Finder</h1>
      <Display url={url}/>
      <QueryBar setUrl={setUrl}/>
    </>
  );
}

export default App;
