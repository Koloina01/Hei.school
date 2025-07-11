import { useState } from 'react';
import Navbar from './Components/Navbar';
import Etudes from './Components/Etudes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Etudes />
    </>
  )
}

export default App;
