import React from 'react'
import Header from './Component/Header';
import Figure from './Component/Figure';
import WrongLetters from './Component/WrongLetters';
import Words from './Component/Words';
import { show } from './Component/Helper';
import Notification from "./Component/Notification"
import Popup from "./Component/Popup"

const words = ["application", "programming", "interface" , "wizard"]
let selectedWord = words[Math.floor(Math.random()* words.length)]
function App() {
  const [Playable , SetPlayable] = React.useState(true)
  const [correctLetters , setCorrectLetters] = React.useState([])
  const [wrongLetters , setWrongLetters] = React.useState([])
  const [showNotification , setShowNotification] = React.useState(false)

  function playAgain(){
    SetPlayable(true)
    setCorrectLetters([])
    setWrongLetters([])

    const random =  Math.floor(Math.random()* words.length)
    selectedWord = words[random]
  }

   React.useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (Playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, Playable]);
  return (
    <div className="App">
        <Header/>
        <div className='game-container'>
          <Figure wrongLetters={wrongLetters}/>
          <WrongLetters wrongLetters={wrongLetters}/>
          <Words 
          correctLetters={correctLetters} 
          selectedWord={selectedWord}
          />
        </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} SetPlayable={SetPlayable} playAgain={playAgain}/> 
        <Notification showNotification={showNotification}/>
    </div>
  );
}

export default App;
