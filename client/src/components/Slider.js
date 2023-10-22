import React from 'react'
import carousel1 from "./Images/heroImage1.jpg";
import carousel2 from "./Images/heroImage2.jpg";
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <>
        {/* Slider */}
        
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={carousel1} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth:" 900px;"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slide-in-down">NOW YOU CAN</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoom-in">Learn Quran Online</h1>
                            <h2 className="display-1 text-white mb-md-4 animated zoom-in">OUR BEST TUTERS</h2>
                            <Link to="/login" className="btn btn-primary py-md-3 px-md-5 me-3 animated slide-in-left">Start Free Trial</Link>
                            <Link to="/courses" className="btn btn-outline-light py-md-3 px-md-5 animated slide-inright">Courses</Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={carousel2} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px;"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                            <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    
    </>
  )
}

export default Slider