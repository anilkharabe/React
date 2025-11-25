import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import resDetails from "../utils/resDetails";

const RestaruntDetails = () => {
  const { resId, resName } = useParams();
  const [resInfo, setResInfo] = useState(resDetails);

  const {name, avgRating, totalRatings, cuisines, areaName} = resInfo.data.cards[2].card.card.info;
  const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  useEffect(() => {
    // fetchData(); // not working as expected , try it later
  }, []);
  console.log('rendering', resInfo)

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );

      const data = await res.json();

      setResInfo(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };


  return (
    <div>
      <h1> {name}</h1>
      <h4> {avgRating}{"   ("+ totalRatings+"+ratings"+")"}</h4>
      <h4> {cuisines.join(', ')}</h4>
      <h4> {areaName}</h4>
      
      <div>
        <h1>Menu</h1>
        <ul>
          {itemCards.map((menu)=>{
            return <li key={menu.card.info.id}>{menu.card.info.name} for ₹{menu.card.info.price/100}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(RestaruntDetails);

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER
