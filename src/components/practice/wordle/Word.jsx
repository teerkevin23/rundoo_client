import React, {useState, useEffect} from 'react';

import '../styles.css';

const CORRECT = {
  display: 'flex',
  height: 100,
  width: 100,
  backgroundColor: '#6ca965',
  padding: '38px',
  textAlign: 'center',
  alignItems: 'center',

};
const SOMEWHERE_ELSE = {
  display: 'flex',
  height: 100,
  width: 100,
  backgroundColor: '#c8b653',
  padding: '38px',
  textAlign: 'center',
  alignItems: 'center',

};
const NOT = {
  display: 'flex',
  height: 100,
  width: 100,
  backgroundColor: '#787c7f',
  padding: '38px',
  textAlign: 'center',
  alignItems: 'center',
};
const Word = ({word, solution}) => {
  const [charArr, setCharArr] = useState([]);
  useEffect(() => {
    setCharArr(word.split(''));
  }, [word]);

  console.log('world', solution);

  return (
    <div className={'word'}>
      {charArr && charArr.map((letter, index)=> {

        let style = NOT
        if (letter.toUpperCase() === solution[index]) {
          style = CORRECT
        } else {
          if (solution.includes(letter.toUpperCase())) {
            style = SOMEWHERE_ELSE
          }
        }
        return (
          <div className={'letter'} style={style}>
            {letter.toUpperCase()}
          </div>
        );
      })}
    </div>
  )
}
export default Word;