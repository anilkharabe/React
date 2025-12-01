import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import resDetails from "../utils/resDetails";
import RestaurantCategory from "./RestaurantCategory";

const RestaruntDetails = () => {
  // const { resId, resName } = useParams();
  const [resInfo, setResInfo] = useState(resDetails);

  const { info } = resInfo.data.cards[2].card.card;

  const [showIndex, setShowIndex] = useState(1);

  const dummyData = 'dummy';

  const category =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) => {
        return (
          c.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // const {name, avgRating, totalRatings, cuisines, areaName} = resInfo.data.cards[2].card.card.info;

  // const {itemCards} = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  useEffect(() => {
    // fetchData(); // not working as expected , try it later
  }, []);

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
    <div className="text-center">
      <h1 className="font-bold text-4xl my-6">{info.name}</h1>
      <h1 className="text-2xl">
        {info.avgRating}({info.totalRatings})
      </h1>
      <h1 className="text-2xl">{info.costForTwoMessage}</h1>
      <h1 className="text-2xl">{info.cuisines.join(", ")}</h1>

      {/** Categories accordian */}

      {category.map((c, index) => {
        return (
          <RestaurantCategory
            key={c.card.card.categoryId}
            data={c.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex = {()=>setShowIndex(index)}
            dummyData ={dummyData}
          />
        );
      })}
    </div>
  );
};

export default React.memo(RestaruntDetails);

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER
