import React from "react";

function Meme() {
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
        <button className="form__button">
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  )
}

export default Meme