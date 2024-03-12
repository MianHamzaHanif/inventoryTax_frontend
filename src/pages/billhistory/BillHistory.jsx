import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { IoMdLogOut } from "react-icons/io";
import { BiSolidShow } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import "./BillHistory.css";
import { toast } from "react-hot-toast";
import { APIinstance } from "../../axios.config";
import { deleteBill, fetchBills } from "../../redux/bill";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const BillHistory = () => {
  const dispatch = useDispatch();
  const { bills } = useSelector((state) => state.bill);
  console.log("billsbills", bills);
  // const bills = [];
  // console.log("useSelector((state) => state.bills",useSelector((state) => state));
  // const [bills, setBills] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 0,
  });

  const handleDelete = (billId) => {
    if (window.confirm("Are you sure you want to delete this bill?")) {
      dispatch(deleteBill(billId))
        .then(() => {
          toast.success("Bill deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting bill:", error);
          toast.error("Failed to delete bill");
        });
    }
  };

  
  const handleBillDownlaod = async (billId) => {
    try {
      const response = await fetch(`http://localhost:3031/api/bill/getInvoiceAsExcel/${billId}`);
  
      // const response = await fetch(`http://localhost:3031/api/bill/getBillAsExcel/${billId}`)
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `invoice_${billId}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error generating invoice:", error);
      toast.error("Failed to generate invoice");
    }
  };

  const handleInvoice = async (billId) => {
    try {
      // const response = await fetch(`http://localhost:3031/api/bill/getInvoiceAsExcel/${billId}`);
    
      const response = await fetch(`http://localhost:3031/api/bill/getBillAsExcel/${billId}`)
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `invoice_${billId}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error generating invoice:", error);
      toast.error("Failed to generate invoice");
    }
  };

  // const fetchProductDetails = async () => {
  //   try {
  //     const response = await APIinstance.get(
  //       `bill?page=${pagination.page}&limit=${pagination.limit}`
  //     );
  //     console.log("response", response);
  //     setBills(response.data.bills);
  //     setPagination((prev) => ({
  //       ...prev,
  //       totalPages: response.data.params.totalPages,
  //     }));
  //   } catch (error) {
  //     console.error("Error fetching bill details", error);
  //     toast.error("Failed to fetch bills.");
  //   }
  // };

  // useEffect(() => {
  //   fetchProductDetails();
  // }, [pagination.page]); // Re-fetch when page changes

  useEffect(() => {
    dispatch(fetchBills({ page: pagination.page, limit: pagination.limit }));
  }, []);
  return (
    <section>
      <div className="container pb-5">
        <div class="nine">
          <h1 className="mt-4">
            Billing History<span>HiTech Solution</span>
          </h1>
        </div>
        <div className="row mt-5">
          {/* <div className="col-6">
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
          </div> */}
          <div className="col-6">

          </div>
          <div className="col-6">
            <div className="d-lg-flex gap-3 d-block">
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
              <th>#</th>
              <th>Bill #</th>
              <th>Order Date</th>
              <th>
                Department
              </th>
              <th>View</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill,index) => (
              <tr key={bill._id}>
                <td>{index + 1}</td>
                <td>{bill.billNumber}</td>
                <td>{new Date(bill.createdAt).toLocaleDateString()}</td>
                <td>{bill?.department?.name}</td>
                <td>
                  <Link  to={`/billhistory/${bill._id}`}>View All</Link>
                </td>
                <td>
                  <button className="btn btn-success" onClick={() => handleDelete(bill._id)}>Delete</button>
                </td>
                <td>
                <button className="btn btn-success" onClick={() => handleInvoice(bill._id)}>
                    Generate Invoice
                  </button>
                </td>
                <td>
                <button className="btn btn-success" onClick={() => handleBillDownlaod(bill._id)}>
                    Generate Bill
                  </button>
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
