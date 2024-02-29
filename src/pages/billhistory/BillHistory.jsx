import React from 'react'
import { LinkContainer } from "react-router-bootstrap";
import { IoMdLogOut } from "react-icons/io";
import { BiSolidShow } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import "./BillHistory.css"
const BillHistory = () => {
  return (
    <section>
       <div className="container pb-5">
       <div class="nine">
          <h1 className="mt-4">
            Billing History<span>HiTech Solution</span>
          </h1>
        </div>
        <div className="row mt-5">
            <div className="col-6">
            <div className="d-lg-flex d-block">
            <label for="inp" class="inp w-100">
                <input type="ph" id="inp" placeholder="&nbsp;" />
                <span class="label">Department</span>
                <span class="focus-bg"></span>
              </label>
                <button className="btn_show">
                  Show All <BiSolidShow />
                </button>
              </div> 
            </div>
            <div className="col-6">
           <div className="d-lg-flex d-block">
           <label for="inp" class="inp w-100">
                <input type="search" id="inp" placeholder="&nbsp;" />
                <span class="label">Search</span>
                <span class="focus-bg"></span>
              </label>
              <button className="btn_search">
                  Search <CiSearch />
                </button>
           </div>
            </div>
        </div>

        </div> 
        <div className="container d-flex justify-content-center mb-5" style={{height: "800px", overflow: "scroll"}}>
            <table className="table table-bordered mt-3 rounded">
            <thead>
              <tr style={{position: "sticky", top: "0"}}>
                <th scope="col">#</th>
                <th scope="col">Bill #</th>
                <th scope="col">Order Date</th>
                <th colspan="2" scope="col">Department</th>
                <th scope="col">View</th>
              
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>2</td>
                <td>6/12/2022</td>
                <td colspan="2">GGHS Mai Safron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>4</td>
                <td>10/2/2023</td>
                <td colspan="2">GMHS Chaai Catron</td>
                <td className='btn btn-success m-3' style={{cursor: "pointer"}}> View <BiSolidShow /></td>        
              </tr>
              </tbody>
            </table>
        </div>
        <LinkContainer to={"/"}>
        <button className="btn_bill">
          Leave <IoMdLogOut />
        </button>
      </LinkContainer>
    </section>
  )
}

export default BillHistory