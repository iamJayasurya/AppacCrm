import React from 'react'
import {Link} from 'react-router-dom'
function taskmanagment() {
  return (
    <div className='sub-pages'>
    <div className="my-appac-hed">
      <div className="myappc-title">
        <p>Task Managment</p>
      </div>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/dashboard">
              Dashboard 
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20">
                <path fill="#818798" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"/>
              </svg>
            </Link>
          </li>
          <li className='present-page'>Task Managment</li>
        </ul>
      </div>
    </div>
    <div className="works-table-wrp">
      <div className="w-table-hed">
         <p>View Works</p>
      </div>
      <div className="w-table-cwrp">
         <div className="serach-box">
          <div className="twrap">
         <select  className="total-box" name="recors" id="records">
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
            <th>Sno.</th>
            <th>Company Name</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>Due Date & Time</th>
            <th>Work Status</th>
            <th>Assigned By</th>
            <th >Action</th>
            </tr>
            <tr className="odd">
               <td>1</td>
               <td>Mobiphysio</td>
               <td>Abinaya
               <br/>Ramprasath</td>
               <td>Ramya</td>
               <td>20-01-2024</td>
               <td>10-02-2024</td>
               <td>Work Over Due for 185 Days</td>
               <td>Company</td>
               <td>Company</td>
            </tr>
          </table>
          <div className="serach-box">
            <div><p>Showing 1 to 1 of 1 entries</p></div>
            <div className='paginaton-wrp'>
                    <div className='pg-arr'><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5"/></svg></div>
                      <div ><a href="pg1" className="pg-nav active">1</a></div>
                      <div ><a href="pg2" className="pg-nav">2</a></div>
                      <div ><a href="pg3" className="pg-nav">3</a></div>
                    <div className='pg-arr'><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 17l5-5l-5-5"/></svg></div>
                  </div>
              </div>
    </div>
               </div>
            </div>
      </div>
  )
}

export default taskmanagment