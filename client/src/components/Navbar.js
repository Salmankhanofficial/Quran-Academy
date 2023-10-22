import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Dropdown, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import state, {setLogout} from '../state';
          const Navbar = () => {
            const dispatch = useDispatch();
            const navigate = useNavigate();
            const [isNavCollapsed, setIsNavCollapsed] = useState(true);

            const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
 
                const [show, setShow] = useState(false);
                const showDropdown = (e) => {
                  setShow(!show);
                }
                const hideDropdown = (e) => {
                  setShow(false);
                }

            return (<>

              {/* <!-- Topbar Start --> */}
              <div class="container-fluid bg-dark px-5 py-2 d-none d-lg-block">
                <div class="row gx-0">
                  <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center" style={{ height: "45px;" }}>
                      <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>AWKUM, Mardan, Pakistan</small>
                      <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+92 311 1111111</small>
                      <small class="text-light"><i class="fa fa-envelope-open me-2"></i>awkum@AWKUM.edu.pk</small>
                    </div>
                  </div>
                  <div class="col-lg-4 text-center text-lg-end">
                    <div class="d-inline-flex align-items-center" style={{ height: " 60px;" }}>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-instagram fw-normal"></i></a>
                      <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg sticky-top  fixed px-5 py-7 py-lg-0">
                  <Link to="/" class="navbar-brand p-0">
                    <h1 class="m-0"><i class="fa fa-book me-2"></i>QuranAcademy</h1>
                  </Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarCollapse" aria-expanded={!isNavCollapsed ? true : false} data-bs-target="#navbarCollapse" onClick={handleNavCollapse}>
                    <span class="fa fa-bars"></span>
                  </button>
                  <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                      <Link to="/" class="nav-item nav-link active">Home</Link>
                      <Dropdown class="nav-item dropdown" show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown} id="basic-nav-dropdown" >
                        <Link to="/courses" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Cources</Link>
                        <div class="dropdown-menu m-0">
                          <Link to="/courses" class="dropdown-item">Hifz Quran</Link>
                          <Link to="/courses" class="dropdown-item">Quran Translation</Link>
                        </div>
                      </Dropdown>
                      <Link to="/teachers" class="nav-item nav-link">Teachers</Link>
                      <Link to="/feeandplans" class="nav-item nav-link">Shedule & Fee</Link>
                      <Link to="/about" class="nav-item nav-link">About Us</Link>
                      <Link to="/blogs" class="nav-item nav-link">Blogs</Link>
                      </div>
                    <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                    <Link to="/login" class="btn btn-primary py-2 px-4 ms-3">Login</Link>
                    <Link class="btn btn-primary py-2 px-4 ms-3">
          
          <span onClick={() => { dispatch(setLogout()); navigate("/")}}>Logout</span>
      </Link>
                  </div>
                </nav>
              </div>
            </>

            )
          }

          export default Navbar