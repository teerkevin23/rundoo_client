import React, {useState, useEffect} from 'react';
/*

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often,
 that it stalls the performance of the web page. In other words, it limits the rate at which a function
 gets invoked. Debouncing in JavaScript is a practice used to improve browser performance.
 Dec 22, 2022

 */
export default function InputDebouncer() {
  const [pinCode, setPinCode] = useState("");

  useEffect(() => {
    const getData = setTimeout(() => {
      console.log(pinCode);
      // do something here like API
    }, 2000);
    return () => clearTimeout(getData);
  }, [pinCode]);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setPinCode(event.target.value);
  };

  return (
    <div className={"input-debouncer"}>
      <input
        onChange={(e) => handleChange(e)}
        placeholder={"input here..."}/>
    </div>
  );
};
