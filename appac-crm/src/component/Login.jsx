import React, { useState, useEffect } from 'react';

function Login({ isVisible, onLogin }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const hours = currentTime.getHours();
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();

  // Conditional styling based on visibility
  const loginStyle = {
    display: isVisible ? 'block' : 'none',
    zIndex: isVisible ? '100' : '0',  // Set z-index to 100 when visible, 0 when hidden
  };

  return (
    <div className='loginPage' style={loginStyle}>
      <div className="login-div">
        <p className='currentTime'>{`${hours} : ${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec}`}</p>
        <p className='currentday'>Saturday August 31 2024</p>
        <img src='https://appacmedia.com/images/appac-logo-new.svg' alt="Logo"/>
        <p className='wel-hed'>WELCOME TO NEW BETA VERSION</p>

        <input 
          type='text' 
          aria-required 
          placeholder='Username' 
          id="username"
          required
        /><br />

        <input 
          type='password' 
          placeholder='Password' 
          id="password"
          required
        />

        <p className='for-pass'>
          <a href='#'>Forgot Password?</a>
        </p>

        <button 
          className='loginbutton' 
          onClick={onLogin}  // Trigger the function passed from the Main component
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
