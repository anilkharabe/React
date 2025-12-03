import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {

  let [btnNameReact, setBtnNameReact] = useState('Login');


  // 1. useEffect will called after component render
  // 2. if no dependecy array  => useEffect will called after every render
  // 3. if dependecy array is empty ([]) => useEffect will called only once
  // 4. if dependecy array is not empty and it has state variable as dependency then => useEffect will called after the state variable chages

  useEffect(()=>{
  },[btnNameReact])

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-red-100">
      <div className="logoContainer">
        <img
          className="w-36"
          src={ LOGO_URL }
        ></img>
      </div>
      <div>
        <ul className="flex items-center h-[100%]">
          <li className="p-2.5 m-2.5"> <Link to="/">Home</Link> </li>
          <li className="p-2.5 m-2.5"> <Link to="/about">About Us</Link> </li>
          <li className="p-2.5 m-2.5"> <Link to='/contact'>Contact Us</Link></li>
          <li className="p-2.5 m-2.5"> <Link to='/grocery'>Grocery</Link></li>
          <li className="p-2.5 m-2.5"> <Link to="/poc">POC</Link> </li>
          <li className="p-2.5 m-2.5">Cart</li>
          <li className="p-2.5 m-2.5">{loggedInUser}</li>
          <button className="bg-red-300 p-1.5 m-4 rounded-lg" onClick={()=>{
            // btnNameReact = 'Logout';
            btnNameReact === 'Logout' ? setBtnNameReact('Login') : setBtnNameReact('Logout');
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;