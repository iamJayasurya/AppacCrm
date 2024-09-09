import React  ,{useState}from 'react';
function Header({onBurger}) {
  let selectedOption=null;
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const [none, setdisplay] = useState(false);
  const menuFunction = () => {

    if (!selectedOption) {
      console.log('if statement in handle');
      setdisplay(!none);
      onBurger(!none)
    } else {
      console.log('else statement in handle');
      setdisplay(false);
      onBurger(none)
    }
  };


  
  const handleDropdownClick = () => {
    // Toggle the visibility of the dropdown if no option is selected
    if (!selectedOption) {
      console.log('if statement in handle');
      setIsDropdownVisible(!isDropdownVisible);
    } else {
      console.log('else statement in handle');
      // If an option was selected, reset the selection and close the dropdown
      // setSelectedOption(null);
      setIsDropdownVisible(false);
    }
  };
  const handleMenuClick = () => {
    // Toggle the visibility of the dropdown if no option is selected
    if (!selectedOption) {
      console.log('if statement in handle');
      setIsMenuVisible(!isMenuVisible);
    } else {
      console.log('else statement in handle');
      // If an option was selected, reset the selection and close the dropdown
      // setSelectedOption(null);
      setIsMenuVisible(false);
    }
  };
  // const handleOptionClick = (option) => {
  //   console.log('if statement in option');
  //   // Set the selected option and close the dropdown
  //   setSelectedOption(option);
  //   setIsDropdownVisible(false);
  // }
    return (
      
       <section className="header-sec">
          <div className='container-fluid'>
             <div className={`nav-bar  ${none ? 'w10' : ''}`}>
                <div className="logo-menu ">
                  <div className={`logoDivlg logoDiv   ${none ? 'none' : 'block'}`}>
                    <a href="#"><img src='https://appacmedia.com/images/appac-logo-new.svg'/></a>
                    </div>
                  <div className={`logoDivsm  ${none ? 'block' : 'none'}`}>
                    <a href="#"><img src='https://appacmedia.com/images/favicon.png'/></a>
                  </div>
                  <div className="side-menu">
                    <button onClick={menuFunction}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="none" stroke="#818798" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" d="M3 6.001h18m-18 6h18m-18 6h18"/></svg></button>
                  </div>
                </div>
                <div className="user-info">
                  <a href="" className='max-screen'><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="#818798" d="M4 20v-5h1v3.292l3.6-3.6l.708.708l-3.6 3.6H9v1zm11 0v-1h3.292l-3.6-3.6l.708-.708l3.6 3.6V15h1v5zM8.6 9.308L5 5.708V9H4V4h5v1H5.708l3.6 3.6zm6.8 0l-.708-.708l3.6-3.6H15V4h5v5h-1V5.708z"/></svg></a>
                  <div className='option-wrp'><button   className='optionMenu' onClick={handleMenuClick}><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="none" stroke="#818798" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" d="M13.5 15.5c0-.943 0-1.414.293-1.707s.764-.293 1.707-.293H20c.943 0 1.414 0 1.707.293S22 14.557 22 15.5V20c0 .943 0 1.414-.293 1.707S20.943 22 20 22h-4.5c-.943 0-1.414 0-1.707-.293S13.5 20.943 13.5 20zM2 4c0-.943 0-1.414.293-1.707S3.057 2 4 2h4.5c.943 0 1.414 0 1.707.293S10.5 3.057 10.5 4v4.5c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293H4c-.943 0-1.414 0-1.707-.293S2 9.443 2 8.5zm0 11.5c0-.943 0-1.414.293-1.707S3.057 13.5 4 13.5h4.5c.943 0 1.414 0 1.707.293s.293.764.293 1.707V20c0 .943 0 1.414-.293 1.707S9.443 22 8.5 22H4c-.943 0-1.414 0-1.707-.293S2 20.943 2 20zM13.5 4c0-.943 0-1.414.293-1.707S14.557 2 15.5 2H20c.943 0 1.414 0 1.707.293S22 3.057 22 4v4.5c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-4.5c-.943 0-1.414 0-1.707-.293S13.5 9.443 13.5 8.5z" color="#818798"/>
                  </svg>      </button>
                  <div className={`option-div ${isMenuVisible ? 'active' : ''}`}>
                    <div className="option">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                      <p>Task</p>
                    </div>
                    <div className="option">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      <p>Clients</p>
                    </div>
                    <div className="option">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 35 35"><path fill="currentColor" d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23a3 3 0 0 1 2.761-3.221Q5.88 3 6 3h5.27a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.36 9.36 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3ZM6 5a1 1 0 0 0-1.003.997q0 .042.003.083C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.058-.938L27 26v-5.28l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5Z"></path><path fill="currentColor" d="M27 13v-2h-4.586L29 4.414L27.586 3L21 9.586V5h-2v8h8z"></path></svg>
                    <p>Leads</p>
                    </div>
                    <div className="option">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26 26"><path fill="currentColor" d="M4 0v19c0 .555-.445 1-1 1c-.555 0-1-.445-1-1V7h1V5H0v14c0 1.645 1.355 3 3 3h10c-.2-.6-.313-1.3-.313-2H5.814c.114-.316.187-.647.187-1V2h16v11c.7.2 1.4.5 2 1V0H4zm4 4v4h12V4H8zm0 6v2h5v-2H8zm7 0v2h5v-2h-5zm-7 3v2h5v-2H8zm12 1c-3.324 0-6 2.676-6 6s2.676 6 6 6v-2c-2.276 0-4-1.724-4-4s1.724-4 4-4s4 1.724 4 4c0 .868-.247 1.67-.688 2.313L22 21l-.5 4.5L26 25l-1.25-1.25C25.581 22.706 26 21.377 26 20c0-3.324-2.676-6-6-6zM8 16v2h5v-2H8z"></path></svg>
                     <p>Renewals</p>
                    </div>
                    <div className="option">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M16.84 2.73c-.39 0-.77.15-1.07.44l-2.12 2.12l5.3 5.31l2.12-2.1c.6-.61.6-1.56 0-2.14L17.9 3.17c-.3-.29-.68-.44-1.06-.44M12.94 6l-8.1 8.11l2.56.28l.18 2.29l2.28.17l.29 2.56l8.1-8.11m-14 3.74L2.5 21.73l6.7-1.79l-.24-2.16l-2.31-.17l-.18-2.32"></path></svg>
                    <p>Enquiry</p>
                    </div>
                    <div className="option">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 8a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4a3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2a1.91 1.91 0 0 1-2-2a1.91 1.91 0 0 1 2-2a1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></path></svg>
                    <p>Users</p>
                    </div>
                    </div>
               
                 </div>
                 <div className="profileMenu">
                  <button className=''  onClick={handleDropdownClick} ><div className='profileDiv'><div className='profileImage'><p id="initial">J</p></div><p id="name">Profile</p> <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24"><path fill="none" stroke="#818798" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" d="m7 10l5 5l5-5"/></svg></div>
                  {selectedOption ? `Selected: ${selectedOption}` : ''}  </button>
                  <div  className={`profile-option ${isDropdownVisible ? 'active' : ''}`}>
                    <ul className='profile-ul'>
                      <li  className='title'>Welcome</li>
                      <li className='p-menu'><a>My Account</a></li>
                      <li  className='p-menu'><a>Settings</a></li>
                      <li  className='p-menu'><a>Lock Screen</a></li>
                      <li className='log-out-li'><a>Log Out</a></li>
                    </ul>
                  </div>
                
                  </div>
                </div>
             </div>
            
          </div>
       </section>
      
    );
  }

export default Header;
