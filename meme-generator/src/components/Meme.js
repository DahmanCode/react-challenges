import React, {useState} from "react";
import memesData from "../data/memesData"

function Meme() {
  
  const [memeImg, setMemeImg] = useState("")
  
  function getMemeImg() {
    const memesArray = memesData.data.memes
    const randomURL = memesArray[Math.floor(Math.random() * memesArray.length)].url
    setMemeImg(randomURL)
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
      <img src={memeImg} className="meme__img" />
    </main>
  )
}

export default Meme