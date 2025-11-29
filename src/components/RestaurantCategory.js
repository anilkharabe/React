import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      <div className="w-6/12 mx-auto my-10 bg-gray-100 shadow-lg p-4">
        <span className="font-bold text-xl">
          {data.title} ({data.itemCards.length})
        </span>
      <ItemList items = {data.itemCards} />

      </div>
    </div>
  );
};

export default RestaurantCategory;
