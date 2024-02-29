import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { IoMdLogOut } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const TaxReport = () => {
  return (
    <section>
        <div className="container">
        <div class="nine">
          <h1 className="mt-4">
             Tax Report<span>HiTech Solution</span>
          </h1>
        </div>
        </div>
        <div className="container pt-5 pb-5">
          <div className="row mt-3 mb-3">
            <div className="col-lg-8 col-md-12">
              <h5 className="mb-3" style={{textDecoration: "underline"}}>Return</h5>
                <div className="d-lg-flex d-block gap-3">
              <label for="inp" class="inp">
              <select>
                  <option value="volvo">Volvo XC90</option>
                  <option value="saab">Saab 95</option>
                  <option value="mercedes">Mercedes SLK</option>
                  <option value="audi">Audi TT</option>
                </select>
                <span class="label">Inovice #</span>
                <span class="focus-bg"></span>
              </label>
              <FaArrowRightLong className='ms-2 d-lg-flex d-none mt-4'/>
              <label for="inp" class="inp ms-lg-3 mb-lg-0 mb-3">
                 <select>
                  <option value="volvo">Volvo XC90</option>
                  <option value="saab">Saab 95</option>
                  <option value="mercedes">Mercedes SLK</option>
                  <option value="audi">Audi TT</option>
                </select>
                <span class="label"> To Inovice #</span>
                <span class="focus-bg"></span>
              </label>
              <button className="btn_search">
                 <CiSearch /> Generate Report
              </button>
            </div>
               
            </div>
           <div className="col-lg-4 col-md-12"></div>
          </div>
          <div className="row mb-3">
          <div className="col-lg-8 col-md-12">
            <h5 className="mb-3" style={{textDecoration: "underline"}}>Labour Return</h5>
            <div className="d-lg-flex d-block gap-3">
              <label for="inp" class="inp">
                <select>
                  <option value="volvo">Volvo XC90</option>
                  <option value="saab">Saab 95</option>
                  <option value="mercedes">Mercedes SLK</option>
                  <option value="audi">Audi TT</option>
                </select>
                <span class="label">Bill #</span>
                <span class="focus-bg"></span>
              </label>
              <FaArrowRightLong className='ms-2 d-lg-flex d-none mt-4'/>
              <label for="inp" class="inp ms-lg-3 mb-lg-0 mb-3">
                 <select>
                  <option value="volvo">Volvo XC90</option>
                  <option value="saab">Saab 95</option>
                  <option value="mercedes">Mercedes SLK</option>
                  <option value="audi">Audi TT</option>
                </select>
                <span class="label"> To Bill #</span>
                <span class="focus-bg"></span>
              </label>
              <button className="btn_search">
                 <CiSearch /> Generate Report
              </button>
            </div>
            </div>
            <div className="col-lg-4 col-md-12"></div>
          </div>
      <div className="row">
      <div className="col-lg-8 col-md-12">
            <h5 className="mb-3" style={{textDecoration: "underline"}}>Profit Summery</h5>
            <div className="d-lg-flex d-block gap-3">
              <label for="inp" class="inp">
                <select>
                  <option value="volvo">Volvo XC90</option>
                  <option value="saab">Saab 95</option>
                  <option value="mercedes">Mercedes SLK</option>
                  <option value="audi">Audi TT</option>
                </select>
                <span class="label">Bill #</span>
                <span class="focus-bg"></span>
              </label>
              <FaArrowRightLong className='ms-2 d-lg-flex d-none mt-4'/>
              <label for="inp" class="inp ms-lg-3 mb-lg-0 mb-3">
                 <select>
                  <option value="volvo">Volvo XC90</option>
                  <option value="saab">Saab 95</option>
                  <option value="mercedes">Mercedes SLK</option>
                  <option value="audi">Audi TT</option>
                </select>
                <span class="label"> To Bill #</span>
                <span class="focus-bg"></span>
              </label>
              <button className="btn_search">
                 <CiSearch /> Generate Report
              </button>
            </div>
            </div>
            <div className="col-lg-4 col-md-12"></div>
      </div>
        </div>
        <LinkContainer to={"/"}>
        <button className="btn_bill">
          Leave <IoMdLogOut />
        </button>
      </LinkContainer>
   
    </section>
  )
}

export default TaxReport