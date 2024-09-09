import React from 'react'
import {Link} from 'react-router-dom'

function birthDay() {
  return (
    <div class="profiled sub-pages">
    <div className="my-appac-hed">
      <div className="myappc-title">
        <p>Birthday</p>
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
          <li className='present-page'>Birthday</li>
        </ul>
      </div>
    </div>
    
    <div className="leave-apply bd-date">
        <p>Sort By</p>
    <div className="sorter">
        <div><button><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="#787878" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.05" d="M7 4v16m10-1V4m-7 3S7.79 4 7 4S4 7 4 7m16 10s-2.21 3-3 3s-3-3-3-3" color="#787878"/></svg>Date</button></div>
        <div><button><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="#787878" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.05" d="M7 4v16m10-1V4m-7 3S7.79 4 7 4S4 7 4 7m16 10s-2.21 3-3 3s-3-3-3-3" color="#787878"/></svg>Designation</button></div>
    </div>
   
    <div className="works-table  bday-table">
         <table>
            <tr className='hedtr' >
            <th>Sno.</th>
            <th>Name</th>
            <th>Department</th>
            <th>Birthday</th>
            </tr>
            <tr className="odd"  >
               <td>1</td>
               <td>Appac</td>
               <td>Development</td>
               <td>01/04/2020</td>
            </tr>
            <tr className="odd">
               <td>1</td>
               <td>Appac</td>
               <td>Development</td>
               <td>01/04/2020</td>
            </tr>
            <tr className="odd">
               <td>1</td>
               <td>Appac</td>
               <td>Development</td>
               <td>01/04/2020</td>
            </tr>
            <tr className="odd" >
               <td>1</td>
               <td>Appac</td>
               <td>Development</td>
               <td>01/04/2020</td>
            </tr>
          </table>
          <div className="upcomming-bday">
            <h4>UPCOMMING</h4>
            <div>
            <h5>01/04/2020</h5>
              <span id="profile-img"></span>
              <h3>Name</h3>
              <p>Designation</p>
            </div>
          </div>
          </div>
    </div>
    </div>
  )
}

export default birthDay