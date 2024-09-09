import React, { useState } from 'react';
import {Link} from 'react-router-dom'






const MyAppac = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleContentClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className='myappac-div'>
    <div className='dashboard-wrp'>
      {!selectedContent && (
        <>
           <div className="my-appac-content">
        <div className="myappac-content-div" id="profile">
        <div className="icon-d">
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24">
            <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
          </svg>
        </div>
        <p>Personal Profile</p>
        <Link to="/profile"  className='stretched-link'></Link>
      </div>
    


      <div className="myappac-content-div" id='bank'>
        <div className="icon-d">
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
            <path fill="none" stroke="white" d="M21.5 9v10M5.5 9v10m-3-10v10m16-10v10M2 21h20M0 23.5h24M12 11h-1a1 1 0 0 0-1 1v.375a1 1 0 0 0 .72.96l2.56.747a1 1 0 0 1 .72.96V16a1 1 0 0 1-1 1h-1m0-6h1a1 1 0 0 1 1 1v.5M12 11V9m0 8h-1a1 1 0 0 1-1-1v-.5m2 1.5v2M23.5 6.25V7H.5v-.75C5.5 4.5 8.5 3 11.75.5h.5C15.5 3 18.5 4.5 23.5 6.25Z" />
          </svg>
        </div>
        <p>Bank Details</p>
        <a href="#" className='stretched-link'></a>
      </div>
    


      <div className="myappac-content-div" id='leave'>
        <div className="icon-d"></div>
        <p>Leave application</p>
        <Link to="/leave"   className='stretched-link'></Link>
      </div>

      <div className="myappac-content-div" id='holiday'>
        <div className="icon-d"></div>
        <p>View holiday List</p>
        <Link to="/leaveList"   className='stretched-link'></Link>
      </div>

      <div className="myappac-content-div" id='report'>
        <div className="icon-d"></div>
        <p>Daily Report</p>
        <Link to="/dailyReport"  className='stretched-link'></Link>
      </div>

      <div className="myappac-content-div" id='birthday'>
        <div className="icon-d"></div>
        <p>Birthday & Anniversary</p>
        <Link to="/birthDay"  className='stretched-link'></Link>
      </div>

      <div className="myappac-content-div" id='feedback'>
        <div className="icon-d"></div>
        <p>Feedback</p>
        <Link to="/feedBack"  className='stretched-link'></Link>
      </div>

      <div className="myappac-content-div" id='resignation'>
        <div className="icon-d"></div>
        <p>Resignation</p>
        <Link to="/resignation" className='stretched-link'></Link>
      </div>
      </div>
      </>
      
    )}
     
      {/* {selectedContent === 'profile' && <Profile />}
      {selectedContent === 'leaveapplication' && <Leave />}
      {selectedContent === 'leavelist' && <Leavelist />}
      {selectedContent === 'dailyreport' && <DailyReport />}
      {selectedContent === 'birthday' && <BirthDay />}
      {selectedContent === 'feedback' && <Feedback/>}
      {selectedContent === 'resignation' && <Resignation/>} */}



      
      
    </div>
  </div>
  );
};

export default MyAppac;
