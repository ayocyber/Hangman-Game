import React from "react";

function Words({selectedWord,correctLetters}){
    return(
        <div className="word" id="word">
            {
                selectedWord.split('').map((letters, index)=>{
                    return(
                    <span className="letter" key={index}>
                        {correctLetters.includes(letters) ? letters : ""}
                    </span>
                    )
                })
            }

        </div>
    )
}

export default Words