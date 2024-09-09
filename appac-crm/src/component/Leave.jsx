import React from 'react'
import {Link} from 'react-router-dom'

function Leave() {
  return (
    <div class="profiled sub-pages">
    <div className="my-appac-hed">
      <div className="myappc-title">
        <p>Leave</p>
      </div>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/myappac">
              Report
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20">
                <path fill="#818798" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/>
              </svg>
            </Link>
          </li>
          <li className='present-page'>Leave</li>
        </ul>
      </div>
    </div>
   
    <div className="leave-apply">
        <h2>Leave Status</h2>
        <div className='leave-wrp'>
          <div className="leave-details"><p>Total Leaves</p><p id="total-leave" className='leave-num'>13</p></div>
          <div className="leave-details"><p>Sick Leaves</p><p id="sick-leaves" className='leave-num'>6</p></div>
          <div className="leave-details"><p>Casual Leaves</p><p id="casual-leaves" className='leave-num'>6</p></div>
          <div className="leave-details"><p>Leave Taken</p><p id="leave-taken" className='leave-num'>5</p></div>
          <div className="leave-details"><p>Leaves Remaining</p><p id="leave-remaining" className='leave-num'>7</p></div>
        </div>
        <div className="w-table-cwrp">
         <div className="serach-box">
          <div className="twrap">
         <select className="total-box" name="recors" id="records">
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="All">All</option>
          </select>
          <label for="cars">records per page</label>
         </div>
         <search>
            <form>
              <label>Search :</label>
            <input className="search-box" name="fsrch" id="fsrch" placeholder=" "/>
            </form>
          </search>
         </div>
         <div className="works-table">
         <table>
            <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Apply Date</th>
            <th>Leave From</th>
            <th>Leave Till</th>
            <th>Type</th>
            <th>Authorized By </th>
            <th>Authorized On</th>
            <th>Status</th>
            </tr>
            <tr className="odd">
               <td>AM83</td>
               <td>Mobiphysio</td>
               <td>09-02-2024</td>
               <td>10-02-2024</td>
               <td>20-01-2024</td>
               <td>Casual</td>
               <td>Company </td>
               <td>Company</td>
               <td>Approved</td>
            </tr>
          </table>
          <div className="serach-box">
            <div><p>Showing 1 to 1 of 1 entries</p></div>
            <div className='paginaton-wrp'>
                    <div className='pg-arr'><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5"/></svg></div>
                      <div ><a className="pg-nav active">1</a></div>
                      <div ><a className="pg-nav">2</a></div>
                      <div ><a className="pg-nav">3</a></div>
                    <div className='pg-arr'><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 17l5-5l-5-5"/></svg></div>
                  </div>
             </div>
    </div>
               </div>
            </div>
            <div className="leave-apply">
        <h2>Leave Application</h2>
        <div className="leav-app-div">
            <div className='key-val'><p className='title'>Employee Name</p> <p id='empname' name="employee">Employee</p></div>
            <div className='key-val'><p  className='title'>Date of Apply</p> <p id='currentdate'  name="dateofapplication" >Current Date</p></div>
            <div className='key-val'>
                <p  className='title'>Leave Type</p>
                 <div id='leavetype' className='leaveType'>
                    <div className="in-wrp"><input type="radio" name="leavetype" id="Casual" /><label htmlFor="Casual">Casual</label></div>
                    <div className="in-wrp"><input type="radio" name="leavetype" id="Sick" /><label htmlFor="Sick">Sick</label></div>
                    <div className="in-wrp"><input type="radio" name="leavetype" id="Permission" /><label htmlFor="Permission">Permission</label></div>
                    <div className="in-wrp"><input type="radio" name="leavetype" id="Compensate" /><label htmlFor="Compensate">Compensate</label></div>
                    <div className="in-wrp"><input type="radio" name="leavetype" id="WFH" /><label htmlFor="WFH">WFH</label></div>
                    <div className="in-wrp"><input type="radio" name="leavetype" id="Half Day" /><label htmlFor="Half Day">Half Day</label></div>
                    <div className="in-wrp"><input type="radio" name="leavetype" id="Unpaid" /><label htmlFor="Unpaid">Unpaid</label></div>
                 </div>
            </div>
            <div className='key-val'><p  className='title'>Leave From</p> <p id='fromdate'><input className='in-box' type="date" id="txtDate11" name="leavedate"  /></p></div>
            <div className='key-val'><p  className='title'>Leave Till</p> <p id='tilldate'><input  className='in-box' type="date" id="txtDate211" name="leavedatetill" /></p></div>
            <div className='key-val reason'><p  className='title'>Reason</p> <p id='reason'><textarea type="text" name="" id="" /></p></div>

        </div>
        <div className='leave-bt-wrp'>
        <button type='submit' name="leaveapply"  value="Apply Leave" className='submit'>Submit</button>
        <button type='clear' className='clear'>Clear</button>
    </div>
    </div>
    </div>
  )
}

export default Leave