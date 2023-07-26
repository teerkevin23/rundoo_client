import React, {useContext} from 'react';
import UserContext from "../context/userContext";
import AuthContext from "../context/authContext";
const SimpleUser = () => {
  const user = useContext(UserContext);
  const { name, location, cats } = useContext(AuthContext);
  return (
    <div className={'simple-user'}>
      <div className={'simple-user-info'}>
        user: {user}
      </div>
      <div className={'auth-info'}>
        auth destructured
        <span id={'name'} data-testid={'name'}>{name}</span>
        <span id={'location'}>{location}</span>
        <span id={'cats'}>{cats}</span>
      </div>
    </div>
  )
};
export default SimpleUser;