import './index.css';
import Countdown from "./Components/Countdown";
import Carousel from "./Components/Carousel";
import { useState, useRef } from "react";

function App() {
  const [buttonPosition, setButtonPosition] = useState({ top: "0", left: "50%" });
  const [isDefaultPosition, setIsDefaultPosition] = useState(true);
  const [isYesClicked, setIsYesClicked] = useState(false);
  const noButtonRef = useRef(null);

  const playAudio = ()=> {
    const audio = new Audio('/soundtrack.mp3');
    audio.play();
  };

  const handleYesClick = () => {
    if (!isYesClicked) {
      playAudio(); // Optionally play music or sound
      setIsYesClicked(true);
    }
    
  };

  const moveButton = () => {
    if (!noButtonRef.current) return;
  
    const buttonWidth = noButtonRef.current.clientWidth;
    const buttonHeight = noButtonRef.current.clientHeight;
    const screenWidth = window.innerWidth - buttonWidth;
    const screenHeight = document.documentElement.clientHeight - buttonHeight;
  
    // Ensure button stays within the bounds
    const randomX = Math.max(0, Math.random() * screenWidth);
    const randomY = Math.max(0, Math.random() * screenHeight);
    console.log("randomX: ", randomX);
    console.log("randomY: ", randomY);

    setIsDefaultPosition(false);
    setButtonPosition({ left: `${randomX}px`, top: `${randomY}px` });
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <Countdown />
      </header>
      {
        isYesClicked === false ? 
        <div className="question-container">
          <p id='question'>
            Will you be my Valentine, Sierra?
          </p>
          <div className='button-container'>
            <div id='yes-button'>
              <button onClick={() => handleYesClick()}>Yes</button>
            </div>
            <div id='no-button'>
              <button
                ref={noButtonRef}
                style={{
                  position: isDefaultPosition ? 'absolute' : 'fixed',
                  left: buttonPosition.left,
                  transform: isDefaultPosition ? 'translateX(25%)' : '',
                  top: buttonPosition.top,
                  zIndex: 1}}
                onMouseEnter={moveButton} // Moves on desktop hover
                onTouchStart={moveButton} // Moves on mobile touch
              >No</button>
            </div>
          </div>
        </div> : <></>
      }
      

      {isYesClicked && (
        <>
          <div className="response-message">
            <h3>Yay! You're my Valentine forever ❤️</h3>
            <p>Thank you so much for being mine. I'm really happy that you're in my life. I love you so much!</p>
          </div>
          <Carousel/>
        </>
      )}
      

      
    </div>
  );
}

export default App;
