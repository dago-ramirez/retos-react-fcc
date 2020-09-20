import React from 'react';
import AddEventListener from './component/AddEventListener';
import CheckUserAge from './component/CheckUserAge';
import ConciseConditional from './component/ConciseConditional';
import ControlledInput from './component/ControlledInput';
import ControllerEvens from './component/ControllerEvens';
import GameOfChance from './component/GameOfChance';
import GateKeeper from './component/GateKeeper';
import MagicEightBall from './component/MagicEightBall';
import MyComponent from './component/MyComponent';
import MyForm from './component/MyForm';
import MyToDoList from './component/MyToDoList';
import PassCallBackAsProps from './component/PassCallBackAsProps';
import PassStateAsProps from './component/PassStateAsProps';
import SimpleCounter from './component/SimpleCounter';
import { Tittle } from './component/Tittle';
import ToggleAnElement from './component/ToggleAnElement';
import UseComponentDidMount from './component/UseComponentDidMount';

function App() {
  return (
    <div className="App mx-2 md:mx-10 flex flex-col items-center mt-0 md:mt-10">
      <Tittle />
      <ToggleAnElement />
      <MyComponent />
      <SimpleCounter />
      <ControlledInput />
      <MyForm />
      <PassStateAsProps />
      <PassCallBackAsProps />
      <UseComponentDidMount />
      <AddEventListener />
      <ControllerEvens />
      <MagicEightBall />
      <ConciseConditional />
      <CheckUserAge />
      <GameOfChance />
      <GateKeeper />
      <MyToDoList />
    </div>
  );
}

export default App;
