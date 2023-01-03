import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


function App() {

  return (
    <div className='app-container'>
      <Header />
      <Features />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>

  )
}

export default App
