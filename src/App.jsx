import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

import ContactForm from './components/ContactForm';
import Footer from './components/Footer'
import Reviews from './components/Reviews';

import ReviewCard from './components/ReviewCard'



function App() {

  return (
    <Router>
      {/*  possibly add max width to app-container lg:max-w-[80%] */}
      <div className='app-container'>
        <Routes>
          <Route 
            path ="/"
            element={<Home />}
          />
          <Route
            path="/contact"
            element={<Contact/>} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
