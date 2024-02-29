import {React, useState} from "react";
import { LinkContainer } from "react-router-bootstrap";
import { IoMdLogOut } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdPrint } from "react-icons/md";
import { CiSaveDown1 } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";

import Model from "../bill/Model"
import "./Invoice.css";
const Invoice = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section>
      <div className="container">
        <div class="nine">
          <h1 className="mt-4 mb-5">
            Invoice<span>HiTech Solution</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="d-lg-flex d-block mt-5">
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
          <div className="col-lg-6 col-md-12">
          <div className="d-flex justify-content-center mx-auto mt-4 gap-3">
              <button
                className="btn btn-outline-success d-block p-3"
             
              >
                <MdPrint className="d-block ms-2" />
                <span className="d-block">Print</span>
              </button>
              <button className="btn btn-outline-success d-block p-3">
                <CiSaveDown1 className="d-block ms-2" />
                <span className="d-block">Save</span>
              </button>
              <button onClick={() => setModalShow(true)} className="btn btn-outline-success d-block p-3">
                <MdOutlineCreateNewFolder className="d-block ms-1" />
                <span className="d-block">New</span>
              </button>
              <Model show={modalShow} onHide={() => setModalShow(false)} />
              
            </div>
          </div>
        </div>
        <div className="container pt-5 pb-5">
          <div className="row mt-3">
            <div className="col-lg-6 col-md-12">
              <h5 className="mb-3" style={{textDecoration: "underline"}}>Inovice Auto System</h5>
                <div className="d-block gap-3">
              <label for="inp" class="inp mb-4">
                <input type="number" id="inp" placeholder="&nbsp;" />
                <span class="label">Inovice #</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp ms-lg-3  mb-4">
                <input type="ph" id="inp" placeholder="&nbsp;" />
                <span class="label">Bill #</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp mb-3">
                <input type="date" id="inp" placeholder="&nbsp;" />
                <span class="label">Date</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp ms-lg-3 mb-3">
                <input type="ph" id="inp" placeholder="&nbsp;" />
                <span class="label">HS/PCT/Code</span>
                <span class="focus-bg"></span>
              </label>
            </div>
               
            </div>
            <div className="col-lg-6 col-md-12">
            <h5 className="mb-3" style={{textDecoration: "underline"}}>Personal Details</h5>
                <div className="d-blo">
                <label for="inp" class="inp mb-4">
                <input type="number" id="inp" placeholder="&nbsp;" />
                <span class="label">Name</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp ms-lg-3 mb-4">
                <input type="ph" id="inp" placeholder="&nbsp;" />
                <span class="label">Department</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp mb-3">
                <input type="number" id="inp" placeholder="&nbsp;" />
                <span class="label">Contect</span>
                <span class="focus-bg"></span>
              </label>
                </div>
            </div>
          </div>
          <div className="row justify-content-center mx-auto mb-5" style={{width: "100%", overflow: "scroll"}}>
          <h5 className="mb-3" style={{textDecoration: "underline"}}>Bill Details</h5>
          <table className="table table-bordered">
          <thead>
              <tr>
                <th scope="col">#</th>
                <th colspan="2" scope="col">Item Head</th>
                <th scope="col">QTY</th>
                <th scope="col">Rate</th>
                <th scope="col">Total</th>
                <th scope="col">GST</th>
                <th scope="col">Grand Total</th>
              
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td colspan="2">
                    <input type="text" />
                </td>
                <td><input type="text" placeholder="Nill"/></td>
                <td><input type="text" placeholder="Nill"/></td>
                <td><input type="text" placeholder="0"/></td>
                <td><input type="text" placeholder="0"/></td>
                <td><input type="text" placeholder="0"/></td>
                     
              </tr>
              </tbody>
          </table>
          </div>
        </div>
      </div>
      <LinkContainer to={"/"}>
        <button className="btn_bill">
          Leave <IoMdLogOut />
        </button>
      </LinkContainer>
    </section>
  );
};

export default Invoice;
