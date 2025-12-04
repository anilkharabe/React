import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();


  const handleClearCart=()=>{
    dispatch(clearCart())
  }

  return (
    <div className="text-center m-4 p-4">
      <div className="text-2xl font-black">Cart</div>
      <div className="w-6/12 m-auto">
      <button  className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>Clear Cart</button>
        <ItemList items={cartItem}></ItemList>
      </div>
    </div>
  );
};

export default Cart;
