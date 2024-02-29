import React from 'react'
import Sidebar from "../navbar/Sidebar";

import banner from '../../assets/student-book-logo-design-vector-illustration-template_110373-526.jpg'
const Home = () => {
  return (
  
      <section style={{
        overflowY: 'hidden'
      }}>
        
          <div className="container">
            <div className="row">
                <div className="col-12">
                    <img className='img-fluid' src={banner} alt="" />
                </div>
            </div>
        </div>
        
        <div className="d-flex">
            <Sidebar />
          </div>
      </section>
    
  )
}

export default Home