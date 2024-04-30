import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

import PopularMenu from './pages/PopularMenu';
import EntreesMenu from './pages/EntreesMenu';
import BowlsMenu from './pages/BowlsMenu';
import CombosMenu from './pages/CombosMenu';
// import TteokbokkiMenu from './pages/TteokbokkiMenu';
import AdesMenu from './pages/AdesMenu';
import CoffeeMenu from './pages/CoffeeMenu';
import NonCoffeeMenu from './pages/NonCoffeeMenu';

function App() {
  return (
    <div>
      <NavBar />
      <Home />

      <Routes>
        <Route exact path='/' element={Home} />
        <Route path='/popularmenu' element={PopularMenu} />
        <Route path='/entreesmenu' element={EntreesMenu} />
        <Route path='/bowlsmenu' element={BowlsMenu} />
        <Route path='/combosmenu' element={CombosMenu} />
        {/* <Route path='/tteokbokkimenu' element={<TteokbokkiMenu />} /> */}
        <Route path='/entreesmenu' element={EntreesMenu} />
        <Route path='/adesmenu' element={AdesMenu} />
        <Route path='/coffeemenu' element={CoffeeMenu} />
        <Route path='/noncoffeemenu' element={NonCoffeeMenu} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
