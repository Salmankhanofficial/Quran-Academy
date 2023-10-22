import React, { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import "./index.css";
import SideBar from './SideBar';
import Nav from './Nav';
import { useSelector } from 'react-redux';
import state from '../../state';


function UserDashboard() {
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
            <SideBar />
          </div>
        )}
        {toggle && <div className='col-4 col-md-2'></div>}
        <div className='col'>
          <Nav Toggle={Toggle} />
          {/* <Routes>
            <Route path='/' element={<Home Toggle={Toggle} />} />
          </Routes> */}
            <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
