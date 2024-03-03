import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { IoMdLogOut } from "react-icons/io";
import { BiSolidShow } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import "./BillHistory.css";
import { toast } from "react-hot-toast";
import { APIinstance } from "../../axios.config";
const BillHistory = () => {
  const [bills, setBills] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 0,
  });

  const fetchProductDetails = async () => {
    try {
      const response = await APIinstance.get(
        `bill?page=${pagination.page}&limit=${pagination.limit}`
      );
      console.log("response", response);
      setBills(response.data.bills);
      setPagination((prev) => ({
        ...prev,
        totalPages: response.data.params.totalPages,
      }));
    } catch (error) {
      console.error("Error fetching bill details", error);
      toast.error("Failed to fetch bills.");
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [pagination.page]); // Re-fetch when page changes

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
      <div
        className="container d-flex justify-content-center mb-5"
        //  style={{height: "800px", overflow: "scroll"}}
      >
        <table className="table table-bordered mt-3 rounded">
          <thead>
            <tr style={{ position: "sticky", top: "0" }}>
              <th scope="col">#</th>
              <th scope="col">Bill #</th>
              <th scope="col">Order Date</th>
              <th colspan="2" scope="col">
                Department
              </th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr key={bill._id}>
                <th scope="row">{index + 1}</th>
                <td>{bill.billNumber}</td>
                <td>{new Date(bill.createdAt).toLocaleDateString()}</td>
                <td colSpan="2">{bill.department.name}</td>
                <td
                  className="btn btn-success m-3"
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  View <BiSolidShow />
                </td>
              </tr>
            ))}
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

export default BillHistory;
