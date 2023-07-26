import { createContext } from 'react';

const AuthContext = createContext({
    name: 'Kevin',
    location: 94114,
    cats: ['Pango', 'Mirana'],
    setAuth: () => {}
  }
);

export default AuthContext;