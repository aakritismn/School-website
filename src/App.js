import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <header className="bg-blue-600 p-4 text-white shadow-md fixed w-full top-0 left-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <h1>Springdale Public School</h1>
          </div>
          <ul className="flex space-x-6">
            <li><Link className="hover:underline" to="/">Home</Link></li>
            <li><Link className="hover:underline" to="/about">About Us</Link></li>
            <li><Link className="hover:underline" to="/academics">Academics</Link></li>
            <li><Link className="hover:underline" to="/admissions">Admissions</Link></li>
            <li><Link className="hover:underline" to="/faculty">Faculty</Link></li>
            <li><Link className="hover:underline" to="/students">Students</Link></li>
            <li><Link className="hover:underline" to="/gallery">Gallery</Link></li>
            <li><Link className="hover:underline" to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 p-4 pt-20"> {/* Add padding top to account for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Springdale Public School. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
