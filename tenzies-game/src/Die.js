import React from "react";

export default function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : 'white'
  }

  let dieValue = props.value

  function renderSwitch() {
    switch(dieValue) {
      case 1:
        return( 
          <div className="die-dot one">
            <span></span>
          </div>
        );
      case 2:
        return( 
          <div className="die-dot tow">
            <span></span>
            <span></span>
          </div>
        );
      case 3:
        return( 
          <div className="die-dot three">
            <span></span>
            <span></span>
            <span></span>
          </div>
        );
      case 4:
        return( 
          <div className="die-dot four">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        );
      case 5:
        return( 
          <div className="die-dot five">
            <span></span>
            <span></span>
            {/* <span></span> */}
            <span></span>
            <span></span>
          </div>
        );
      case 6:
        return( 
          <div className="die-dot six">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        );
    }
  }

  return (
    <div 
      className="die-face" 
      style={styles}
      onClick={props.holdDice}
    >
      {renderSwitch()}
    </div>
  )
}