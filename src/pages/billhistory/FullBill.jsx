// // // FullBill.jsx
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { APIinstance } from "../../axios.config";

// // const FullBill = () => {
// //   const { id } = useParams();
// //   const [bill, setBill] = useState(null);

// //   useEffect(() => {
// //     const fetchBillDetails = async () => {
// //       try {
// //         const response = await APIinstance.get(`/bill/${id}`);
// //         setBill(response.data.bill);
// //       } catch (error) {
// //         console.error("Error fetching bill details", error);
// //       }
// //     };

// //     fetchBillDetails();
// //   }, [id]);

// //   return (
// //     <div className="container">
// //       {bill ? (
// //         <div>
// //           <h1>Bill Details</h1>
// //           <table className="table table-bordered">
// //             <thead>
// //               <tr>
// //                 <th>Product Name</th>
// //                 <th>Product Price</th>
// //                 <th>SaleTaxPercentage</th>
// //                 <th>IncomeTaxPercentage</th>
// //                 {/* <th>IncomeTaxPercentage</th> */}
// //                 <th>quantity</th>
// //                 {/* <th>total</th> */}
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {bill.products.map((product) => (
// //                 <tr key={product._id}>
// //                   <td>{product.name}</td>
// //                   <td>{product.price}</td>
// //                   <td> {product.saleTaxPercentage}</td>
// //                   <td> {product.incomeTaxPercentage}</td>
// //                   <td> {product.quantity}</td>
// //                 </tr>
// //               ))}
// //               <td>{bill.totalSaleTax}</td>
// //               <td>{bill.totalIncomeTax}</td>
// //              <td>{bill.total}</td>
// //             </tbody>
// //           </table>
// //         </div>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default FullBill;

// import { React, useEffect, useState } from "react";
// // import { RiBillLine } from "react-icons/ri";
// import { IoMdLogOut } from "react-icons/io";
// import { MdOutlineCreateNewFolder } from "react-icons/md";

// import { FaDeleteLeft } from "react-icons/fa6";
// import { CiSaveDown1 } from "react-icons/ci";
// import { useDispatch, useSelector } from "react-redux";

// import { IoMdAdd } from "react-icons/io";
// import { FiRefreshCw } from "react-icons/fi";
// import { VscOpenPreview } from "react-icons/vsc";
// import { FaRegCopy } from "react-icons/fa";
// // import Model from "./Model";
// import { FaPlus } from "react-icons/fa6";

// // import "./Bill.css";
// import { LinkContainer } from "react-router-bootstrap";
// import { fetchCustomers } from "../../redux/addCustomer";
// import { fetchItemHeads } from "../../redux/itemSlice";
// import { fetchDepartment } from "../../redux/departmentSlice";
// import { fetchAllProducts } from "../../redux/product/Product";
// import { APIinstance } from "../../axios.config";
// import { toast } from "react-hot-toast";
// import { addNewBill, updateBill } from "../../redux/bill";
// import { useParams } from "react-router-dom";

// const FullBill = () => {
//     const {id} = useParams();
//     console.log("id",id);
//   const [modalShow, setModalShow] = useState(false);
//   function refreshPage() {
//     window.location.reload(false);
//   }
// //   const { id } = useParams();
//     const [bill, setBill] = useState(null);

//   const [selectedCustomerId, setSelectedCustomerId] = useState("");
//   const [selectedCustomerMobile, setSelectedCustomerMobile] = useState("");

//   const dispatch = useDispatch();
//   const customers = useSelector((state) => state.customer.customers);

//   useEffect(() => {
//     dispatch(fetchCustomers({ page: 1, limit: 10 }));
//   }, [dispatch]);

//   const handleSelectCustomer = (e) => {
//     const customerId = e.target.value;
//     setSelectedCustomerId(customerId);
//     const selectedCustomer = customers.find(
//       (customer) => customer._id === customerId
//     );
//     setSelectedCustomerMobile(selectedCustomer?.mobile || "");
//   };

//   const [selectedItemId, setSelectedItemId] = useState("");
//   const handleSelectItemHead = (e) => {
//     const ItemId = e.target.value;
//     setSelectedItemId(ItemId);
//     // If you need to do more with the selected department (e.g., fetch more data), you can do that here
//   };

//   const itemheads = useSelector((state) => state.itemHead.itemHeads);
//   console.log("itemheadsitemheadsitemheads", itemheads);
//   useEffect(() => {
//     dispatch(fetchItemHeads({ page: 1, limit: 10 }));
//   }, [dispatch]);

//   const [selectedDepartmentId, setSelectedDepartmentId] = useState("");

//   const handleSelectDepartment = (e) => {
//     const departmentId = e.target.value;
//     setSelectedDepartmentId(departmentId);
//     // If you need to do more with the selected department (e.g., fetch more data), you can do that here
//   };

//   const departments = useSelector((state) => state.department.itemHeads);
//   console.log("departmentsdepartmentsdepartmentsdepartments", departments);
//   useEffect(() => {
//     dispatch(fetchDepartment({ page: 1, limit: 10 }));
//   }, [dispatch]);

//   // const [showForm, setShowForm] = useState(false);

//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       productName: "",
//       productPrice: 0,
//       quantity: 1,
//       salesPercentage: 0,
//       incomeTaxPercentage: 0,
//     },
//   ]);

//   const { products, totalPages: reduxTotalPages } = useSelector(
//     (state) => state.productSlice
//   );
//   console.log("productsofall", products);
//   // const productState = useSelector((state) => state.products);
//   // console.log("productStateproductState",products);
//   useEffect(() => {
//     dispatch(fetchAllProducts({ page: null, limit: null }));
//     // .unwrap()
//     // .then((response) => {
//     //   setTotalPages(response.params.totalPages);
//     // })
//     // .catch((error) => {
//     //   console.error('Failed to fetch item heads:', error);
//     // });
//   }, []);

//   const entireState = useSelector((state) => state);
//   useEffect(() => {
//     console.log("Entire Redux State:", entireState);
//   }, [entireState]);

//   const handleAddRow = () => {
//     const newRow = {
//       id: rows.length + 1,
//       productName: "",
//       productPrice: 0,
//       quantity: 1,
//       salesPercentage: 0,
//       incomeTaxPercentage: 0,
//     };
//     setRows([...rows, newRow]);
//   };

//   const [getAllTotals, setAllTotals] = useState({
//     totalIncomeTax: 0,
//     totalSaleTax: 0,
//     totalAmountExcludeTax: 0,
//     totalAmountIncludeTax: 0,
//     grandTotal: 0,
//   });

//   useEffect(() => {
//     const fetchBillDetails = async () => {
//       try {
//         const response = await APIinstance.get(`/bill/${id}`);
//         console.log("responseofbills",response);
//         setBill(response.data.bill);
//         setAllTotals({
//             totalIncomeTax: response.data.bill.totalIncomeTax,
//             totalSaleTax: response.data.bill.totalSaleTax,
//             // totalAmountExcludeTax: response.data.bill,
//             // totalAmountIncludeTax: response.data.bill,
//             grandTotal: response.data.total,
//         })
//       } catch (error) {
//         console.error("Error fetching bill details", error);
//       }
//     };

//     fetchBillDetails();
//   }, [id]);

//   const calculateTotal = () => {
//     let IncomeTax = 0
//     let SaleTax = 0
//     let AmountExcludeTax = 0
//     let AmountIncludeTax = 0
//     let grand = 0
//     rows.forEach((item) => {
//       console.log("itemitem", item);
//       const { productPrice, quantity, salesPercentage, incomeTaxPercentage } = item;
//         console.log("productPrice, quantity, salesPercentage, incomeTaxPercentage ", productPrice, quantity, salesPercentage, incomeTaxPercentage );
//         IncomeTax +=  (quantity * productPrice * incomeTaxPercentage) / 100;
//         SaleTax +=  (quantity * productPrice * salesPercentage) / 100;
//         AmountExcludeTax += productPrice * quantity;
//     });
//     AmountIncludeTax = IncomeTax + SaleTax + AmountExcludeTax;
//     grand = IncomeTax + SaleTax + AmountExcludeTax;
//     setAllTotals({
//       totalIncomeTax: IncomeTax,
//       totalSaleTax: SaleTax,
//       totalAmountExcludeTax: AmountExcludeTax,
//       totalAmountIncludeTax: AmountIncludeTax,
//       grandTotal: grand,
//     })
//   };
//   useEffect(()=>{
//     calculateTotal();
//   },[rows])

//   const handleSelectProduct = (index, productId) => {
//     const product = products.find((p) => p._id === productId);
//     const updatedRows = rows.map((row, idx) =>
//       idx === index
//         ? {
//             ...row,
//             productId: productId,
//             productName: product.name,
//             productPrice: product.price,
//             salesPercentage: product.saleTaxPercentage,
//             incomeTaxPercentage: product.incomeTaxPercentage,
//           }
//         : row
//     );
//     setRows(updatedRows);
//     // calculateTotal();
//   };

//   const handleProductPriceChange = (index, price) => {
//     const updatedRows = rows.map((row, idx) =>
//       idx === index ? { ...row, productPrice: price } : row
//     );
//     setRows(updatedRows);
//   };

//   const handleQuantityChange = (index, quantity) => {
//     const updatedRows = rows.map((row, idx) =>
//       idx === index ? { ...row, quantity: quantity } : row
//     );
//     setRows(updatedRows);
//   };

//   const handleRemoveRow = (index) => {
//     const updatedRows = rows.filter((_, idx) => idx !== index);
//     setRows(updatedRows);
//   };

//   const handleSubmit = async () => {
//     let billPayload = {
//       billNumber: 1,
//       customer: selectedCustomerId,
//       department: selectedDepartmentId,
//       item: selectedItemId,
//       products: rows.map(({ productName, productPrice, salesPercentage, incomeTaxPercentage, quantity }) => ({
//         name: productName,
//         price: productPrice,
//         saleTaxPercentage: salesPercentage,
//         incomeTaxPercentage: incomeTaxPercentage,
//         quantity,
//       })),
//       totalSaleTax: getAllTotals.totalSaleTax,
//       totalIncomeTax: getAllTotals.totalIncomeTax,
//       total: getAllTotals.grandTotal,
//     };

//     try {
//        dispatch(updateBill( {id ,billPayload} ));
//       console.log('Bill submitted successfully');
//       toast.success('Bill submitted successfully');
//     } catch (error) {
//       console.error('Error submitting bill:', error);
//       toast.error('Failed to submit bill');
//     }
//   };

//   const fetchProductDetails = async () => {
//     try {
//       const response = await APIinstance.get("bill?page=1&limit=10");
//       console.log("responseresponse",response);
//       if (response.data.status === true) {

//         // setProductDetails(response.data.products);
//         setPagination(prev => ({
//           ...prev,
//           totalPages: response.data.params.totalPages,
//         }));
//       }
//     } catch (error) {
//       console.error("Error fetching product details", error);
//       toast.error("Failed to fetch products.");
//     }
//   };

//   useEffect(() => {
//     fetchProductDetails();
//   }, []);

//   return (
//     <section className="bill_bg">
//       <div className="container pb-3">
//         <div class="nine">
//           <h1 className="mt-2">
//             Billing<span>HiTech Solution</span>
//           </h1>
//         </div>
//         <>
//           <div className="row p-3">
//             <div className="col-lg-6 col-md-6">
//               <div className="d-block">
//                 <label for="inp" class="inp mb-3">
//                   <input type="number" id="inp" placeholder="&nbsp;" />
//                   <span class="label">Bill #</span>
//                   <span class="focus-bg"></span>
//                 </label>
//                 <label for="inp" class="inp">
//                   <input
//                     type="text"
//                     value={selectedCustomerMobile}
//                     readOnly
//                     placeholder="&nbsp;"
//                   />
//                   <span class="label">Contact #</span>
//                   <span class="focus-bg"></span>
//                 </label>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-6">
//               <div className="d-block">
//                 <div className="d-lg-flex d-block">
//                   <label for="inp" class="inp mb-3 mt-lg-0 mt-3">
//                     <select
//                       id="customerSelect"
//                       onChange={handleSelectCustomer}
//                       value={selectedCustomerId}
//                     >
//                       <option value="">Select a customer</option>
//                       {customers.map((customer) => (
//                         <option key={customer._id} value={customer._id}>
//                           {customer.name}
//                         </option>
//                       ))}
//                     </select>
//                     <span class="label">Name</span>
//                     <span class="focus-bg"></span>
//                   </label>
//                   <button className="btn_add ms-3 gap-0">
//                     Add <IoMdAdd />
//                   </button>
//                 </div>
//                 <div className="d-lg-flex d-block">
//                   <label for="inp" class="inp mb-3">
//                     <select
//                       id="itemSelect"
//                       onChange={handleSelectItemHead}
//                       value={selectedItemId}
//                     >
//                       <option value="">Select an ItemHead</option>
//                       {itemheads.map((item) => (
//                         <option key={item._id} value={item._id}>
//                           {item.name}
//                         </option>
//                       ))}
//                     </select>
//                     <span class="label">Item Head</span>
//                     <span class="focus-bg"></span>
//                   </label>
//                   <button className="btn_add ms-3 gap-0">
//                     Add <IoMdAdd />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="col-lg-4 col-md-6">
//           <div className="d-flex justify-content-center mx-auto mt-4 gap-3">
//             <button
//               className="btn btn-outline-success d-block p-2"
//               onClick={refreshPage}
//             >
//               <FiRefreshCw className="d-block ms-3" />
//               <span className="d-block">Refresh</span>
//             </button>
//             <button className="btn btn-outline-success d-block p-3">
//               <CiSaveDown1 className="d-block ms-1" />
//               <span className="d-block">Save</span>
//             </button>
//             <button
//               onClick={() => setModalShow(true)}
//               className="btn btn-outline-success d-block p-3"
//             >
//               <MdOutlineCreateNewFolder className="d-block ms-1" />
//               <span className="d-block">New</span>
//             </button>
//             <Model show={modalShow} onHide={() => setModalShow(false)} />
//           </div>
//         </div> */}
//           </div>
//           <div className="row px-3">
//             <div className="col-6">
//               {" "}
//               <div className="d-flex">
//                 <label for="inp" class="ing w-100">
//                   <select
//                     id="departmentSelect"
//                     onChange={handleSelectDepartment}
//                     value={selectedDepartmentId}
//                   >
//                     <option value="">Select a Department</option>
//                     {departments &&
//                       departments.map((department) => (
//                         <option key={department._id} value={department._id}>
//                           {department.name}
//                         </option>
//                       ))}
//                   </select>

//                   <span class="label">Department</span>
//                   <span class="focus-bg"></span>
//                 </label>
//                 {/* <div className="it">
//               <input type="text" />
//             </div> */}
//               </div>
//             </div>

//             <div className="col-5"></div>
//           </div>
//         </>
//       </div>
//       <div
//         className="container"
//         style={{ height: "400px", overflow: "scroll" }}
//       >
//         <table class="table table-bordered rounded">
//           <thead>
//             <tr style={{ position: "sticky", top: "0" }}>
//               <th>Add</th>
//               <th scope="col">#</th>
//               <th scope="col">Product Name</th>
//               <th scope="col">Product Price</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Total</th>
//               <th scope="col">Sale Tax %</th>
//               <th scope="col">Sale Tax RS</th>
//               <th scope="col">Income Tax %</th>
//               <th scope="col">Tax RS</th>
//               <th scope="col">Sum Up</th>
//               <th scope="col">
//                 <FaDeleteLeft />
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, index) => (
//               <tr key={index}>
//                 <th scope="row">{index + 1}</th>
//                 <td onClick={() => handleAddRow(index)}>+</td>
//                 <td>
//                   <select
//                     value={row.productId}
//                     onChange={(e) => handleSelectProduct(index, e.target.value)}
//                   >
//                     <option value="">Select a Product</option>
//                     {products.map((product) => (
//                       <option key={product._id} value={product._id}>
//                         {product.name}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={row.productPrice}
//                     onChange={(e) =>
//                       handleProductPriceChange(index, e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="number"
//                     value={row.quantity}
//                     onChange={(e) =>
//                       handleQuantityChange(index, e.target.value)
//                     }
//                   />
//                 </td>
//                 <td>{row.quantity * row.productPrice}</td>
//                 <td>{row.salesPercentage} %</td>
//                 <td>
//                   {(row.quantity * row.productPrice * row.salesPercentage) /
//                     100}{" "}
//                   RS
//                 </td>
//                 <td>{row.incomeTaxPercentage} %</td>
//                 <td>
//                   {(row.quantity * row.productPrice * row.incomeTaxPercentage) /
//                     100}{" "}
//                   RS
//                 </td>
//                 <td>
//                   {row.quantity * row.productPrice +
//                     (row.quantity * row.productPrice * row.salesPercentage) /
//                       100 +
//                     (row.quantity *
//                       row.productPrice *
//                       row.incomeTaxPercentage) /
//                       100}
//                 </td>
//                 <td>
//                   <button onClick={() => handleRemoveRow(index)}>
//                     <FaDeleteLeft />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <section className="mt-5 py-4" style={{ backgroundColor: "#e3f1d9" }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-6">
//               <div className="d-block">
//                 <label for="inp" class="inp mb-3 d-block">
//                   <input
//                     type="number"
//                     id="inp"
//                     placeholder="&nbsp;"
//                     value={getAllTotals.totalIncomeTax}
//                     readOnly
//                   />
//                   <span class="label ELE">Total(Income Tax)</span>
//                   <span class="focus-bg"></span>
//                 </label>
//                 <label for="inp" class="inp d-block mb-3">
//                   <input
//                     type="number"
//                     id="inp"
//                     placeholder="&nbsp;"
//                     value={getAllTotals.totalAmountExcludeTax}
//                     readOnly
//                   />
//                   <span class="label ELE">Total Amount(Excluding Tax)</span>
//                   <span class="focus-bg"></span>
//                 </label>
//                 <label for="inp" class="inp d-block">
//                   <input
//                     type="number"
//                     id="inp"
//                     placeholder="&nbsp;"
//                     // value={getAllTotals.}
//                     readOnly
//                   />
//                   <span class="label ELE">Services Charge</span>
//                   <span class="focus-bg"></span>
//                 </label>
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="d-block">
//                 <label for="inp" class="inp mb-3 d-block">
//                   <input
//                     type="number"
//                     id="inp"
//                     placeholder="&nbsp;"
//                     value={getAllTotals.totalSaleTax}
//                     readOnly
//                   />
//                   <span class="label ELE">Total(GST)</span>
//                   <span class="focus-bg"></span>
//                 </label>
//                 <label for="inp" class="inp d-block mb-3">
//                   <input
//                     type="number"
//                     id="inp"
//                     placeholder="&nbsp;"
//                     value={getAllTotals.totalAmountIncludeTax}
//                     readOnly
//                   />
//                   <span class="label ELE">Total Amount(including All Tax)</span>
//                   <span class="focus-bg"></span>
//                 </label>
//                 <label for="inp" class="inp d-block">
//                   <input
//                     type="number"
//                     id="inp"
//                     placeholder="&nbsp;"
//                     value={getAllTotals.grandTotal}
//                     readOnly
//                   />
//                   <span class="label ELE">Grand Total</span>
//                   <span class="focus-bg"></span>
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div className="row justify-content-center mx-auto mt-3">
//             <div className="col-lg-4 col-12">
//               <div className="d-flex gap-3 justify-content-center mx-auto">
//                 <button className="btn_bil">
//                   Preview Bill <VscOpenPreview />
//                 </button>
//                 <button className="btn_bil">
//                   Customer Copy <FaRegCopy />
//                 </button>
//               </div>
//             </div>
//             <div className="col-lg-4 col-12">
//               <div className="d-flex gap-3 justify-content-center mx-auto">
//                 <button className="btn_bil d-block">
//                   Customer Tax <VscOpenPreview />
//                 </button>
//                 {/* <button className="btn_bil d-block">
//                   Labour Bill PST <VscOpenPreview />
//                 </button> */}
//                 <button className="btn_bil d-block" onClick={handleSubmit}>Submit Bill</button>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <LinkContainer to={"/"}>
//         <button className="btn_bill">
//           Leave <IoMdLogOut />
//         </button>
//       </LinkContainer>
//     </section>
//   );
// };

// export default FullBill;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIinstance } from "../../axios.config";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../redux/addCustomer";
import { fetchItemHeads } from "../../redux/itemSlice";
import { fetchDepartment } from "../../redux/departmentSlice";
import { fetchAllProducts } from "../../redux/product/Product";
import { toast } from "react-hot-toast";
import { updateBill } from "../../redux/bill";
import { FaRegCopy } from "react-icons/fa";
// import {
//     IoMdLogOut,
//     MdOutlineCreateNewFolder,
//     FaDeleteLeft,
//     CiSaveDown1,
//     IoMdAdd,
//     FiRefreshCw,
//     VscOpenPreview,
//     FaRegCopy,
//     FaPlus,
// } from "react-icons/all";
import { RiBillLine } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { FaDeleteLeft } from "react-icons/fa6";
import { CiSaveDown1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import { LinkContainer } from "react-router-bootstrap";

const FullBill = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [selectedCustomerId, setSelectedCustomerId] = useState("");
  const [billNumber, setBillNumber] = useState("");

  const [selectedCustomerMobile, setSelectedCustomerMobile] = useState("");
  const [selectedItemId, setSelectedItemId] = useState("");
  const [selectedDepartmentId, setSelectedDepartmentId] = useState("");
  const [rows, setRows] = useState([]);
  const [getAllTotals, setAllTotals] = useState({
    totalIncomeTax: 0,
    totalSaleTax: 0,
    totalAmountExcludeTax: 0,
    totalAmountIncludeTax: 0,
    grandTotal: 0,
  });
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);
  const itemheads = useSelector((state) => state.itemHead.itemHeads);
  const departments = useSelector((state) => state.department.itemHeads);
  const products = useSelector((state) => state.productSlice.products);

  const handleSelectItemHead = (e) => {
    const itemId = e.target.value;
    setSelectedItemId(itemId);
  };
  const handleSelectDepartment = (e) => {
    const departmentId = e.target.value;
    setSelectedDepartmentId(departmentId);
    // If you need to do more with the selected department (e.g., fetch more data), you can do that here
  };

  useEffect(() => {
    const fetchBillDetails = async () => {
      try {
        const response = await APIinstance.get(`/bill/${id}`);
        setBill(response.data.bill);
        setSelectedCustomerId(response.data.bill.customer);
        setBillNumber(response.data.bill.billNumber);
        setSelectedItemId(response.data.bill.item);
        setSelectedDepartmentId(response.data.bill.department);
        setRows(
          response.data.bill.products.map((product) => ({
            productId: product._id,
            productName: product.name,
            productPrice: product.price,
            quantity: product.quantity,
            salesPercentage: product.saleTaxPercentage,
            incomeTaxPercentage: product.incomeTaxPercentage,
          }))
        );
        setAllTotals({
          totalIncomeTax: response.data.bill.totalIncomeTax,
          totalSaleTax: response.data.bill.totalSaleTax,
          totalAmountExcludeTax: response.data.bill.products.reduce(
            (acc, curr) => acc + curr.price * curr.quantity,
            0
          ),
          totalAmountIncludeTax: response.data.bill.total,
          grandTotal: response.data.bill.total,
        });
      } catch (error) {
        console.error("Error fetching bill details", error);
      }
    };
    fetchBillDetails();
  }, [id]);

  useEffect(() => {
    dispatch(fetchCustomers({ page: 1, limit: 10 }));
    dispatch(fetchItemHeads({ page: 1, limit: 10 }));
    dispatch(fetchDepartment({ page: 1, limit: 10 }));
    dispatch(fetchAllProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  const handleQuantityChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].quantity = value;
    setRows(updatedRows);
};

const handleProductPriceChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].productPrice = value;
    setRows(updatedRows);
};

  const handleSelectCustomer = (e) => {
    const customerId = e.target.value;
    setSelectedCustomerId(customerId);
    const selectedCustomer = customers.find(
      (customer) => customer._id === customerId
    );
    setSelectedCustomerMobile(selectedCustomer?.mobile || "");
  };

  // Handle other select changes similarly for item heads and departments

  // useEffect(() => {
  //     // Set default product values from API to rows state
  //     if (products.length > 0) {
  //         const defaultRows = products.map((product) => ({
  //             productId: product._id,
  //             productName: product.name,
  //             productPrice: product.price,
  //             quantity: 1,
  //             salesPercentage: product.saleTaxPercentage,
  //             incomeTaxPercentage: product.incomeTaxPercentage,
  //         }));
  //         setRows(defaultRows);
  //     }
  // }, [products]);
  const handleSelectProduct = (index, productId) => {
    const product = products.find((p) => p._id === productId);
    const updatedRows = [...rows];
    const selectedRow = updatedRows[index];

    if (selectedRow) {
      // Update only the selected row with the new product data
      selectedRow.productId = productId;
      selectedRow.productName = product.name;
      selectedRow.productPrice = product.price;
      selectedRow.salesPercentage = product.saleTaxPercentage;
      selectedRow.incomeTaxPercentage = product.incomeTaxPercentage;
    }

    setRows(updatedRows);
  };

  // Handle other input changes similarly for product price and quantity

  const handleSubmit = async () => {
    const billPayload = {
      customer: selectedCustomerId,
      department: selectedDepartmentId,
      item: selectedItemId,
      products: rows.map((row) => ({
        name: row.productName,
        price: row.productPrice,
        saleTaxPercentage: row.salesPercentage,
        incomeTaxPercentage: row.incomeTaxPercentage,
        quantity: row.quantity,
      })),
      totalSaleTax: getAllTotals.totalSaleTax,
      totalIncomeTax: getAllTotals.totalIncomeTax,
      total: getAllTotals.grandTotal,
    };
    try {
      dispatch(updateBill({ id, billPayload }));
      console.log("Bill submitted successfully");
      toast.success("Bill submitted successfully");
    } catch (error) {
      console.error("Error submitting bill:", error);
      toast.error("Failed to submit bill");
    }
  };

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
                  <input
                    type="number"
                    id="inp"
                    value={billNumber}
                    placeholder="&nbsp;"
                  />
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
                    id="productSelect"
                    onChange={(e) => handleSelectProduct(index, e.target.value)}
                    value={row.productId || ""}
                  >
                    <option value="">{row.productName}</option>
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
                <button className="btn_bil d-block" onClick={handleSubmit}>
                  Submit Bill
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FullBill;
