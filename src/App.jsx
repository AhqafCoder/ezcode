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

import Sidebar from './components/Sidebar';
import Navbar2 from './components/Navbar2'; 
import Navbar from './components/Navbar';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={ <Layout> <Hero /> <About />  <Footer /></Layout> } />
            <Route path="/about" element={ <Layout> <About /> <Footer /></Layout> } />
            <Route path="/events" element={ <Layout> <Events /> <Footer /></Layout> } />
            <Route path="/signup" element={ <Layout> <Signup /><Footer /> </Layout> } />
            <Route path="/login" element={ <Layout> <Login /><Footer /> </Layout> } />
            <Route
          path="/resources/master-html"
          element={
            <div className="flex flex-col md:flex-row min-h-screen">
              {/* Universal Navbar (from Layout) */}
              <Navbar />

              {/* Navbar2 with Sidebar */}
              <div className="flex-1 flex">
                <Navbar2 />

                {/* Main Content Area (e.g., pink wave background) */}
                <main className="flex-1 p-4 ml-64 md:ml-64 mt-15">
                  {/* Your content here */}
                  <h1>HTML Tutorial Resources</h1>
                </main>
              </div>
            </div>
          }
        />
      
          </Routes>
      </Router>

    </>
  )
}

export default App
