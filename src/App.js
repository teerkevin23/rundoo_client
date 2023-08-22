import React from 'react';
import "./styles.css";

import {AuthProvider} from "./components/context/authProvider";
import {UserProvider} from "./components/context/userProvider";

import AccordionWrapper from "./components/practice/AccordionWrapper";
import KevinForm from "./components/practice/KevinForm";
import SimpleUser from "./components/practice/SimpleUser";
import AxiosGet from "./components/practice/AxiosGet";
import AxiosPost from "./components/practice/AxiosPost";
import AxiosPut from "./components/practice/AxiosPut";
import AxiosDel from "./components/practice/AxiosDel";
import AsyncComponent from "./components/practice/AsyncComponent";
import DropzoneT from "./components/practice/DropzoneT.tsx";
import ReactForm from "./components/practice/ReactForm";
// import InputDebouncer from "./components/practice/InputDebouncer";
import ProgressBars from "./components/practice/ProgressBars";
import TempConvert from "./components/practice/TempConvert";
import Input from "./components/practice/wordle/InputW";
import Wordle from "./components/practice/wordle/Wordle.tsx";
import ObjectState from "./components/practice/ObjectState";
import Token from "./components/window/Token";

const App = () => {
  return (
    <div>
      {/*<KevinForm/>*/}
      {/*<AccordionWrapper/>*/}
      {/*<AuthProvider>*/}
      {/*  <UserProvider>*/}
      {/*    <SimpleUser/>*/}
      {/*  </UserProvider>*/}
      {/*</AuthProvider>*/}
      {/*<AxiosGet/>*/}
      {/*<AxiosPost/>*/}
      {/*<AxiosPut/>*/}
      {/*<AxiosDel/>*/}
      {/*<AsyncComponent/>*/}
      {/*<DropzoneT/>*/}
      {/*<ReactForm/>*/}
      {/*<InputDebouncer />*/}
      {/*<TempConvert/>*/}
      {/*<Wordle/>*/}
      <Token/>
    </div>
  );
}

export default App;