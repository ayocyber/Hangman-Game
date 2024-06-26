import React from "react";
import { checkWin } from "./Helper";


function Popup({correctLetters , wrongLetters , selectedWord , SetPlayable, playAgain }){
 let finalmessage = "" 
 let finalMessageRevealWord = ""
 let playable = true
 if(checkWin (correctLetters , wrongLetters , selectedWord) === "win"){
  finalmessage = "Congratulation! You won 😁😁"
  playable = false
 }else if (checkWin(correctLetters , wrongLetters , selectedWord) === "lose"){
  finalmessage = "Unfortunately you Lost 😂😂"
  finalMessageRevealWord = `...the word was ${selectedWord}`
  playable = false
 }

 React.useEffect(()=> SetPlayable(playable))
    return(
    <div className="popup-container" style={finalmessage !== "" ? {display : "flex"} : {}}>
      <div className="popup">
        <h2>{finalmessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>

    )
}

export default Popup