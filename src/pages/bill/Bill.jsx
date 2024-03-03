import { React, useEffect, useState } from "react";
// import { RiBillLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineCreateNewFolder } from "react-icons/md";

import { FaDeleteLeft } from "react-icons/fa6";
import { CiSaveDown1 } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

import { IoMdAdd } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { VscOpenPreview } from "react-icons/vsc";
import { FaRegCopy } from "react-icons/fa";
import Model from "./Model";
import { FaPlus } from "react-icons/fa6";

import "./Bill.css";
import { LinkContainer } from "react-router-bootstrap";
import { fetchCustomers } from "../../redux/addCustomer";
import { fetchItemHeads } from "../../redux/itemSlice";
import { fetchDepartment } from "../../redux/departmentSlice";
import { fetchAllProducts } from "../../redux/product/Product";
import { APIinstance } from "../../axios.config";
import { toast } from "react-hot-toast";

const Bill = () => {
  const [modalShow, setModalShow] = useState(false);
  function refreshPage() {
    window.location.reload(false);
  }

  const [selectedCustomerId, setSelectedCustomerId] = useState("");
  const [selectedCustomerMobile, setSelectedCustomerMobile] = useState("");

  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);

  useEffect(() => {
    dispatch(fetchCustomers({ page: 1, limit: 10 }));
  }, [dispatch]);

  const handleSelectCustomer = (e) => {
    const customerId = e.target.value;
    setSelectedCustomerId(customerId);
    const selectedCustomer = customers.find(
      (customer) => customer._id === customerId
    );
    setSelectedCustomerMobile(selectedCustomer?.mobile || "");
  };

  const [selectedItemId, setSelectedItemId] = useState("");
  const handleSelectItemHead = (e) => {
    const ItemId = e.target.value;
    setSelectedItemId(ItemId);
    // If you need to do more with the selected department (e.g., fetch more data), you can do that here
  };

  const itemheads = useSelector((state) => state.itemHead.itemHeads);
  console.log("itemheadsitemheadsitemheads", itemheads);
  useEffect(() => {
    dispatch(fetchItemHeads({ page: 1, limit: 10 }));
  }, [dispatch]);

  const [selectedDepartmentId, setSelectedDepartmentId] = useState("");

  const handleSelectDepartment = (e) => {
    const departmentId = e.target.value;
    setSelectedDepartmentId(departmentId);
    // If you need to do more with the selected department (e.g., fetch more data), you can do that here
  };

  const departments = useSelector((state) => state.department.itemHeads);
  console.log("departmentsdepartmentsdepartmentsdepartments", departments);
  useEffect(() => {
    dispatch(fetchDepartment({ page: 1, limit: 10 }));
  }, [dispatch]);

  // const [showForm, setShowForm] = useState(false);

  const [rows, setRows] = useState([
    {
      id: 1,
      productName: "",
      productPrice: 0,
      quantity: 1,
      salesPercentage: 0,
      incomeTaxPercentage: 0,
    },
  ]);

  const { products, totalPages: reduxTotalPages } = useSelector(
    (state) => state.productSlice
  );
  console.log("productsofall", products);
  // const productState = useSelector((state) => state.products);
  // console.log("productStateproductState",products);
  useEffect(() => {
    dispatch(fetchAllProducts({ page: null, limit: null }));
    // .unwrap()
    // .then((response) => {
    //   setTotalPages(response.params.totalPages);
    // })
    // .catch((error) => {
    //   console.error('Failed to fetch item heads:', error);
    // });
  }, []);

  const entireState = useSelector((state) => state);
  useEffect(() => {
    console.log("Entire Redux State:", entireState);
  }, [entireState]);

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      productName: "",
      productPrice: 0,
      quantity: 1,
      salesPercentage: 0,
      incomeTaxPercentage: 0,
    };
    setRows([...rows, newRow]);
  };

  const [getAllTotals, setAllTotals] = useState({
    totalIncomeTax: 0,
    totalSaleTax: 0,
    totalAmountExcludeTax: 0,
    totalAmountIncludeTax: 0,
    grandTotal: 0,
  });

  const calculateTotal = () => {
    let IncomeTax = 0
    let SaleTax = 0
    let AmountExcludeTax = 0
    let AmountIncludeTax = 0
    let grand = 0
    rows.forEach((item) => {
      console.log("itemitem", item);
      const { productPrice, quantity, salesPercentage, incomeTaxPercentage } = item;
        console.log("productPrice, quantity, salesPercentage, incomeTaxPercentage ", productPrice, quantity, salesPercentage, incomeTaxPercentage );
        IncomeTax +=  (quantity * productPrice * incomeTaxPercentage) / 100;
        SaleTax +=  (quantity * productPrice * salesPercentage) / 100;
        AmountExcludeTax += productPrice * quantity;
    });
    AmountIncludeTax = IncomeTax + SaleTax + AmountExcludeTax;
    grand = IncomeTax + SaleTax + AmountExcludeTax;
    setAllTotals({
      totalIncomeTax: IncomeTax,
      totalSaleTax: SaleTax,
      totalAmountExcludeTax: AmountExcludeTax,
      totalAmountIncludeTax: AmountIncludeTax,
      grandTotal: grand,
    })
  };
  useEffect(()=>{
    calculateTotal();
  },[rows])

  const handleSelectProduct = (index, productId) => {
    const product = products.find((p) => p._id === productId);
    const updatedRows = rows.map((row, idx) =>
      idx === index
        ? {
            ...row,
            productId: productId,
            productName: product.name,
            productPrice: product.price,
            salesPercentage: product.saleTaxPercentage,
            incomeTaxPercentage: product.incomeTaxPercentage,
          }
        : row
    );
    setRows(updatedRows);
    // calculateTotal();
  };

  const handleProductPriceChange = (index, price) => {
    const updatedRows = rows.map((row, idx) =>
      idx === index ? { ...row, productPrice: price } : row
    );
    setRows(updatedRows);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedRows = rows.map((row, idx) =>
      idx === index ? { ...row, quantity: quantity } : row
    );
    setRows(updatedRows);
  };

  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, idx) => idx !== index);
    setRows(updatedRows);
  };

  const handleSubmit = async () => {
    const billPayload = {
      billNumber: 1, 
      customer: selectedCustomerId,
      department: selectedDepartmentId,
      item: selectedItemId,
      products: rows.map(({ productName, productPrice, salesPercentage, incomeTaxPercentage, quantity }) => ({
        name: productName,
        price: productPrice,
        saleTaxPercentage: salesPercentage,
        incomeTaxPercentage: incomeTaxPercentage,
        quantity,
      })),
      totalSaleTax: getAllTotals.totalSaleTax,
      totalIncomeTax: getAllTotals.totalIncomeTax,
      total: getAllTotals.grandTotal,
    };
  
    try {
      const response = await APIinstance.post('bill', billPayload);
      console.log('Bill submitted successfully:', response.data);
      toast.success('Bill submitted successfully');
    } catch (error) {
      console.error('Error submitting bill:', error);
      toast.error('Failed to submit bill');
    }
  };


  const fetchProductDetails = async () => {
    try {
      const response = await APIinstance.get("bill?page=1&limit=10");
      console.log("responseresponse",response);
      if (response.data.status === true) {

        // setProductDetails(response.data.products);
        setPagination(prev => ({
          ...prev,
          totalPages: response.data.params.totalPages,
        }));
      }
    } catch (error) {
      console.error("Error fetching product details", error);
      toast.error("Failed to fetch products.");
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <section className="bill_bg">
      <div className="container pb-3">
        <div class="nine">
          <h1 className="mt-2">
            Billing<span>HiTech Solution</span>
          </h1>
        </div>
        <>
          <div className="row p-3">
            <div className="col-lg-6 col-md-6">
              <div className="d-block">
                <label for="inp" class="inp mb-3">
                  <input type="number" id="inp" placeholder="&nbsp;" />
                  <span class="label">Bill #</span>
                  <span class="focus-bg"></span>
                </label>
                <label for="inp" class="inp">
                  <input
                    type="text"
                    value={selectedCustomerMobile}
                    readOnly
                    placeholder="&nbsp;"
                  />
                  <span class="label">Contact #</span>
                  <span class="focus-bg"></span>
                </label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="d-block">
                <div className="d-lg-flex d-block">
                  <label for="inp" class="inp mb-3 mt-lg-0 mt-3">
                    <select
                      id="customerSelect"
                      onChange={handleSelectCustomer}
                      value={selectedCustomerId}
                    >
                      <option value="">Select a customer</option>
                      {customers.map((customer) => (
                        <option key={customer._id} value={customer._id}>
                          {customer.name}
                        </option>
                      ))}
                    </select>
                    <span class="label">Name</span>
                    <span class="focus-bg"></span>
                  </label>
                  <button className="btn_add ms-3 gap-0">
                    Add <IoMdAdd />
                  </button>
                </div>
                <div className="d-lg-flex d-block">
                  <label for="inp" class="inp mb-3">
                    <select
                      id="itemSelect"
                      onChange={handleSelectItemHead}
                      value={selectedItemId}
                    >
                      <option value="">Select an ItemHead</option>
                      {itemheads.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <span class="label">Item Head</span>
                    <span class="focus-bg"></span>
                  </label>
                  <button className="btn_add ms-3 gap-0">
                    Add <IoMdAdd />
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
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
        </div> */}
          </div>
          <div className="row px-3">
            <div className="col-6">
              {" "}
              <div className="d-flex">
                <label for="inp" class="ing w-100">
                  <select
                    id="departmentSelect"
                    onChange={handleSelectDepartment}
                    value={selectedDepartmentId}
                  >
                    <option value="">Select a Department</option>
                    {departments &&
                      departments.map((department) => (
                        <option key={department._id} value={department._id}>
                          {department.name}
                        </option>
                      ))}
                  </select>

                  <span class="label">Department</span>
                  <span class="focus-bg"></span>
                </label>
                {/* <div className="it">
              <input type="text" />
            </div> */}
              </div>
            </div>

            <div className="col-5"></div>
          </div>
        </>
      </div>
      <div
        className="container"
        style={{ height: "400px", overflow: "scroll" }}
      >
        <table class="table table-bordered rounded">
          <thead>
            <tr style={{ position: "sticky", top: "0" }}>
              <th>Add</th>
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
            {rows.map((row, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td onClick={() => handleAddRow(index)}>+</td>
                <td>
                  <select
                    value={row.productId}
                    onChange={(e) => handleSelectProduct(index, e.target.value)}
                  >
                    <option value="">Select a Product</option>
                    {products.map((product) => (
                      <option key={product._id} value={product._id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    value={row.productPrice}
                    onChange={(e) =>
                      handleProductPriceChange(index, e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={row.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                  />
                </td>
                <td>{row.quantity * row.productPrice}</td>
                <td>{row.salesPercentage} %</td>
                <td>
                  {(row.quantity * row.productPrice * row.salesPercentage) /
                    100}{" "}
                  RS
                </td>
                <td>{row.incomeTaxPercentage} %</td>
                <td>
                  {(row.quantity * row.productPrice * row.incomeTaxPercentage) /
                    100}{" "}
                  RS
                </td>
                <td>
                  {row.quantity * row.productPrice +
                    (row.quantity * row.productPrice * row.salesPercentage) /
                      100 +
                    (row.quantity *
                      row.productPrice *
                      row.incomeTaxPercentage) /
                      100}
                </td>
                <td>
                  <button onClick={() => handleRemoveRow(index)}>
                    <FaDeleteLeft />
                  </button>
                </td>
              </tr>
            ))}
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
                    value={getAllTotals.totalIncomeTax}
                    readOnly
                  />
                  <span class="label ELE">Total(Income Tax)</span>
                  <span class="focus-bg"></span>
                </label>
                <label for="inp" class="inp d-block mb-3">
                  <input
                    type="number"
                    id="inp"
                    placeholder="&nbsp;"
                    value={getAllTotals.totalAmountExcludeTax}
                    readOnly
                  />
                  <span class="label ELE">Total Amount(Excluding Tax)</span>
                  <span class="focus-bg"></span>
                </label>
                <label for="inp" class="inp d-block">
                  <input
                    type="number"
                    id="inp"
                    placeholder="&nbsp;"
                    // value={getAllTotals.}
                    readOnly
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
                    value={getAllTotals.totalSaleTax}
                    readOnly
                  />
                  <span class="label ELE">Total(GST)</span>
                  <span class="focus-bg"></span>
                </label>
                <label for="inp" class="inp d-block mb-3">
                  <input
                    type="number"
                    id="inp"
                    placeholder="&nbsp;"
                    value={getAllTotals.totalAmountIncludeTax}
                    readOnly
                  />
                  <span class="label ELE">Total Amount(including All Tax)</span>
                  <span class="focus-bg"></span>
                </label>
                <label for="inp" class="inp d-block">
                  <input
                    type="number"
                    id="inp"
                    placeholder="&nbsp;"
                    value={getAllTotals.grandTotal}
                    readOnly
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
                {/* <button className="btn_bil d-block">
                  Labour Bill PST <VscOpenPreview />
                </button> */}
                <button className="btn_bil d-block" onClick={handleSubmit}>Submit Bill</button>

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
