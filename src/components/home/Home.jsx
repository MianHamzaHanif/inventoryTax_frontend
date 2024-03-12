import React from 'react'
import Sidebar from "../navbar/Sidebar";

import banner from '../../assets/looo.png'
const Home = () => {
  return (
  
      <section style={{
        overflowY: 'hidden'
      }}>
        
          <div className="container">
            <div className="row">
                <div className="col-12">
                    <img className='' src={banner} alt="" style={{width:'800px'}} />
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