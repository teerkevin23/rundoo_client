import React, {useState, useEffect} from 'react';
import InputW from "./InputW";
import WordleList from "./WordleList";
import axios from "axios";
import GuessesBox from "./GuessesBox";
import Banner from "../common/Banner";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";

const MAX_GUESSES = 5;
const URL = 'https://random-word-api.herokuapp.com/word?length=5'

const Wordle = () => {
  const [guessArr, setGuessArr] = useState([]);
  const [win, setWin] = useState(false);
  const [solution, setSolution] = useState('');
  const [numGuesses, setNumGuesses] = useState(MAX_GUESSES);

  useEffect(() => {
    getNewWord();
  }, []);
  const getNewWord = () : void => {
    axios.get(URL)
        .then((response) => {
          setSolution(response.data[0].toUpperCase());
        });
  }
  const setResetHandler = () : void => {
    setGuessArr([]);
    setWin(false);
    getNewWord();
    setNumGuesses(5);
  };
  const callback = (arr: []) : void => {
    setGuessArr(arr);
    setNumGuesses(numGuesses-1);
  }
  const LOSS_RENDER: ReactJSXElement = (
      <div className={'banner'}>
        <Banner header={"You Lost! No more guesses..."} style={'danger'}/>
        <button onClick={setResetHandler}>
          RESET
        </button>
      </div>
  );

  const WIN_RENDER: ReactJSXElement = (
      <div className={'banner'}>
        <Banner header={"You Win!"} style={'win'}/>
        <button onClick={setResetHandler}>
          RESET
        </button>
      </div>
  )

  return (
    <div className={'game-container'}>
      {
        !win
          && guessArr.length < MAX_GUESSES
          && <GuessesBox numGuesses={numGuesses}/>
      }
      {guessArr.length < MAX_GUESSES && <InputW guessArr={guessArr} cb={callback} win={win} n={solution.length}/>}
      <WordleList words={guessArr} solution={solution} setWin={setWin}/>
      {
        guessArr.length === MAX_GUESSES
          && !win
          && LOSS_RENDER
      }
      {
        win && WIN_RENDER
      }
    </div>
  );
}
export default Wordle;