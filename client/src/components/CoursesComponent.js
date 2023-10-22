import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
//  const addCource () =>{
    
//  }



const CoursesComponent = () => {

    const getCourses = async () => {
        const resp = await axios.get("http://localhost:5001/cources/" );
        
        const data = resp.data;
    
        data.map((item)=>{
            console.log("Title: " + item.title);
        })
    };

    const addCource = async () => {
        const addedCourse = await axios.post("")
    };
    
    useEffect(() => {
      getCourses();
    
    }, [])
    


  return (
    <>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
            <h5 className="fw-bold text-primary text-uppercase">Cources</h5>
            <h1 className="mb-0">Our Featured Courses</h1>
        </div>
        <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-book text-white"></i>
                    </div>
                    <h4 className="mb-3">Islamic Study</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <a className="btn btn-lg btn-primary rounded" href="">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-book text-white"></i>
                    </div>
                    <h4 className="mb-3">Tafseer Cources</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <a className="btn btn-lg btn-primary rounded" href="">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-book text-white"></i>
                    </div>
                    <h4 className="mb-3">TarteeleQuran Qaida</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <a className="btn btn-lg btn-primary rounded" href="">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fab fa-book text-white"></i>
                    </div>
                    <h4 className="mb-3">Memorize Quran</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <a className="btn btn-lg btn-primary rounded" href="">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-book text-white"></i>
                    </div>
                    <h4 className="mb-3">Quran Reading With Tajweed</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <a className="btn btn-lg btn-primary rounded" href="">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="service-icon">
                        <i className="fa fa-book text-white"></i>
                    </div>
                    <h4 className="mb-3">Learn Ten Qirat</h4>
                    <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                    <a className="btn btn-lg btn-primary rounded" href="">
                        <i className="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
             
        </div>
    </div>
</div>
</>
  )
}

export default CoursesComponent