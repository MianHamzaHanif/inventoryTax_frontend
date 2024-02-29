import { React, useState } from "react";
// import { RiBillLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineCreateNewFolder } from "react-icons/md";

import { FaDeleteLeft } from "react-icons/fa6";
import { CiSaveDown1 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { VscOpenPreview } from "react-icons/vsc";
import { FaRegCopy } from "react-icons/fa";
import Model from "./Model";
import "./Bill.css";
import { LinkContainer } from "react-router-bootstrap";

const Bill = () => {
  const [modalShow, setModalShow] = useState(false);
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <section className="bill_bg">
      <div className="container pb-5">
        <div class="nine">
          <h1 className="mt-4">
            Billing<span>HiTech Solution</span>
          </h1>
        </div>

        <div className="row mt-5 p-3">
          <div className="col-lg-4 col-md-6">
            <div className="d-block">
              <label for="inp" class="inp mb-3">
                <input type="number" id="inp" placeholder="&nbsp;" />
                <span class="label">Bill #</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp">
                <input type="ph" id="inp" placeholder="&nbsp;" />
                <span class="label">Contact #</span>
                <span class="focus-bg"></span>
              </label>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-block">
              <div className="d-lg-flex d-block">
                <label for="inp" class="inp mb-3 mt-lg-0 mt-3">
                  <select>
                    <option value="volvo">Volvo XC90</option>
                    <option value="saab">Saab 95</option>
                    <option value="mercedes">Mercedes SLK</option>
                    <option value="audi">Audi TT</option>
                  </select>
                  <span class="label">Name</span>
                  <span class="focus-bg"></span>
                </label>
                <button className="btn_add">
                  Add <IoMdAdd />
                </button>
              </div>
              <div className="d-lg-flex d-block">
                <label for="inp" class="inp mb-3">
                  <select>
                    <option value="mercedes">Mercedes SLK</option>
                    <option value="volvo">Volvo XC90</option>
                    <option value="saab">Saab 95</option>
                    <option value="audi">Audi TT</option>
                  </select>
                  <span class="label">Item Head</span>
                  <span class="focus-bg"></span>
                </label>
                <button className="btn_add">
                  Add <IoMdAdd />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="d-flex justify-content-center mx-auto mt-4 gap-3">
              <button
                className="btn btn-outline-success d-block p-2"
                onClick={refreshPage}
              >
                <FiRefreshCw className="d-block ms-3" />
                <span className="d-block">Refresh</span>
              </button>
              <button className="btn btn-outline-success d-block p-3">
                <CiSaveDown1 className="d-block ms-1" />
                <span className="d-block">Save</span>
              </button>
              <button
                onClick={() => setModalShow(true)}
                className="btn btn-outline-success d-block p-3"
              >
                <MdOutlineCreateNewFolder className="d-block ms-1" />
                <span className="d-block">New</span>
              </button>
              <Model show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            {" "}
            <div className="d-flex">
              <label for="inp" class="ing">
                <select>
                  <option value="volvo">Volvo XC90</option>
                  <option value="saab">Saab 95</option>
                  <option value="mercedes">Mercedes SLK</option>
                  <option value="audi">Audi TT</option>
                </select>
                <span class="label">Department</span>
                <span class="focus-bg"></span>
              </label>
              <div className="it">
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
      <div
        className="container"
        style={{ height: "400px", overflow: "scroll" }}
      >
        <table class="table table-bordered rounded">
          <thead>
            <tr style={{ position: "sticky", top: "0" }}>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Sale Tax %</th>
              <th scope="col">Sale Tax RS</th>
              <th scope="col">Income Tax %</th>
              <th scope="col">Tax RS</th>
              <th scope="col">Sum Up</th>
              <th scope="col">
                <FaDeleteLeft />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cement</td>
              <td>550</td>
              <td>10</td>
              <td>5500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>5500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Coca Cola</td>
              <td>650</td>
              <td>10</td>
              <td>6500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>6500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Shoze</td>
              <td>450</td>
              <td>10</td>
              <td>4500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>4500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Clothes</td>
              <td>750</td>
              <td>10</td>
              <td>7500</td>
              <td>0.00</td>
              <td>0.00</td>
              <td>4.50</td>
              <td>247.50</td>
              <td>7500</td>
              <td>
                <FaDeleteLeft />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="mt-5 py-4" style={{ backgroundColor: "#e3f1d9" }}>
      <div className="container">
      <div className="row">
          <div className="col-6">
            <div className="d-block">
              <label for="inp" class="inp mb-3 d-block">
                <input
                  type="number"
                  id="inp"
                  placeholder="&nbsp;"
                  value={"0"}
                />
                <span class="label ELE">Total(Income Tax)</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp d-block mb-3">
                <input
                  type="number"
                  id="inp"
                  placeholder="&nbsp;"
                  value={"0"}
                />
                <span class="label ELE">Total Amount(Excluding Tax)</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp d-block">
                <input
                  type="number"
                  id="inp"
                  placeholder="&nbsp;"
                  value={"0"}
                />
                <span class="label ELE">Services Charge</span>
                <span class="focus-bg"></span>
              </label>
            </div>
          </div>
          <div className="col-6">
            <div className="d-block">
              <label for="inp" class="inp mb-3 d-block">
                <input
                  type="number"
                  id="inp"
                  placeholder="&nbsp;"
                  value={"0"}
                />
                <span class="label ELE">Total(GST)</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp d-block mb-3">
                <input
                  type="number"
                  id="inp"
                  placeholder="&nbsp;"
                  value={"0"}
                />
                <span class="label ELE">Total Amount(including All Tax)</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp d-block">
                <input
                  type="number"
                  id="inp"
                  placeholder="&nbsp;"
                  value={"0"}
                />
                <span class="label ELE">Grand Total</span>
                <span class="focus-bg"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mx-auto mt-3">
          <div className="col-lg-4 col-12">
            <div className="d-flex gap-3 justify-content-center mx-auto">
              <button className="btn_bil">
                Preview Bill <VscOpenPreview />
              </button>
              <button className="btn_bil">
                Customer Copy <FaRegCopy />
              </button>
             
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="d-flex gap-3 justify-content-center mx-auto">
            <button className="btn_bil d-block">
                Customer Tax <VscOpenPreview />
              </button>
              <button className="btn_bil d-block">
                Labour Bill PST <VscOpenPreview />
              </button>
             
            </div>
          </div>
        </div>
      </div>
      </section>
      <LinkContainer to={"/"}>
        <button className="btn_bill">
          Leave <IoMdLogOut />
        </button>
      </LinkContainer>
    </section>
  );
};

export default Bill;
