import React, { useState, useEffect } from 'react';
import UserContext from "./userContext";

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('Default 2');
  useEffect(() => {
    setTimeout(() => {
      setUsername("Kevin")
    }, 5000);

    return () => console.log("cleanup!")
  }, []);



  return (
    <UserContext.Provider value={username}>{children}</UserContext.Provider>
  );
};