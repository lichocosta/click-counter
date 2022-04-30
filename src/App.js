import './App.css';
import Button from './componentes/Button'
import Counter from './componentes/Counter'
import clickLogo from './imgs/FreeCodeCamp_logo.svg'
import { useState } from 'react'

function App() {

  const [numClicks, setNumClicks] = useState(0)

  const manejarClick = () => {
    setNumClicks(numClicks + 1)
  }

  const resetCounter = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='logo'
          src={clickLogo}
          alt='Logo' 
        />
      </div>
      <div className='counter-container'>
        <Counter numClicks={numClicks} />
        <Button 
          text='Click'
          clickButton={true}
          manejarClick={manejarClick}
        />
        <Button 
          text='Reset'
          clickButton={false}
          manejarClick={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
