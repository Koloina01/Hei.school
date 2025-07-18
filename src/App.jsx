import { useState } from 'react';
import Navbar from './Components/Navbar';
import Admission from './Components/Admission';
import First_section from './Components/First_section'
import Outlets from './Components/Outlets';
import EducationalProgram from './Components/EducationalProgram';
import Domains from './Components/Domains';
import TechStackOverview from './Components/TechStackOverview';
import Partnership from './Components/Partnership';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import ScrollingCards from './Components/SecondCarousel';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Carousel/>
      <First_section />
      <ScrollingCards/>
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
