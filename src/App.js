import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = ()=>{
  return(
    <div>
      <Navbar/>
      <Header/>
      <Projects/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
            {/* <div style={{height:400, width:100}}></div> */}

    </div>
  )
};

export default App;