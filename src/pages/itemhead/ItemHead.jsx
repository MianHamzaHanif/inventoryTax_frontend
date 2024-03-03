
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { toast } from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import Pagination from "react-bootstrap/Pagination";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemHead,
  deleteItemHead,
  fetchItemHeads,
  updateItemHead,
} from "../../redux/itemSlice";
import { LinkContainer } from "react-router-bootstrap";
import { Form } from "react-bootstrap";


const ItemHead = () => {
  const dispatch = useDispatch();
  const { itemHeads, totalPages: reduxTotalPages } = useSelector((state) => state.itemHead);
  const [totalPages, setTotalPages] = useState(0); // Define totalPages state

  
  // Notice we do not set totalPages here anymore
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10
  });
  const [showForm, setShowForm] = useState(false);
  const [itemHeadDetails, setItemHeadDetails] = useState({  name: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setTotalPages(reduxTotalPages); // Set totalPages from the redux state
  }, [reduxTotalPages]);

  useEffect(() => {
    dispatch(fetchItemHeads({ page: pagination.page, limit: pagination.limit }))
      .unwrap()
      .then((response) => {
        setTotalPages(response.params.totalPages); // Update totalPages when fetchItemHeads is successful
      })
      .catch((error) => {
        console.error('Failed to fetch item heads:', error);
      });
  }, [dispatch, pagination.page, pagination.limit]);

  // ...rest of your code

  useEffect(() => {
    console.log("Total pages: ", pagination.totalPages); // Log for debugging
  }, [pagination.totalPages]);

  // ...rest of your code

  
  const handlePageChange = (pageNumber) => {
    setPagination({ ...pagination, page: pageNumber });
  };


  const handleLimitChange = (event) => {
    setPagination({ ...pagination, limit: Number(event.target.value), page: 1 });
  };

  const handleChange = (e) => {
    setItemHeadDetails({ ...itemHeadDetails, [e.target.name]: e.target.value });
  };

  const handleEdit = (itemHead) => {
    setIsEditing(true);
    setItemHeadDetails(itemHead); // Make sure this includes the _id property
    setShowForm(true);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Ensure that the _id is being sent to the API
      dispatch(updateItemHead({ id: itemHeadDetails._id, name: itemHeadDetails.name }))
        .unwrap()
        .then(() => {
          toast.success("Item head updated successfully");
          resetForm();
        })
        .catch(error => {
          toast.error(`Failed to update item head: ${error.message}`);
        });
    } else {
      dispatch(addItemHead({ name: itemHeadDetails.name }))
        .unwrap()
        .then(() => {
          toast.success("Item head added successfully");
          resetForm();
        })
        .catch(error => {
          toast.error(`Failed to add item head: ${error.message}`);
        });
    }
  };
  
  
  

  
  

  const handleDelete = (id) => {
    dispatch(deleteItemHead(id))
      .unwrap()
      .then(() => {
        toast.success("Item head deleted successfully");
      })
      .catch(error => toast.error(`Failed to delete item head: ${error.message}`));
  };

  const resetForm = () => {
    setShowForm(false);
    setIsEditing(false);
    setItemHeadDetails({ name: "" });
    if (isEditing) {
      dispatch(fetchItemHeads({ page: pagination.page, limit: pagination.limit }));
    }
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

  useEffect(() => {
    console.log("Pagination Items: ", paginationItems); // Log for debugging
  }, [paginationItems]);

  return (
    <section>
      <div className="container">
        <div className="nine">
          <h1 className="mt-4">
            Item Head<span>HiTech Solution</span>
          </h1>
          {showForm && (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="d-block">
                  <label for="inp" class="inp mb-3 d-block">
                    <input
                     type="text"
                     name="name"
                     placeholder="&nbsp;"
                     value={itemHeadDetails.name}
                     onChange={handleChange}
                     required
                    />
                    <span class="label">Product Name</span>
                    <span class="focus-bg"></span>
                  </label>
                 </div>
                 </div> 

                 </div> 




            {/* <input
              type="text"
              name="name"
              placeholder="Item Head Name"
              value={itemHeadDetails.name}
              onChange={handleChange}
              required
            /> */}
            <button type="submit" className="new_btn2 mt-2 px-4 p-2">{isEditing ? "Update" : "Add"} Item Head</button>
          </form>
        )}
        {!showForm && (
          <div className="col-lg-12 col-md-12">
          <div className="d-flex justify-content-end mx-auto gap-3">
            <button
              // type="submit"
              onClick={() => setShowForm(true)}
              className="new_btn p-1"
              // onClick={() => setShowAddProduct(true)}
              // style={{ display: showAddProduct ? "none" : "block" }}
            >
              <FaPlus className="fs-4 " />
            </button>
          </div>
        </div>
        )}
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
                <th>ID #</th>
                <th>Item Head</th>
                <th></th>
                <th></th>

              </tr>
            </thead>
            <tbody>
              {itemHeads?.map((itemHead, index) => (
                <tr key={index}>
                 <td>
                    {(pagination.page - 1) * pagination.limit + index + 1}
                  </td>
                  <td>{itemHead?.name}</td>
                  <td>
                    <FiEdit onClick={() => handleEdit(itemHead)} />
                  </td>
                  <td>
                  <MdDeleteOutline onClick={() => handleDelete(itemHead._id)} />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
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
            <Pagination.First onClick={() => handlePageChange(1)} disabled={pagination.page === 1} />
            <Pagination.Prev onClick={() => handlePageChange(pagination.page - 1)} disabled={pagination.page === 1} />
            {Array.from({ length: totalPages }, (_, idx) => (
              <Pagination.Item key={idx + 1} active={idx + 1 === pagination.page} onClick={() => handlePageChange(idx + 1)}>
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handlePageChange(pagination.page + 1)} disabled={pagination.page === totalPages} />
            <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={pagination.page === totalPages} />
          </Pagination>
          </div>
        </div>
      </div>
        <LinkContainer to={"/"}>
          <button className="btn_bill">
            Leave <IoMdLogOut />
          </button>
        </LinkContainer>
      </div>
      </div>
    </section>
  );
};

export default ItemHead;
