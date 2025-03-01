import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Layout from './Layout';

import Hero from './components/Hero'
import About from './components/About'
import Events from './Pages/Events';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Footer from './components/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        
          <Routes>
            <Route path="/" element={ <Layout> <Hero /> <About /> <Footer /></Layout> } />
            <Route path="/about" element={ <Layout> <About /> <Footer /></Layout> } />
            <Route path="/events" element={ <Layout> <Events /> <Footer /></Layout> } />
            <Route path="/signup" element={ <Layout> <Signup /><Footer /> </Layout> } />
            <Route path="/login" element={ <Layout> <Login /><Footer /> </Layout> } />
          </Routes>
      </Router>
      
      
    </>
  )
}

export default App
