import { useState } from 'react';
import Navbar from './Components/Navbar';
import Admission from './Components/Admission';
import First_section from './Components/First_section'
import Outlets from './Components/Outlets';
import EducationalProgram from './Components/EducationalProgram';
import Domains from './Components/Domains';
import TechStackOverview from './Components/TechStackOverview';
import Partnership from './Components/Partnership';
import TripleCarousel from './Components/Carousel';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <TripleCarousel/>
      <First_section />
      <Outlets/>
      <Domains/>
      <Admission />
      <EducationalProgram />
      <TechStackOverview />
      <Partnership />
      <Footer />
    </>
  )
}

export default App;
