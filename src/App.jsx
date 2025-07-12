import { useState } from 'react';
import Navbar from './Components/Navbar';
import Etudes from './Components/Etudes';
import First_section from './Components/First_section';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <First_section />
      <Etudes />
    </>
  )
}

export default App;
