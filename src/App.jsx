import { useState } from 'react';
import Navbar from './Components/Navbar';
import Admission from './Components/Admission';
import First_section from './Components/First_section'

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
