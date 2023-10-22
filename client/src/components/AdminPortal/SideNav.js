import React from 'react'
  import { Link, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import state, { setLogout } from '../../state';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SideNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const username = user.username;

  return (
    <div className='bg-white sidebar p-2'>
    <div className='m-2'>
        <i className='bi bi-book me-3 fs-4'></i>
            <span className='brand-name fs-4'>{username}</span>
    </div>   
         <hr className='text-dark' />
  <div className='list-group list-group-flush'>
      <Link to="/adminportal"className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span >Dashboard</span>
      </Link>
      <Link to="/" className='list-group-item py-2 '>
          <i className='bi bi-house fs-5 me-3'></i>
          <span >Home</span>
      </Link>
      <Link to="teachers" className='list-group-item py-2'>
          <i className='bi bi-table fs-5 me-3'></i>
          <span >Teachers</span>
      </Link>
      <Link to="users" className='list-group-item py-2'>
          <i className='bi bi-table fs-5 me-3'></i>
          <span >Users</span>
      </Link>
      <Link to="courses" className='list-group-item py-2'>
          <i className='bi bi-book fs-5 me-3'></i>
          <span >Courses</span>
      </Link>
      <Link to="blogs" className='list-group-item py-2'>
          <i className='bi bi-clipboard-data fs-5 me-3'></i>
          <span >blogs</span>
      </Link>

      
      <Link className='list-group-item py-2'>
          <i className='bi bi-power fs-5 me-3'></i>
          <span onClick={() => { dispatch(setLogout()); Navigate("/")}}>Logout</span>
      </Link>  
</div>   
</div>
   
  )
}

export default SideNav