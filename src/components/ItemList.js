import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ItemList = ({ items, dummyData }) => {
  const {loggedInUser} = useContext(UserContext);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div className="flex">
            <div
              className="p-2 m-2 border-gray-500 text-left border-b-2 w-9/12"
            >
              <div className="py-4 font-bold">
                <span>{item.card.info.name}: </span>
                <span>₹{item.card.info.price / 100}</span>
              </div>

              <span className="text-stone-600">
                {item.card.info.description}
              </span>
              <div><span>{loggedInUser}</span></div>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button className="bg-white text-green-600 w-20 rounded-lg">
                  Add
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId}></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
