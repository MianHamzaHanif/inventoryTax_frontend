import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { IoMdLogOut } from "react-icons/io";
import { IoIosPrint } from "react-icons/io";
import { BsFiletypeExe } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa6";
const ReturnReport = () => {
  return (
    <section>
      <div className="container">
        <div class="nine">
          <h1 className="mt-4">
            Sale Tax Return<span>HiTech Solution</span>
          </h1>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="d-flex justify-content-center mx-auto mt-4 gap-3">
              <button className="btn btn-outline-success d-block p-4">
                <IoIosPrint className="d-block ms-2" />
                <span className="d-block">Print</span>
              </button>
              <button className="btn btn-outline-success d-block p-4">
                <FaFilePdf className="d-block ms-2" />
                <span className="d-block">PDF</span>
              </button>
              <button className="btn btn-outline-success d-block p-4">
                <BsFiletypeExe className="d-block ms-2" />
                <span className="d-block">Excel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ height: "600px", overflow: "scroll" }}
      >
        <table class="table table-bordered rounded">
          <thead>
            <tr style={{ position: "sticky", top: "0" }}>
              <th scope="col">Date</th>
              <th scope="col">Invoice #</th>
              <th scope="col">Name</th>
              <th colspan="2" scope="col">
                Department/School
              </th>
              <th scope="col">HSN Code</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Total GST</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
            </tr>
            <tr>
              <td></td>
              <th scope="row">1</th>
              <td>Umair Ali</td>
              <td colspan="2">Punjab Grop of College</td>
            
              <td></td>
              <td>5500</td>
              <td>800</td>
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

export default ReturnReport;
