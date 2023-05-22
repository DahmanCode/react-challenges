import React, {useState} from "react";
import memesData from "../data/memesData"

function Meme() {
  
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1g8my4.jpg"
  })
  
  function getMemeImg() {
    const memesArray = memesData.data.memes
    const randomURL = memesArray[Math.floor(Math.random() * memesArray.length)].url
    setMeme(prevMem => ({
      ...prevMem,
      randomImg: randomURL
    }))
  }

  return(
    <main>
      <div className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="form__input"
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form__input"
        />
        <button 
        className="form__button"
        onClick={getMemeImg}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImg} className="meme__img" />
    </main>
  )
}

export default Meme