import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './navbar'
import './App.css'
import Click from './click'

function App() {
  const[count ,setCount] = useState(0);

 
  const increment = () => {
    setCount(count + 1);
  };

 
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={increment}>
        Increment
      </button>
      {count === 0 && <p>Count can't go below 0!</p>}
      <Click/>
    </div>
  );
}

export default App;
 

 