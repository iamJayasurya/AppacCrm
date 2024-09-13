import React, { useState } from 'react';
import Header from './component/header';
import SideMenu from './component/sidemenu';


function Main() {
 
  const [active , setActiveFalse] = useState(true);
   const setClassActive=()=>{
    if (!active) {
      console.log('if statement in handle');
      setActiveFalse(!active);
    
    } else {
      console.log('else statement in handle');
      setActiveFalse(false);
    
    }
  }

  // Function to handle the login button click


  return (
    <div>
      <Header  onBurger={setClassActive} />
      <SideMenu active={active} />
      
      {/* Conditionally render the Login component or apply styles */}
      {/* <Login  /> */}
    </div>
  );
}

export default Main;
