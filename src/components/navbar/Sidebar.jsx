import React, { useState } from 'react';
import logo from '../../assets/unnamed-removebg-preview.png'
import { FaHistory } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FcDepartment } from "react-icons/fc";
import { HiTemplate } from "react-icons/hi";
import { TbReportSearch } from "react-icons/tb";
import { MdOutlinePassword } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import "./Sidebar.css"
import { LinkContainer } from 'react-router-bootstrap';

const Sidebar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };
  const handleSignOut = () => {
    localStorage.removeItem('user'); // This will remove the user from local storage
    navigate('/login'); // This will navigate the user to the login screen
  };

  return (
    <div className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
      <header className='mb-4'>
        <div className="image-text">
          {/* <span className="image">
            <img src="https://t4.ftcdn.net/jpg/04/06/91/91/240_F_406919147_D3WsGjwXj1qmFNrei2ZFvBWwiueRcFmg.jpg" alt="logo" />
          </span> */}
          <div className="text header-text">
                <img src={logo} width={150} alt="" />
          </div>
        </div>
        <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
      </header>
          <hr />
      <div className="menu-bar">
        <div className="menu">
        <ul class="menu-links">
        <LinkContainer to="bill">
            <li class="nav-link">
        
              <RiBillLine className='icons'/>
                <span class="text nav-text">Bill</span>
               
            </li>
            </LinkContainer>
            <LinkContainer to='/billhistory'>
            <li class="nav-link">
            
              <FaHistory className='icons'/>
                <span class="text nav-text">Bill History</span>
            
            </li>
            </LinkContainer>
            <LinkContainer to={'/invoice'}>    
                    <li class="nav-link">
            
              <TbFileInvoice className="icons"/>
                <span class="text nav-text">Invoice</span>
            
            </li>
            </LinkContainer>
           <LinkContainer to={"/invoicehistory"}>
           <li class="nav-link">
             
              <FaHistory className='icons'/>
                <span class="text nav-text">Invoice History</span>
             
            </li>
           </LinkContainer>
           <LinkContainer to={"/customer"}>
            <li class="nav-link">
             
                <RiCustomerService2Fill className='icons'/>
                <span class="text nav-text">Customers</span>
            
            </li>
            </LinkContainer>
            <LinkContainer to={"/addproduct"}>
            <li class="nav-link">
            
              <MdOutlineProductionQuantityLimits className='icons'/>
                <span class="text nav-text">Product</span>
             
            </li>
            </LinkContainer>
            <LinkContainer to={"/department"}>
            <li class="nav-link">
              <a href="#">
              <FcDepartment className='icons'/>
                <span class="text nav-text">Department</span>
              </a>
            </li>
            </LinkContainer>
            <LinkContainer to={"/itemhead"}>
            <li class="nav-link">
           
              <HiTemplate className='icons'/>
                <span class="text nav-text">Item Head</span>
            
            </li>
            </LinkContainer>
            <LinkContainer to={"/taxreport"}>
            <li class="nav-link">
              
              <TbReportSearch className='icons'/>
                <span class="text nav-text">Tex Report</span>
             
            </li>
            </LinkContainer>
            <li class="nav-link">
              <a href="#">
              <MdOutlinePassword className='icons'/>
                <span class="text nav-text">Change Password</span>
              </a>
            </li>
            <li className="nav-link" onClick={handleSignOut}> 
          {/* onClick=handle log out */}

            <a href="#">
              <IoMdLogOut className='icons' />
              <span className="text nav-text">Log Out</span>
            </a>
          </li>
          </ul>
        </div>

     
      </div>
    </div>
  );
};

export default Sidebar;
