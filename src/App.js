import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Therapy from './pages/Therapy';
import SupportGroups from './pages/SupportGroups';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Entertainment from './pages/Entertainment';
import Games from './pages/Games';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/therapy" element={<Therapy />} />
            <Route path="/support-groups" element={<SupportGroups />} />
            <Route path="/home" element={<Home />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/games" element={<Games />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;