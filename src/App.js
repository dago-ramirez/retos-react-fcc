import React from 'react';
import ControlledInput from './component/ControlledInput';
import MyComponent from './component/MyComponent';
import SimpleCounter from './component/SimpleCounter';
import { Tittle } from './component/Tittle';
import ToggleAnElement from './component/ToggleAnElement';

function App() {
  return (
    <div className="App mx-2 md:mx-10 flex flex-col items-center mt-0 md:mt-10">
      <Tittle />
      <ToggleAnElement />
      <MyComponent />
      <SimpleCounter />
      <ControlledInput />
    </div>
  );
}

export default App;
