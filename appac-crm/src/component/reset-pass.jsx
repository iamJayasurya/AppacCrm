import React from 'react'

function resetpass() {
  return (
    <div className='loginPage'>
    <div className="login-div">
        <img src='https://appacmedia.com/images/appac-logo-new.svg'/>
        <input type='text' ></input><br></br>
        <input type='text' id="password"></input>
        <p className='for-pass'><a>Login ?</a></p>
        <button className='loginbutton' id="resetpass">Get Password</button>
    </div>
</div>
  )
}

export default resetpass