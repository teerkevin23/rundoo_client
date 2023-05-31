import React, { useState, useEffect } from 'react';
import CreateForm from './components/CreateForm';
import ProductList from "./components/ProductList";
//rm proptypes from package json and ignore fo rnow
const App = () => {
  // const [callback, setCallback] = useState(false);
  //whenever refresh value changes, force refresh on component tree
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    // refresh!
  }, [refresh]);

  return (
    <div>
      <div>
        <CreateForm
          refresh={refresh}
          setRefresh={setRefresh}
        />
        <hr/>
        <ProductList refresh={refresh}/>
      </div>
    </div>
  )
}

export default App;