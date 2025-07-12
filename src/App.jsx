import { useState } from 'react';
import Navbar from './Components/Navbar';
import Admission from './Components/Admission';
import First_section from './Components/First_section'
import Outlets from './Components/Outlets';
import EducationalProgram from './Components/EducationalProgram';
import Domains from './Components/Domains';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <First_section />
      <Outlets/>
      <Domains/>
      <Admission />
      <EducationalProgram />
    </>
  )
}

export default App;
