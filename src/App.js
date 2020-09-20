import React from 'react';
import AddEventListener from './components/AddEventListener';
import CheckUserAge from './components/CheckUserAge';
import ConciseConditional from './components/ConciseConditional';
import ControlledInput from './components/ControlledInput';
import ControllerEvens from './components/ControllerEvens';
import GameOfChance from './components/GameOfChance';
import GateKeeper from './components/GateKeeper';
import MagicEightBall from './components/MagicEightBall';
import MyComponent from './components/MyComponent';
import MyForm from './components/MyForm';
import MyToDoList from './components/MyToDoList';
import PassCallBackAsProps from './components/PassCallBackAsProps';
import PassStateAsProps from './components/PassStateAsProps';
import SimpleCounter from './components/SimpleCounter';
import { Tittle } from './components/Tittle';
import ToggleAnElement from './components/ToggleAnElement';
import UseComponentDidMount from './components/UseComponentDidMount';

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
