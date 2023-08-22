import React, {useState} from 'react';

const Token = () => {
  // intialized via function
  // const [token] = useState(
  //   () => {
  //     let token = window.localStorage.getItem("my-token");
  //     return token || "default#-token#"
  //   }
  // );
  //or regular init state with ternary
  window.localStorage.setItem('my-token', 'kevin-token');
  const [token] = useState(window.localStorage.getItem("my-token") == null
    ? 'undefined-token'
    : window.localStorage.getItem("my-token")
  );
  return (
    <div>
      This is my token: {token}
    </div>
  );
};
export default Token;