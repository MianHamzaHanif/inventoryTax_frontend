import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { toast } from "react-hot-toast";
import { CiSaveDown1 } from "react-icons/ci";
import { LinkContainer } from "react-router-bootstrap";
import { APIinstance } from "../../axios.config";
import Pagination from "react-bootstrap/Pagination";
import { FaPlus } from "react-icons/fa6";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState([]); // Initialize to an empty array
  console.log("productDetaasdils", productDetails);
  const [currentPage, setCurrentPage] = useState(0); // Start with page 0
  const [totalPages, setTotalPages] = useState(0);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user?.id;

    if (!userId) {
      console.error("UserId is required");
      return;
    }

    const formData = new FormData();
    formData.append("productName", newProduct.name); // Adjusted based on hypothetical backend expectation
    formData.append("price", newProduct.price);
    formData.append("userId", userId);

    try {
      const response = await APIinstance.post("product/create", formData);
      if (response.data.status === "OK") {
        console.log("Product created successfully", response.data);
        setNewProduct({ name: "", price: "" });
        toast.success("New Product Added");
      }
    } catch (error) {
      console.error("Error creating product", error.response?.data || error);
    }
  };

  const fetchProductDetails = async (pageNo = currentPage) => {
    try {
      const response = await APIinstance.get(
        `product/getAllProducts?pageNo=${pageNo}`
      );
      console.log(response.data.status, "response");
      if (response.data.status === "OK") {
        setProductDetails(response.data.data.content);
        setTotalPages(response.data.data.totalPages);
      }
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [currentPage]);

  useEffect(() => {
    console.log("productDetails after state update:", productDetails);
  }, [productDetails]); // This will log the state after it has been updated.

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

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
            Add Product<span>HiTech Solution</span>
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              {showAddProduct && (
                <div className="d-block">
                  <label for="inp" class="inp mb-3 d-block">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="&nbsp;"
                      value={newProduct.name}
                      onChange={handleInputChange}
                    />
                    <span class="label">Product Name</span>
                    <span class="focus-bg"></span>
                  </label>
                  <label for="inp" class="inp d-block">
                    <input
                      type="text"
                      id="price"
                      name="price"
                      placeholder="&nbsp;"
                      value={newProduct.price}
                      onChange={handleInputChange}
                    />
                    <span class="label">Product Price</span>
                    <span class="focus-bg"></span>
                  </label>
                  <button
                  type="submit"
                  className="new_btn2 mt-2 px-4 p-2"
                  onClick={() => setShowAddProduct(false)}
                  // style={{ display: showAddProduct ? "none" : "block" }}
                >
                  Add New Product
                </button>
                </div>

              )}
            </div>
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
          </div>
        </form>
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
        {productDetails.length > 0 ? (
          <table className="table table-bordered mt-3 rounded">
            <thead>
              <tr style={{ position: "sticky", top: "0" }}>
                <th scope="col">ProductID #</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
              </tr>
            </thead>
            <tbody>
              {productDetails.map((product, index) => (
                <tr key={index}>
                  <td>{product?.id}</td>
                  <td>{product?.name}</td>
                  <td>{product?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products found.</p>
        )}
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
            disabled={currentPage === totalPages - 1}
          />
          <Pagination.Last
            onClick={() => handlePageChange(totalPages - 1)}
            disabled={currentPage === totalPages - 1}
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

export default AddProduct;
