import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummyData }) => {

  // const [showItems, setShowItems] = useState(false)
  
  const handleClick = ()=>{
    setShowIndex()
  }

  return (
    <div className="w-6/12 mx-auto my-10 bg-gray-100 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <div>
          <span className="font-bold text-xl">
            {data.title} ({data.itemCards.length})
          </span>
        </div>
        <div className="mx-7">
          ⬇️
        </div>
      </div>

      {showItems && <ItemList items={data.itemCards} dummyData={dummyData}/>}
    </div>
  );
};

export default RestaurantCategory;
