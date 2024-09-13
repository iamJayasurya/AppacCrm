import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Login({ isVisible }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [user, setUserdata] = useState({
    username: "",
    password: ""
  });
  const empid = user.username;
  const password = user.password;
  
  // Initialize useNavigate
  const navigate = useNavigate();

  const onLogin = () => {
    fetch('http://localhost:8000/testapi/v1/login', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        empid,
        password,
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(empid);
      if (data && data.success) {
        // Check if the user's empid matches and the password is correct
        if (data.empid === empid && data.password === password) {
          alert('User is present, login successful');
          // Redirect to homepage or another URL
          navigate('/');  // Change the URL to "/"
        } else {
          alert('Invalid credentials');
        }
      } else {
        alert('User not found or incorrect credentials');
      }
    })
    .catch(error => {
      console.error(`Error fetching data: ${error}`);
    });
  };

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

  const onInputchange = (event) => {
    const { name, value, type, checked } = event.target;
    setUserdata((prevstate) => ({
      ...prevstate,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const loginStyle = {
    display: isVisible ? 'block' : 'none',
    zIndex: isVisible ? 100 : 0,
  };

  const currentDay = currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className='loginPage' style={loginStyle}>
      <div className="login-div">
        <p className='currentTime'>{`${hours} : ${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec}`}</p>
        <p className='currentday'>{currentDay}</p>
        <img src='https://appacmedia.com/images/appac-logo-new.svg' alt="Logo" />
        <p className='wel-hed'>WELCOME TO NEW BETA VERSION</p>

        <input 
          type='text' 
          name='username'
          value={user.username}
          aria-required 
          placeholder='Username' 
          id="username"
          onChange={onInputchange}  // Corrected to onChange event
          required
        /><br />

        <input 
          type='password' 
          name="password"
          value={user.password}
          placeholder='Password' 
          id="password"
          onChange={onInputchange}  // Corrected to onChange event
          required
        />

        <p className='for-pass'>
          <button>Forgot Password?</button>
        </p>

        <button
          className='loginbutton' 
          onClick={onLogin}  // Trigger the login function
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
