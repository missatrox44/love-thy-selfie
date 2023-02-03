import './App.css';

import ContactForm from './components/ContactForm';
import Footer from './components/Footer'
import Reviews from './components/Reviews';

import ReviewCard from './components/ReviewCard'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {

  return (
    <Router>
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
