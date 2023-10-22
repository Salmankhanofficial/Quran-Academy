import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import "./index.css";
import { useSelector } from 'react-redux';
import state from '../../state';
import SideNav from './SideNav';
import Nav from './Nav';



function Adminportal() {
  const [toggle, setToggle] = useState(true);
  const user = useSelector((state) => state.user)
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        {toggle && (
          <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <SideNav />
          </div>
        )}
        {toggle && <div className='col-4 col-md-2'></div>}
        <div className='col'>
          <Nav Toggle={Toggle} />

            <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Adminportal;
