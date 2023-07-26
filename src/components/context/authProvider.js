import React, {useContext} from "react";
import AuthContext from "./authContext";


export const AuthProvider = ({children}) => {
  const auth = useContext(AuthContext);
  console.log("provider", auth)
  return (
    <AuthContext.Provider {...auth} value={auth}>
      {children}
    </AuthContext.Provider>

  )
}