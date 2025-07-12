import { useState } from 'react';
import Navbar from './Components/Navbar';
import Etudes from './Components/Etudes';
import Admission from './Components/Admission';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <First_section />
      <Admission />
    </>
  )
}

export default App;
