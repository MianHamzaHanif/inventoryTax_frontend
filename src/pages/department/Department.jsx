import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";

import { CiSaveDown1 } from "react-icons/ci";
import { LinkContainer } from "react-router-bootstrap";
import { FaPlus } from "react-icons/fa6";
import AddDepartment from "../Modals/AddDepartment";

const Department = () => {

  const [showAddDepartment , setShowAddDepartment] = useState(false);
  const handleAddProduct = () => {
    setShowAddDepartment(false);
  };
  return (
    <section>
      <div className="container">
        <div class="nine">
          <h1 className="mt-4">
            Add Department<span>HiTech Solution</span>
          </h1>
        </div>
        {showAddDepartment && (
          <div className="row mt-1">
            <div className="col-lg-6 col-md-12">
              <div className="d-block">
                <label for="inp" class="inp d-block">
                  <input type="text" id="inp" placeholder="&nbsp;" />
                  <span class="label">Department</span>
                  <span class="focus-bg"></span>
                </label>
              </div>
              <button
                className="new_btn2 p-2 px-4 mt-3"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        )}
         <div className="col-lg-12 col-md-12 mt-1">
            <div className="d-flex justify-content-end mx-auto gap-3">
              {/* <button className="btn btn-outline-success d-block p-3">
            <CiSaveDown1 className="d-block ms-2" />
            <span className="d-block">Save</span>
          </button> */}
              <button className="new_btn p-1" onClick={() => setShowAddDepartment(true)}
              style={{ display: showAddDepartment ? "none" : "block" }}>
                <FaPlus className="fs-4 " />
              </button>
            </div>
          </div>
      </div>
      <h5 className=" text-center" style={{ textDecoration: "underline" }}>
        Department List :
      </h5>
      <div
        className="container justify-content-center mb-5"
        style={{ height: "600px", overflow: "scroll" }}
      >
        <table className="table table-bordered rounded">
          <thead>
            <tr style={{ position: "sticky", top: "0" }}>
              <th scope="col">#</th>
              <th colspan="2" scope="col">
                Department
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>

              <td colspan="2">Punjab Group of Collage Lahore</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td colspan="2">Punjab Group of Collage Lahore</td>
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
  );
};

export default Department;
