import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Bill from './pages/bill/Bill';
import BillHistory from './pages/billhistory/BillHistory';
import Invoice from './pages/invoice/Invoice';
import InvoiceHistory from './pages/invoicehistory/InvoiceHistory';
import Customer from './pages/customer/Customer';
import AddProduct from './pages/addproduct/AddProduct';
import Department from './pages/department/Department';
import ItemHead from './pages/itemhead/ItemHead';
import Login from './components/login/Login';
import TaxReport from './pages/taxreport/TaxReport';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';
import FullBill from './pages/billhistory/FullBill';

function App() {
  

  return (
    <BrowserRouter>
    <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    <Navbar />
      <Routes>
      <Route path="/" element={
          // <ProtectedRoute>
            <Home />
          // </ProtectedRoute>
        } />
        <Route path="bill" element={<Bill />} />
        <Route path="billhistory" element={<BillHistory />} />
        <Route path="billhistory/:id" element={<FullBill />} />

        <Route path="invoice" element={<Invoice />} />
        <Route path="invoicehistory" element={<InvoiceHistory />} />
        <Route path="customer" element={<Customer />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="department" element={<Department />} />
        <Route path="itemhead" element={<ItemHead />} />
        <Route path="taxreport" element={<TaxReport />} />
        {/* <Route path="login" element={<Navigate to="/" />} />  */}
         <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
