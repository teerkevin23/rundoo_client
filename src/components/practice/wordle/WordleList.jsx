import React from 'react';
import Word from "./Word";
import '../styles.css';

const WordleList = ({words, solution, setWin}) => {
  return (
    <div className={'word-list-container'}>
      {words && words.map((word) => {
        if (word.toUpperCase() === solution) {
          setWin(true);
        }
        return (
          <Word word={word} solution={solution}/>
        );
      })}
    </div>
  );
};
export default WordleList;

