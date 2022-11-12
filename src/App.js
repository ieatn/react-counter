import './App.css';
import {React, useState} from 'react';
export default function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  const minus = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div className="App">
      {count}
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
