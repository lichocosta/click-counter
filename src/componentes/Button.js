import React from "react";
import '../styles/Button.css'

function Button({ text, clickButton, manejarClick }) {
  return (
    <button
      className={clickButton ? 'click-button' : 'reset-button'}
      onClick={manejarClick}
    >      
      {text}
    </button>
  )
}

export default Button