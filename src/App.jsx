import './App.css';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Footer from './Components/Footer/Footer';
import Join from './Components/Join/Join';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Join/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
