import { useState } from 'react';
import Navbar from './Components/Navbar';
import Admission from './Components/Admission';
import First_section from './Components/First_section'
import Outlets from './Components/Outlets';
import EducationalProgram from './Components/EducationalProgram';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <First_section />
      <Outlets/>
      <Admission />
      <EducationalProgram />
    </>
  )
}

export default App;
