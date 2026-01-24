import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const Header = () => {

  // let [btnNameReact, setBtnNameReact] = useState('Login');
  const navigate = useNavigate();

  // 1. useEffect will called after component render
  // 2. if no dependecy array  => useEffect will called after every render
  // 3. if dependecy array is empty ([]) => useEffect will called only once
  // 4. if dependecy array is not empty and it has state variable as dependency then => useEffect will called after the state variable chages

  // useEffect(()=>{
  // },[btnNameReact])

    const dispatch = useDispatch();
   const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [flipCoin, setFlipCoin] = useState('1')
  const {loggedInUser} = useContext(UserContext);
  const cart = useSelector((store)=> store.cart.items);
  const { isAuthenticated, user } = useSelector(store => store.auth);
  const isAdmin = user?.role === "admin";
  
  console.log("cart", cart)

  const flipCoint = () => {
      flipCoin ==='1' ? setFlipCoin('0') : setFlipCoin('1')
  };

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
          <li>
            <button
              onClick={flipCoint}
              className="rounded-lg bg-red-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-600"
            >
              Flip -{flipCoin}
            </button>
          </li>
          {/* {isAuthenticated && !isAdmin && ( // user should should be user */}
            <li><Link to="/">Home</Link></li>
          {/* )} */}
          {isAuthenticated && isAdmin && (
            <li>
              <Link
                to="/admin/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}
          <li className="p-2.5 m-2.5"> <Link to="/about">About Us</Link> </li>
          <li className="p-2.5 m-2.5"> <Link to='/contact'>Contact Us</Link></li>
          <li className="p-2.5 m-2.5"> <Link to='/grocery'>Grocery</Link></li>
          <li className="p-2.5 m-2.5"> <Link to="/poc">POC</Link> </li>
          {/* {isAuthenticated && !isAdmin && ( // user should should be user */}
            <li className="font-bold"> <Link to="/cart">Cart ({cart.length})</Link> </li>
          {/* )} */}

          <li className="p-2.5 m-2.5">Hi  {user? user.name: 'User'}</li>

          {isAuthenticated && isAdmin && (
            <li>
              <Link
                to="/admin/restaurants"
              >
                Manage Restaurants
              </Link>
            </li>
          )}

          {!isAuthenticated ? (
          <li>
            <Link
              to="/login"
              className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              Login
            </Link>
          </li>
        ) : (
          <li>
            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-600"
            >
              Logout
            </button>
          </li>
        )}
        </ul>
      </div>
    </div>
  );
};

export default Header;