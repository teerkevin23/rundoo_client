import React, {useState} from "react";
import "../styles.css";

const WORD = 'KEVIN'
const INPUT_SYTLE = {
  width: "300px",
  height: "42px",
  fontSize: "18pt"
}
const InputW = ({guessArr, cb, win, n}) => {
  const [guess, setGuess] = useState('');
  const inputHandler = (e) => {
    setGuess(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    cb([...guessArr, guess]);
  }

  return (
    <div className={'wordle-container'}>
      <form className={'center-container'} onSubmit={submitHandler}>
        <input style={INPUT_SYTLE} type="text" maxLength={n} minLength={n} name={"guess"} onChange={inputHandler} placeholder={'*****'}/>
        <button className={'button-style'} type={"submit"} disabled={win}>Submit</button>
      </form>
    </div>
  );
}

export default InputW;