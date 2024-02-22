import React from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,

} from 'cdbreact';


import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import './Sidebar.css';


function Sidebar() {

  return (
    <div
      style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#54abe7" backgroundcolor="#fff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: '#54abe7' }}
          >
            Nayan Association
          </a>
        </CDBSidebarHeader>




        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>

            <Link to="/home" ClassName="activeClicked">
              <CDBSidebarMenuItem
                icon="th-large"
              >
                Home
              </CDBSidebarMenuItem>
            </Link>


            <Menu>
              <SubMenu icon={<HomeOutlinedIcon />} label="CRM">

                <NavLink to="/newfeedbackentry" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Feedback Entry</MenuItem>
                </NavLink>

                <NavLink to="/customeremployeedetails" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Customer Employee Details </MenuItem>
                </NavLink>

                <NavLink to="/salarycalculator" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Salary Calculator </MenuItem>
                </NavLink>

              </SubMenu>
              
            </Menu>

            <NavLink  to="/sales" ClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Sales
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink  to="/purchase" ClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Purchase
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink  to="/store" ClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Store
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink  to="/production" ClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Production
              </CDBSidebarMenuItem>
            </NavLink>



            <NavLink  to="/fault" ClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Fault / Warranty
              </CDBSidebarMenuItem>
            </NavLink>



            <NavLink  to="/accounts" ClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Accounts
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink  to="/authorization" ClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Authorization
              </CDBSidebarMenuItem>
            </NavLink>


            <NavLink  to="/mis" ClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                MIS
              </CDBSidebarMenuItem>
            </NavLink>

            <Menu>
              <SubMenu icon={<HomeOutlinedIcon />} label="Master">

              <NavLink  to="/employee" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}> Employee </MenuItem>
                </NavLink>

                <NavLink  to="/sitemaster" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Site Master</MenuItem>
                </NavLink>

                <NavLink  to="/customermaster" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Customer Master</MenuItem>
                </NavLink>

                <NavLink  to="/suppliermaster" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Supplier Master</MenuItem>
                </NavLink>

                <NavLink  to="/materialmaster" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Material Master</MenuItem>
                </NavLink>

                <NavLink  to="/usermaster" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>User Master</MenuItem>
                </NavLink>

                <NavLink  to="/customertypemaster" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Customer Type Master</MenuItem>
                </NavLink>

                <NavLink  to="/citymaster" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>City Master</MenuItem>
                </NavLink>

                <NavLink  to="/statemaster" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>State Master</MenuItem>
                </NavLink>

              </SubMenu>
            </Menu>


            <Menu>
              <SubMenu icon={<HomeOutlinedIcon />} label="Utility">
              <NavLink  to="/companyinformation" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Company Information</MenuItem>
                </NavLink>

                <NavLink  to="/changepassword" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>Change Password</MenuItem>
                </NavLink>

               <NavLink  to="/newyearcreation" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>New Year Creation</MenuItem>
                </NavLink>

              <NavLink  to="/usersignature" ClassName="activeClicked">
                  <MenuItem icon={<PeopleOutlinedIcon />}>User Signature</MenuItem>
                </NavLink>
              </SubMenu>
            </Menu>



          </CDBSidebarMenu >
        </CDBSidebarContent >

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Nayan Association
          </div>
        </CDBSidebarFooter>
      </CDBSidebar >
    </div >
  );
};

export default Sidebar;
