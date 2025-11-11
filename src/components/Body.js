import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData';

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {
          resList.map((res) => {
            return <RestaurantCard resObj={res} key={res.info.id}/>
          })
        }
      </div>
    </div>
  );
};

export default Body;