import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { toast } from "react-hot-toast";
import { CiSaveDown1 } from "react-icons/ci";
import { LinkContainer } from "react-router-bootstrap";
import { APIinstance } from "../../axios.config";
import Pagination from "react-bootstrap/Pagination";
import { FaPlus } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import {
  addNewProduct,
  deleteProduct,
  fetchAllProducts,
  updateProduct,
} from "../../redux/product/Product";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState([]); // Initialize to an empty array
  console.log("productDetaasdils", productDetails);

  const productState = useSelector((state) => state.products);
  console.log("productStateproductState",productState);

  const { products, totalPages: reduxTotalPages } = useSelector((state) => state.productSlice);
  console.log("productsofall",products);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    // totalPages: 0,
  });
  const [totalPages, setTotalPages] = useState(0);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    saleTaxPercentage: 0,
    incomeTaxPercentage: 0,
  });

  const entireState = useSelector((state) => state);
useEffect(() => {
  console.log("Entire Redux State:", entireState);
}, [entireState]);


  useEffect(() => {
    console.log("Full Redux State:", productState);
  }, [productState]);
  
  useEffect(() => {
    setTotalPages(reduxTotalPages); // Set totalPages from the redux state
  }, [reduxTotalPages]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  useEffect(() => {
    dispatch(fetchAllProducts({ page: pagination.page, limit: pagination.limit }))
      .unwrap()
      .then((response) => {
        setTotalPages(response.params.totalPages); // Update totalPages when fetchItemHeads is successful
      })
      .catch((error) => {
        console.error('Failed to fetch item heads:', error);
      });
  }, [dispatch, pagination.page, pagination.limit]);

  useEffect(() => {
    console.log("Total pages: ", pagination.totalPages); // Log for debugging
  }, [pagination.totalPages]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Form submission", newProduct);
  //    dispatch(addNewProduct(newProduct));
  //    toast.success("Product added successfully");
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isEditing) {
  //     // Dispatch the update action
  //     dispatch(updateProduct(newProduct))
  //       .unwrap()
  //       .then(() => {
  //         toast.success("Product updated successfully");
  //         setShowAddProduct(false);
  //         setIsEditing(false);
  //         setNewProduct({ name: "", price: "" });
  //         fetchProductDetails();
  //       })
  //       .catch((error) => {
  //         toast.error("Failed to update product: " + error.message);
  //       });
  //   } else {
  //     // Dispatch the add action
  //     dispatch(addNewProduct(newProduct))
  //       .unwrap()
  //       .then(() => {
  //         toast.success("Product added successfully");
  //         setShowAddProduct(false);
  //         setNewProduct({ name: "", price: "" });
  //         fetchProductDetails();
  //       })
  //       .catch((error) => {
  //         toast.error("Failed to add product: " + error.message);
  //       });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = isEditing ? updateProduct : addNewProduct;
    dispatch(action(newProduct))
      .unwrap()
      .then(() => {
        toast.success(`Product ${isEditing ? "updated" : "added"} successfully`);
        resetForm();
        fetchAllProducts();
      })
      .catch((error) => toast.error(`Failed to ${isEditing ? "update" : "add"} product: ${error.message}`));
  };

  const resetForm = () => {
    setShowAddProduct(false);
    setIsEditing(false);
    setNewProduct({
      name: "",
      price: "",
      saleTaxPercentage: "",
      incomeTaxPercentage: "",
    });
  };

  // const fetchProductDetails = async () => {
  //   try {
  //     const response = await APIinstance.get(`product?page=${pagination.page}&limit=${pagination.limit}`);
  //     if (response.data.status === true) {
  //       setProductDetails(response.data.products);
  //       setPagination(prev => ({
  //         ...prev,
  //         totalPages: response.data.params.totalPages,
  //       }));
  //     }
  //   } catch (error) {
  //     console.error("Error fetching product details", error);
  //     toast.error("Failed to fetch products.");
  //   }
  // };

  // useEffect(() => {
  //   fetchProductDetails();
  // }, [pagination.page, pagination.limit]);

  useEffect(() => {
    console.log("productDetails after state update:", productDetails);
  }, [productDetails]); // This will log the state after it has been updated.

  const handleLimitChange = (event) => {
    setPagination({ ...pagination, limit: Number(event.target.value), page: 1 });
  };

  const handleChange = (e) => {
    setItemHeadDetails({ ...itemHeadDetails, [e.target.name]: e.target.value });
  };

  const handlePageChange = (pageNumber) => {
    dispatch(fetchAllProducts({ page: pageNumber, limit: pagination.limit }));
    setPagination({ ...pagination, page: pageNumber });
  };
  

  let paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
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
    setShowAddProduct((prev) => !prev); 
  };

  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Click handler for the edit button
  const handleEditClick = (product) => {
    setIsEditing(true);
    setShowAddProduct(true);
    setNewProduct({
      _id: product._id,
      name: product.name,
      price: product.price,
      saleTaxPercentage: product.saleTaxPercentage || "",
      incomeTaxPercentage: product.incomeTaxPercentage || "",
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
  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId))
      .unwrap()
      .then(() => {
        toast.success("Product deleted successfully");
        fetchProductDetails();
      })
      .catch(() => toast.error("Failed to delete product"));
  };

  const navigateBack = () => {
    window.history.go(-1); // This will navigate back one route
  };
  return (
    <section>
      <div className="container">
        <div class="nine">
          <NavLink >
        <FaArrowLeftLong className="mt-4 fs-2" style={{cursor:'pointer'}} onClick={navigateBack}/>
          </NavLink>

          <h1 className="mt-4">
            Add Product<span>HiTech Solution</span>
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
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="d-block">
                  <label for="inp" class="inp mb-3 d-block">
                    <input
                      type="number"
                      id="saleTaxPercentage"
                      name="saleTaxPercentage"
                      placeholder="&nbsp;"
                      value={newProduct.saleTaxPercentage}
                      onChange={handleInputChange}
                    />
                    <span class="label">Sale Tax Percentage</span>
                    <span class="focus-bg"></span>
                  </label>
                  <label for="inp" class="inp d-block">
                    <input
                      type="number"
                      id="incomeTaxPercentage"
                      name="incomeTaxPercentage"
                      placeholder="&nbsp;"
                      value={newProduct.incomeTaxPercentage}
                      onChange={handleInputChange}
                    />
                    <span class="label">Income Tax Percentage</span>
                    <span class="focus-bg"></span>
                  </label>
                  
                </div>
                
              </div>
              <button
                    type="submit"
                    className="new_btn2 w-25 mt-2 px-4 p-2"
                    // onClick={() => setShowAddProduct(false)}
                    // style={{ display: showAddProduct ? "none" : "block" }}
                  >
                    {isEditing ? "Update Product" : "Add New Product"}
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
        {products.length > 0 ? (
          <table className="table table-bordered mt-3 rounded">
            <thead>
              <tr style={{ position: "sticky", top: "0" }}>
                <th scope="col">ProductID #</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Price</th>
                <th scope="col">Sale Tax Percentage</th>
                <th scope="col">Income Tax Percentage</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={index}>
                  <td>
                    {(pagination.page - 1) * pagination.limit + index + 1}
                  </td>
                  <td>{product?.name}</td>
                  <td>{product?.price}</td>
                  <td>{product?.saleTaxPercentage}</td>
                  <td>{product?.incomeTaxPercentage}</td>
                  <td>
                    <FiEdit onClick={() => handleEditClick(product)} />
                  </td>
                  <td>
                    <MdDeleteOutline
                      onClick={() => handleDeleteProduct(product._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products found.</p>
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

export default AddProduct;
