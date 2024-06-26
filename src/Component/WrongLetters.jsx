import React from "react";

function WrongLetters({wrongLetters}){
    return(
      <div className="wrong-letters-container">
        <div id="wrong-letters">
            {wrongLetters.length > 0 && <p>Wrong</p>}
            {wrongLetters.map
            ((letters , index)=><span>{letters}</span>)
            .reduce((prev,curr)=> prev === null ? curr : [prev , "," , curr], null)
            }
        </div>
      </div>
    )
}

export default WrongLetters