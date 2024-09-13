import React from 'react';
import  '../css/style.css'
import  '../css/sub-style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import Dash from "./dashbord";
import Login from "./Login";

import Myappac from "./my-appac";
import Workorder from './workOrder';
import TaskManagement from './task-managment';
import Totaltask from './total-task';
import Todaytask from './todaytask';
import Pending from './pendingtask';
import CompletedTask from './Completedtask';
import Profile from './profile'
import Leave from './Leave'
import Leavelist from './leaveList'
import DailyReport from './DailyReport'
import BirthDay from './birthDay'
import Feedback from './feedBack'
import Resignation from './ResiGnation'


function SideMenu({active}) {
 // Empty dependency array so this runs once on mount
  
  return (
   <BrowserRouter >
   <div className={`body ${!active ? 'active' : ''}` }>
    <div className='side-menu-div pos-stic'>
      <div className="left-side-menu">
        <div id="sidebar-menu" className="show">
      
          <ul id="side-menu">
            <li className="menu-title">NAVIGATION</li>
            <li>
              <Link to="/" 
                className={'dashboard'}  
              
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay">
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                  <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
                <span> Dashboards </span>
              </Link>
            </li>
            <li className="menu-title mt-2">USER</li>
            <li>
                <Link to="/myappac" 
                
                className={'myappac' } 
               
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span> Report </span>
              </Link>
            </li>
          </ul>
          </div>
      </div>
      </div>
      <div>
          <Routes>
          <Route path="/login" element={<Login/>} ></Route>
        <Route path="/" element={<Dash/>} ></Route>
        <Route path="/myappac" element={<Myappac/>} >   </Route>
        <Route path="/workorder" element={<Workorder/>} ></Route>
        <Route path="/taskmangement" element={<TaskManagement/>} ></Route>
        <Route path="/totaltask" element={<Totaltask/>} ></Route>
        <Route path="/todaytask" element={<Todaytask/>} ></Route>
        <Route path="/pending" element={<Pending/>} ></Route>
        <Route path="/profile" element={<Profile/>} ></Route>
        <Route path="/leave" element={<Leave/>} ></Route>
        <Route path="/leavelist" element={<Leavelist/>} ></Route>
        <Route path="/dailyReport" element={<DailyReport/>} ></Route>
        <Route path="/birthDay" element={<BirthDay/>} ></Route>
        <Route path="/completedtask" element={<CompletedTask/>} ></Route>
        <Route path="/feedback" element={<Feedback/>} ></Route>
        <Route path="/resignation" element={<Resignation/>} ></Route>

      </Routes>
      </div>
      </div>
     
      </BrowserRouter>
    
  );
}

export default SideMenu;