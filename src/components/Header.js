import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  let [btnNameReact, setBtnNameReact] = useState('Login');


  // 1. useEffect will called after component render
  // 2. if no dependecy array  => useEffect will called after every render
  // 3. if dependecy array is empty ([]) => useEffect will called only once
  // 4. if dependecy array is not empty and it has state variable as dependency then => useEffect will called after the state variable chages

  useEffect(()=>{
    console.log('useEffect called');
  },[btnNameReact])

  console.log('here is Header components')

  return (
    <div className="header">
      <div className="logoContainer">
        <img
          className="logo"
          src={ LOGO_URL }
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            // btnNameReact = 'Logout';
            btnNameReact === 'Logout' ? setBtnNameReact('Login') : setBtnNameReact('Logout');
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;