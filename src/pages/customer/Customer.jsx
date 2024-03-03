
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { toast } from "react-hot-toast";
import { CiSaveDown1 } from "react-icons/ci";
import { LinkContainer } from "react-router-bootstrap";
import { APIinstance } from "../../axios.config";
import Pagination from "react-bootstrap/Pagination";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewCustomer,
  deleteCustomer,
  fetchCustomers,
  updateCustomer,
} from "../../redux/addCustomer";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Form } from "react-bootstrap";

const Customer = () => {
  const dispatch = useDispatch();
  const { customers, totalPages } = useSelector((state) => state.customer);
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [showAddProduct, setShowAddProduct] = useState(false); // Ensure this state is defined if used
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    mobile: 0,
    CNIC: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editCustomerId, setEditCustomerId] = useState(null);
  useEffect(() => {
    dispatch(
      fetchCustomers({ page: pagination.page, limit: pagination.limit })
    );
  }, [dispatch, pagination.page, pagination.limit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Form submission", newProduct);
  //    dispatch(addNewProduct(newProduct));
  //    toast.success("Product added successfully");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateCustomer({ id: editCustomerId, ...customerDetails }))
        .unwrap()
        .then(() => {
          toast.success("Customer updated successfully");
          resetForm();
        })
        .catch((error) => {
          toast.error(`Failed to update customer: ${error.message}`);
        });
    } else {
      dispatch(addNewCustomer(customerDetails))
        .unwrap()
        .then(() => {
          toast.success("Customer added successfully");
          resetForm();
        })
        .catch((error) => {
          toast.error(`Failed to add customer: ${error.message}`);
        });
    }
  };


  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

  const handleLimitChange = (e) => {
    setPagination({
      page: 1,
      limit: Number(e.target.value),
      totalPages: pagination.totalPages,
    });
  };

  const paginationItems = [];
  for (let number = 1; number <= pagination.totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === pagination.page}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  const toggleAddProduct = () => {
    setShowAddProduct((prev) => !prev); // Toggle the showAddProduct state
  };

  const resetForm = () => {
    setShowAddProduct(false);
    setIsEditing(false);
    setEditCustomerId(null);
    setCustomerDetails({
      name: "",
      address: "",
      mobile: "",
      CNIC: "",
    });
    // Refetch customers to update the list
    dispatch(
      fetchCustomers({ page: pagination.page, limit: pagination.limit })
    );
  };

  const [currentProduct, setCurrentProduct] = useState(null);

  // Click handler for the edit button
  const handleEdit = (customer) => {
    setIsEditing(true);
    setShowAddProduct(true);
    setEditCustomerId(customer._id);
    setCustomerDetails({
      name: customer.name,
      address: customer.address,
      mobile: customer.mobile,
      CNIC: customer.CNIC,
    });
  };

  // Click handler for the update button inside the form
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    dispatch(updateProduct(currentProduct))
      .unwrap()
      .then(() => {
        toast.success("Product updated successfully");
        setIsEditing(false);
        setCurrentProduct(null);
        setShowAddProduct(false); // Hide the form
        fetchProductDetails(); // Refresh the product list
      })
      .catch(() => {
        toast.error("Failed to update product");
      });
  };

  // Click handler for the delete button
  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };
  return (
    <section>
      <div className="container">
        <div class="nine">
          <h1 className="mt-4">
            Add Customer<span>HiTech Solution</span>
          </h1>
        </div>
        {showAddProduct ? (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="d-block">
                  <label for="inp" class="inp mb-3 d-block">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="&nbsp;"
                      value={customerDetails.name}
                      onChange={handleInputChange}
                    />

                    <span class="label">Customer Name</span>
                    <span class="focus-bg"></span>
                  </label>
                  <label for="inp" class="inp d-block">
                    <input
                      type="text"
                      id="mobile"
                      name="mobile"
                      placeholder="&nbsp;"
                      value={customerDetails.mobile}
                      onChange={handleInputChange}
                    />
                    <span class="label">Customer Mobile</span>
                    <span class="focus-bg"></span>
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="d-block">
                  <label for="inp" class="inp mb-3 d-block">
                    <input
                      type="text"
                      id="CNIC"
                      name="CNIC"
                      placeholder="&nbsp;"
                      value={customerDetails.CNIC}
                      onChange={handleInputChange}
                    />
                    <span class="label">Customer CNIC</span>
                    <span class="focus-bg"></span>
                  </label>
                  <label for="inp" class="inp d-block">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="&nbsp;"
                      value={customerDetails.address}
                      onChange={handleInputChange}
                    />
                    <span class="label">Customer Address</span>
                    <span class="focus-bg"></span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="new_btn2 mt-2 w-25 p-2 ms-3"
                // onClick={() => setShowAddProduct(false)}
                // style={{ display: showAddProduct ? "none" : "block" }}
              >
                {isEditing ? "Update Customer" : "Add New Customer"}
              </button>
            </div>
          </form>
        ) : (
          <div className="col-lg-12 col-md-12">
            <div className="d-flex justify-content-end mx-auto gap-3">
              <button
                // type="submit"
                className="new_btn p-1"
                onClick={() => setShowAddProduct(true)}
                style={{ display: showAddProduct ? "none" : "block" }}
              >
                <FaPlus className="fs-4 " />
              </button>
              {/* <button className="btn btn-outline-success d-block p-3">
              <CiSaveDown1 className="d-block ms-2" />
              <span className="d-block">Save</span>
            </button> */}
            </div>
          </div>
        )}
      </div>
      <h5
        className="mb-3 mt-2 text-center"
        style={{ textDecoration: "underline" }}
      >
        Product Details :
      </h5>
      <div
        className="container d-flex justify-content-center mb-5"
        // style={{ height: "600px", overflow: "scroll" }}
      >
        {customers.length > 0 ? (
    <table className="table table-bordered mt-3 rounded">
      <thead>
        <tr style={{ position: "sticky", top: "0" }}>
          <th scope="col">#</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Customer CNIC</th>
          <th scope="col">Customer Mobile</th>
          <th scope="col">Customer Address</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer, index) => (
          <tr key={index}>
            <td>{(pagination.page - 1) * pagination.limit + index + 1}</td>
            <td>{customer.name}</td>
            <td>{customer.CNIC}</td>
            <td>{customer.mobile}</td>
            <td>{customer.address}</td>
            <td>
              <FiEdit onClick={() => handleEdit(customer)} />
            </td>
            <td>
              <MdDeleteOutline onClick={() => handleDelete(customer._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No customers found.</p>
  )}
      </div>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-6">
            {/* Rows per page selector */}
            <Form.Group
              controlId="limitSelect"
              className="d-flex align-items-center"
            >
              <Form.Label className="mb-0 me-2">Rows per page:</Form.Label>
              <Form.Control
                as="select"
                value={pagination.limit}
                onChange={handleLimitChange}
                style={{ width: "100px" }}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-lg-6 col-6 mt-4 pt-1 d-flex justify-content-end">
            {/* Pagination */}
            <Pagination>
              <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={pagination.page === 1}
              />
              <Pagination.Prev
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page === 1}
              />
              {paginationItems}
              <Pagination.Next
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page === pagination.totalPages}
              />
              <Pagination.Last
                onClick={() => handlePageChange(pagination.totalPages)}
                disabled={pagination.page === pagination.totalPages}
              />
            </Pagination>
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

export default Customer;
