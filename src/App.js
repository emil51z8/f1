import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DriverList from './components/driverList';
import CircuitList from './components/CircuitList';
import Home from './components/Home';
import SearchDriver from './components/searchDriver';
import SearchedDriverList from './components/searchedDriverList';
import './styles/styles.css';
import f1IMG from './assets/Image/f123-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg';


function App() {
  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/drivers' className="nav-item nav-link">Drivers</Link>
            <Link to='/circuits' className="nav-item nav-link">Circuits</Link>
          </nav>
        </div>
          
        <img src={f1IMG} alt="Formula 1" className="img-fluid img-container"/>
        <span className="d-flex justify-content-between p-0 img-caption">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router</span>
      </div>
      <SearchDriver/>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='/drivers' element={<DriverList/>} />    
        <Route path='/circuits' element={<CircuitList/>} />
        <Route path='/search/*' element={<SearchedDriverList/>} />
      </Routes>
    </div>
  );
}

export default App;