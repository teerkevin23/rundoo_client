import React, {useState} from 'react';

const ObjectState = () => {
  const [state, setState] = useState({ name: 'Default', age: 0 })
  const handleClick = val => {
    setState({
      ...state,
      [val]: state[val] + 1
    })
  };

  return (
    <div>
      <label input="text">
        Name: {state.name}
      </label>
      <br/>
      <label input="text">
        Age: {state.age}
      </label>
      <br/>
      <button onClick={()=>handleClick('name')}>change name</button>
      <br/>
      <button onClick={()=>handleClick('age')}>get older</button>
    </div>
  )
};
export default ObjectState;