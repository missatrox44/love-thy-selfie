import './App.css';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'
import Reviews from './components/Reviews';
import ReviewCard from './components/ReviewCard'
import Header from './components/Header';



function App() {

  return (
    <div className='app-container'>
      {/* <Header /> */}
      <Reviews />
      <Footer />
    </div>

  )
}

export default App
