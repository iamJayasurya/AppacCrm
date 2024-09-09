import React from 'react'
import j from '../assests/images/j.png';
import {Link} from 'react-router-dom';
function profile() {

  return (
   <div class="profiled sub-pages">
    <div className="my-appac-hed">
      <div className="myappc-title">
        <p>Profile</p>
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
          <li className='present-page'>Profile</li>
        </ul>
      </div>
    </div>
    <div className="user-wrap">
        <div className="user-details">
            <div className="use-info">
                <div className="user-profile">
                    <img className='profile-img' src={j}></img>
                    <h2>Jayasurya</h2>
                    <p className='m0'>@jr Front End Developer</p>
                    <p>Development</p>
                </div>
                <div className="user-details">
                  <ul className='us-lis'>
                    <li className='ul-hed'>ABOUT ME</li>
                    <li>Employee ID : <b>AM083</b></li>
                    <li>Mobile : <b>6385460252</b></li>
                    <li>DOB : <b>16-03-2003</b></li>
                    <li>Personal / Office Email :<br></br><b>j.jayasurya127@gmail.com / surya.appac@gmail.com</b></li>
                    <li>Location : <b>, , ,</b></li>
                  </ul>
                </div>


            </div>
            <div className="use-info">
            <ul className='us-lis'>
                    <li className='ul-hed'>Emergency details</li>
                    <li>Emergency Contact No : <b>9842681252</b></li>
                    <li>Emergency Contact Person : <b>JayaSekar</b></li>
                    <li>Blood Group : <b>O+ve</b></li>
                    <li>Medical conditions or allergies : <b>NIL</b></li>
                  </ul>
            </div>
            <div className="use-info">
            <ul className='us-lis'>
                    <li className='ul-hed'>Other details</li>
                    <li>Employment Type : <b>Permanent</b></li>
                    <li>Joining Date : <b>01-03-2024</b></li>
                    <li>Current Salary : <b>/Per annum</b></li>
                    <li> Performance Reviews and Appraisals Date : <b>01-03-2024</b></li>
                    <li>Next Appraisal Date : <b>01-09-2024</b></li>
                  </ul>
            </div>
        </div>  
        <div className="user-doc">
          <div className="tab-sec">
            <a href="#1" className='tab-menu active' >Bank Details</a>
           <a href="#2" className='tab-menu'>Documents</a>
           <a href="#3" className='tab-menu'>Settings</a>
          </div>
          <div class="tab-content-wrp">
            <div className='tab-content active'  id="1">
                <h2 className="tab-hed">Bank Details</h2>
               <div className="tab-con  first-1"><p>#</p><p>Details</p><p><input type="text" /></p></div>
                 <div className="tab-con"><p>1</p><p>Bank Name</p><p><input type="text"  placeholder='Enter Your Details' /></p></div>
                 <div className="tab-con"><p>2</p><p>Account Number</p><p><input type="text" placeholder='Enter Your Details'/></p></div>
                 <div className="tab-con"><p>3</p><p>IFSC</p><p><input type="text"  placeholder='Enter Your Details'/></p></div>
                 <div className="tab-con"><p>4</p><p>PAN Number</p><p><input type="text"  placeholder='Enter Your Details' /></p></div>
            </div>

            <div className='tab-content'  id="2">
            <h2 className="tab-hed"></h2>
              <div className="tab-con first-1"><p>#</p><p>Documents</p><p><input type="text" /></p></div>
              <div className='dflex'>
                <div>
                  <label>Profile Photo *</label>
                  <input type="file" />
                  <small>File size below 1MB</small>
                </div>

                <div>
                  <button>Save Profile</button>
                </div>  
              </div>
            </div>

            <div className='tab-content'  id="3">
           
            </div>

           {/* <Chart/> */}
          </div>
        </div>
    </div>
    </div>       
  )
}

export default profile