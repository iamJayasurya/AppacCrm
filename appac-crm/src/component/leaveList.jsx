import React from 'react'
import {Link} from 'react-router-dom'

function leavelist() {
  return (
    <div class="profiled leave-list sub-pages">
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
    <h2>Calendar</h2>
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
            <tr className='first-1'>
            <th>Sno.</th>
            <th>Date List</th>
            <th>Reason For Holiday</th>
            <th>Description</th>
            </tr>
            <tr className="odd">
              <td>1</td>
              <td>01-01-2024</td>
              <td>New Year's Day</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>2</td>
              <td>15-01-2024</td>
              <td>	Pongal</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>3</td>
              <td>16-01-2024</td>
              <td>Thiruvalluvar Day</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>4</td>
              <td>26-01-2024</td>
              <td>Republic Day</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>5</td>
              <td>01-05-2024</td>
              <td>May Day</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>6</td>
              <td>15-08-2024</td>
              <td>Independence  Day</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>7</td>
              <td>07-09-2024</td>
              <td>Ganesh Chaturthi</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>8</td>
              <td>02-10-2024</td>
              <td>Gandhi Jayanti</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>9</td>
              <td>11-10-2023</td>
              <td>Ayudha Pooja</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>10</td>
              <td>12-10-2024</td>
              <td>Vijaya Dhasami</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>11</td>
              <td>31-10-2024</td>
              <td>Diwali</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>12</td>
              <td>01-11-2024</td>
              <td>Diwali</td>
              <td>holiday</td>
            </tr>
            <tr className="odd">
              <td>13</td>
              <td>25-12-2024</td>
              <td>Christmas Day</td>
              <td>holiday</td>
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
               </div>
  )
}

export default leavelist