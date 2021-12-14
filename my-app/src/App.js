import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment } from "./actions/increment";
import { decrement } from "./actions/decrement";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ?
        <h3>Private info</h3> : ''}
    </div>
  );
}

export default App;