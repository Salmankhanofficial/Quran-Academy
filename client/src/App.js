import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Courses from './components/pages/Courses';
import FeesAndPlans from './components/pages/FeesAndPlans';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//UserDashboard 
import UserDashboard from './components/UserDashboard/UserDashboard';
import EnrolledCourses from './components/UserDashboard/EnrolledCourses';
import DashboardHome from './components/UserDashboard/DashboardHome';
import UserReport from './components/UserDashboard/UserReport';
import LoginForm from './scenes/loginpage/LoginForm';

//AdminDashboard
import Adminportal from './components/AdminPortal/AdminPortal';
import AdminHome from './components/AdminPortal/AdminHome';
import Users from './components/AdminPortal/Users';
import Teachers from './components/AdminPortal/Teachers';
import TeacherForm from './components/AdminPortal/TeacherForm';

//TeacherDashbaord
import TeacherDashboard from './components/TeacherPortal/TeacherDashboard';
import TeacherHome from './components/TeacherPortal/TeacherHome';

// state 
import state from './state';


const App = () => {
  const isAuth = Boolean(useSelector((state) => state.token));
  const user = useSelector((state) => state.user);
  return (
    <>
    <BrowserRouter>
  
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="courses" element={<Courses />} />
      <Route path="feeandplans" element={<FeesAndPlans />} />
    </Route>

    <Route path="/login" element={<LoginForm/>} />
    <Route path="/register" element={<LoginForm/>} />
 
 {/* User dashboard Routes */}
    <Route path="/userdashboard"   element={isAuth ? <UserDashboard /> : <Navigate to="/login" />}>
        <Route path="" element={<DashboardHome />} />
        <Route path="usercourses" element={<EnrolledCourses />} />
        <Route path="userreport" element={<UserReport />} />
    </Route>
 {/* Admin dashboard Ruotes */}
    <Route path="/adminportal"   element={isAuth ? <Adminportal /> : <Navigate to="/login" />}>
        <Route path="" element={<AdminHome />} />
        <Route path="courses" element={<Courses/>} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="addteacher" element={<TeacherForm />} />
        <Route path="users" element={<Users />} />
        <Route path="blogs" element={<Blogs />} />
    </Route>
    {/* Teacher Dashboard Routes */}
    <Route path="/teacherdashboard"   element={isAuth ? <TeacherDashboard /> : <Navigate to="/login" />}>
        <Route path="" element={<TeacherHome />} />
        <Route path="teachercourses" element={<Courses/>} />
        <Route path="users" element={<Users />} />
        <Route path="blogs" element={<Blogs />} />
    </Route>
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App;