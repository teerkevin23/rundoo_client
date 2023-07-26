import React, {FC} from 'react';

interface Props {
    numGuesses: number;
}
const GuessesBox: FC<Props> = ({ numGuesses }) => {
    return (
      <div className={'guesses-container'}>
          {numGuesses}
      </div>
    );
}
export default GuessesBox;