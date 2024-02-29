import { React, useEffect, useState } from "react";
import { CiSaveDown1 } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import Model from "../bill/Model";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import Pagination from "react-bootstrap/Pagination";

import { LinkContainer } from "react-router-bootstrap";
import { APIinstance } from "../../axios.config";
import { toast } from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";

const Customer = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showAddCustomer, setShowAddCustomer] = useState(false);


  const [customerForm, setCustomerForm] = useState({
    name: "",
    address: "",
    mobile: "",
    CNIC: "",
  });

  const [customers, setCustomers] = useState([]); // State to hold customer data
  const [currentPage, setCurrentPage] = useState(0); // State to hold the current page number
  const [totalPages, setTotalPages] = useState(0); // State to hold the total number of pages

  const fetchCustomers = async (pageNo) => {
    try {
      const response = await APIinstance.get(
        `/customer/getAllCustomers?pageNo=${pageNo}`
      );
      console.log("response,response");
      setCustomers(response.data.data.content);
      setTotalPages(response.data.data.totalPages);
      // handle other parts of the response as needed
    } catch (error) {
      console.error("Error fetching customers:", error);
      toast.error("Failed to fetch customers");
    }
  };

  // Use useEffect to fetch customers when component mounts or page changes
  useEffect(() => {
    fetchCustomers(currentPage);
  }, [currentPage]);
  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerForm({ ...customerForm, [name]: value });
  };

  // Submit form to create a new customer
  // Submit form to create a new customer
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields and alert the user if any are found
    if (
      !customerForm.name ||
      !customerForm.address ||
      !customerForm.mobile ||
      !customerForm.CNIC
    ) {
      toast.error("All fields are required."); // Using toast to show error message
      return; // Stop the function if any field is empty
    }

    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isAdmin) {
      const formData = new FormData();
      formData.append("name", customerForm.name);
      formData.append("address", customerForm.address);
      formData.append("mobile", customerForm.mobile);
      formData.append("CNIC", customerForm.CNIC);
      formData.append("addedBy", user.id); // Add the admin's ID here

      try {
        const response = await APIinstance.post(
          "/customer/createCustomer",
          formData
        );
        toast.success("Customer Created");
        // Clear form after successful customer creation
        setCustomerForm({
          name: "",
          address: "",
          mobile: "",
          CNIC: "",
        });
      } catch (error) {
        console.error("Error creating customer", error);
        if (error.response) {
          toast.error(`Error: ${error.response.data.message}`); 
        }
      }
    } else {
      toast.error("Only admins can create customers"); 
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate pagination items
  const paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage + 1}
        onClick={() => handlePageChange(number - 1)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <section>
      <div className="container">
        <div class="nine">
          <h1 className="mt-4">
            Add Customer<span>HiTech Solution</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
           
            {
              showAddCustomer && (
                <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-12">
                  <label for="inp" class="inp mb-4">
                    <input
                      type="text"
                      name="name"
                      value={customerForm.name}
                      onChange={handleInputChange}
                      // placeholder="Customer Name"
                    />
                    <span class="label">Customer Name #</span>
                    <span class="focus-bg"></span>
                  </label>
                  </div>
                  <div className="col-lg-6 col-12">
                  <label for="inp" class="inp  mb-4">
                    <input
                      type="text"
                      name="address"
                      value={customerForm.address}
                      onChange={handleInputChange}
                      // placeholder="Customer Address"
                    />
                    <span class="label">Customer Address #</span>
                    <span class="focus-bg"></span>
                  </label>
                  </div>
                 
                  <div className="col-lg-6 col-12">
                  <label for="inp" class="inp mb-3">
                    <input
                      type="text"
                      name="mobile"
                      value={customerForm.mobile}
                      onChange={handleInputChange}
                      // placeholder="Customer Mobile"
                    />
                    <span class="label">Customer Mobile</span>
                    <span class="focus-bg"></span>
                  </label>
                  </div>
                  <div className="col-lg-6 col-12">
                  <label for="inp" class="inp mb-3">
                    <input
                      type="text"
                      name="CNIC"
                      value={customerForm.CNIC}
                      onChange={handleInputChange}
                      // placeholder="Customer CNIC"
                    />
                    <span class="label">Customer CNIC</span>
                    <span class="focus-bg"></span>
                  </label>
                  </div>
                </div>
                <button type="submit" className="btn_search"
                  onClick={() => setShowAddCustomer(false)}
                
                >
                  Create Customer
                </button>
              </form>
              )
            }
          

            <div className="col-lg-12 col-md-12">
              <div className="d-flex justify-content-end mx-auto gap-3">
                <button
                  // type="submit"
                  className="new_btn p-1"
                  onClick={() => setShowAddCustomer(true)}
                  style={{ display: showAddCustomer ? "none" : "block" }}
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
          <div className="col-lg-4 col-md-12">
            <div className="d-flex justify-content-center mx-auto gap-3">
              {/* <button className="btn btn-outline-success d-block p-3">
                <CiSaveDown1 className="d-block ms-2" />
                <span className="d-block">Save</span>
              </button>
              <button
                onClick={() => setModalShow(true)}
                className="btn btn-outline-success d-block p-3"
              >
                <MdOutlineCreateNewFolder className="d-block ms-1" />
                <span className="d-block">New</span>
              </button> */}
              {/* <Model show={modalShow} onHide={() => setModalShow(false)} /> */}
            </div>
            {/* <div className="d-lg-flex d-block mt-3 justify-content-center mx-auto">
              <label for="inp" class="inp w-100">
                <input type="search" id="inp" placeholder="&nbsp;" />
                <span class="label">Search</span>
                <span class="focus-bg"></span>
              </label>
              <button className="btn_search">
                Search <CiSearch />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <h5 className="mb-3 text-center" style={{ textDecoration: "underline" }}>
              Inovice Auto System :
            </h5>
      <div
        className="container justify-content-center"
        // style={{ height: "800px", overflow: "scroll" }}
      >
        <table className="table table-bordered rounded mb-5">
          <thead>
            <tr style={{ position: "sticky", top: "0" }}>
              <th scope="col">#</th>
              <th scope="col">Customer Name #</th>
              <th scope="col">Customer Address #</th>

              <th scope="col">Customer Mobile </th>
              <th scope="col">Customer CNIC</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id}>
                <th scope="row">{customer.id}</th>
                <td>{customer.customerName}</td>
                <td>{customer.customerAddress}</td>
                <td>{customer.customerMobile}</td>
                <td>{customer.customerCNIC}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <Pagination>
          <Pagination.First
            onClick={() => handlePageChange(0)}
            disabled={currentPage === 0}
          />
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
          />
          {paginationItems}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage >= totalPages - 1}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages - 1)}
            disabled={currentPage >= totalPages - 1}
          />
        </Pagination>
      </div>
      <LinkContainer to={"/"}>
        <button className="btn_bill">
          Leave <IoMdLogOut />
        </button>
      </LinkContainer>
    </section>
  );
};

export default Customer;
