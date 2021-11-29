import React from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter)
  const name = useSelector((state) => state.name)
  const clickAction = () => {
    dispatch({
      type: "counter",
      payload: 5
    })
  }
  return (
    <div className="App">
      <h2>{name}</h2>
      <h2>Counter {count}</h2>
      <button onClick={clickAction}>click</button>
    </div>
  );
}

export default App;
