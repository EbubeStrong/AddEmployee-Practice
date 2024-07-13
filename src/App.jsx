import "./App.css";
import React from "react";
import Employees from "./Pages/Employees.jsx";
import Header from "./component/Header.jsx";
import Customer from "./component/Customer.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
 return (
  <>
  <BrowserRouter>
  <Header>
    <Routes>
      {/* <Route path='/employees' element={<Employees/>}/>
      <Route path='/customer' element={<Customer/>}/> */}
          <Route path="/employees" element={<Employees />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/projects" element={<div>Projects</div>} />
          <Route path="/calendar" element={<div>Calendar</div>} />
    </Routes>
  </Header>
  </BrowserRouter>
  </>
  );
}

export default App;
