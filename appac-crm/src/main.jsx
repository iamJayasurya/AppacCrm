import React, { useState } from 'react';
import Header from './component/header';
import SideMenu from './component/sidemenu';
import Login from './component/Login';  // Import the Login component

function Main() {
  const [isLoginVisible, setLoginVisible] = useState(true);
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
  function handleLogin() {
    // Hide the Login component
    setLoginVisible(false);

    // Optionally, you can redirect to the dashboard after hiding the component
      // Replace with your dashboard route
  }

  return (
    <div>
      <Header  onBurger={setClassActive} />
      <SideMenu active={active} />
      
      {/* Conditionally render the Login component or apply styles */}
      <Login isVisible={isLoginVisible} onLogin={handleLogin} />
    </div>
  );
}

export default Main;
