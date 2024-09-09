import React from 'react';
import {Link} from 'react-router-dom'

// import Task from './task-managment';
// import Totaltask from './total-task';
// import Todaytask from './todaytask';
// import Pendingtask from './pendingtask';
// import Completed from './Completedtask';

function Dashboard() {
  

  return (

    <div className='myappac-div'>
      <div className='dashboard-wrp'>
 
          <div className="my-appac-content">
            <div className="myappac-content-div" id="work">
              <div className="icon-d">
                <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/></svg>
              </div>
              <p>Work Order</p>
              <Link to="/workorder"  href="#" className='stretched-link'></Link>
            </div>
            <div className="myappac-content-div" id='task'>
              <div className="icon-d">
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path fill="none" stroke="white" d="M21.5 9v10M5.5 9v10m-3-10v10m16-10v10M2 21h20M0 23.5h24M12 11h-1a1 1 0 0 0-1 1v.375a1 1 0 0 0 .72.96l2.56.747a1 1 0 0 1 .72.96V16a1 1 0 0 1-1 1h-1m0-6h1a1 1 0 0 1 1 1v.5M12 11V9m0 8h-1a1 1 0 0 1-1-1v-.5m2 1.5v2M23.5 6.25V7H.5v-.75C5.5 4.5 8.5 3 11.75.5h.5C15.5 3 18.5 4.5 23.5 6.25Z"/></svg>
              </div>
              <p>Task Management</p>
              <Link to="/taskmangement"  className='stretched-link'></Link>
            </div>
          </div>
         

        {/* Conditional Rendering of the Selected Content */}
        {/* {selectedContent === 'workorder' && <Workorder />}
        {selectedContent === 'taskmanagment' && <Task />}
        {selectedContent === 'totaltask' && <Totaltask />}
        {selectedContent === 'todaytask' && <Todaytask />}
        {selectedContent === 'pending' && <Pendingtask />}
        {selectedContent === 'completed' && <Completed />}
        
        {!selectedContent && ( */}
          <>
            <h3 className='dash-hed'>Task Management</h3>
            <div className="my-appac-content">
              <div className="myappac-content-div" id='total-task'>
                <div className="icon-d"></div>
                <p>Total Task</p>
                <Link to="/totaltask"  className='stretched-link'></Link>
              </div>
              <div className="myappac-content-div" id='today-task'>
                <div className="icon-d"></div>
                <p>Today Task</p>
                <Link to="/todaytask"  className='stretched-link'></Link>
              </div>
              <div className="myappac-content-div" id='pending'>
                <div className="icon-d"></div>
                <p>Pending</p>
                <Link to="/pending"  className='stretched-link'></Link>
              </div>
              <div className="myappac-content-div" id='completed'>
                <div className="icon-d"></div>
                <p>Completed Task</p>
                <Link to="/completedtask"  className='stretched-link'></Link>
              </div>
            </div>
          </>
    
      </div>
      </div>
  );
}

export default Dashboard;