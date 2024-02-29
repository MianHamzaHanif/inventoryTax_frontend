import React, { useState } from "react";
import { CiSaveDown1 } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { LinkContainer } from "react-router-bootstrap";
import { FaPlus } from "react-icons/fa6";

const ItemHead = () => {
  const [showAddDepartment, setShowAddDepartment] = useState(false);
  const handleAddProduct = () => {
    setShowAddDepartment(false);
  };
  return (
    <section>
      <div className="container">
        <div class="nine">
          <h1 className="mt-4">
            Item Head<span>HiTech Solution</span>
          </h1>
          {showAddDepartment && (
            <div className="row ">
              <div className="col-lg-6 col-md-12">
                <div className="d-block">
                  <label for="inp" class="inp mb-3 d-block">
                    <input type="number" id="inp" placeholder="&nbsp;" />
                    <span class="label">ID #</span>
                    <span class="focus-bg"></span>
                  </label>
                  <label for="inp" class="inp d-block">
                    <input type="text" id="inp" placeholder="&nbsp;" />
                    <span class="label">Item Head</span>
                    <span class="focus-bg"></span>
                  </label>
                  <button
                    className="new_btn2 p-2 px-4 mt-3"
                    onClick={handleAddProduct}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            
            </div>
          )}
        </div>
        <div className="col-lg-12 col-md-12">
                <div className="d-flex justify-content-end mx-auto gap-3">
                  <button
                    className="new_btn p-1"
                    onClick={() => setShowAddDepartment(true)}
                    style={{ display: showAddDepartment ? "none" : "block" }}
                  >
                    <FaPlus className="fs-4 " />
                  </button>
                  {/* <button className="btn btn-outline-success d-block p-3">
                <CiSaveDown1 className="d-block ms-2" />
                <span className="d-block">Save</span>
              </button> */}
                </div>
              </div>
      </div>
      <h5 className=" text-center" style={{ textDecoration: "underline" }}>
        Item Head Details :
      </h5>

      <div
        className="container mb-5"
        style={{ height: "600px", overflow: "scroll" }}
      >
        <table className="table table-bordered">
          <thead>
            <tr style={{ position: "sticky", top: "0" }}>
              <th scope="col">ID #</th>
              <th colspan="2" scope="col">
                Item Head
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
            </tr>
            <tr>
              <th scope="row">1</th>

              <td>Labour cost</td>
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

export default ItemHead;
