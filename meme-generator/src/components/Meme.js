import React, {useState, useEffect} from "react";
// import memesData from "../data/memesData"

function Meme() {
  
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
    }, [])
  
  function getMemeImg() {
    // const memesArray = memesData.data.memes
    const randomURL = allMemes[Math.floor(Math.random() * allMemes.length)].url
    setMeme(prevMem => ({
      ...prevMem,
      randomImg: randomURL
    }))
  }

  function handleChange({target}) {
    const {name, value} = target
    setMeme(prevText => ({
      ...prevText,
      [name]: value
    }))
  }

  return(
    <main>
      <div className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="form__input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form__input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
        className="form__button"
        onClick={getMemeImg}
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImg} className="meme__img" />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme