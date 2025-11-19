import { useEffect } from "react";
import { useParams } from 'react-router-dom'

const RestaruntDetails = ()=>{

    const {resId, resName} = useParams();

    useEffect(()=>{
        // fetchData();
    },[])

const fetchData = async () => {
  try {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    const text = await res.text();   // read response as text
    console.log("Raw response:", text);

    const jsonData = JSON.parse(text);
    console.log(jsonData);

  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

    return (
        <div>
            <h1>Restaurant Details</h1>
            <h1> {resName}</h1>
            <div>
                <h1>Menu</h1>
                <ul>
                    <li>Poha</li>
                    <li>Dosa</li>
                    <li>Misal Pav</li>
                </ul>
            </div>
        </div>
    )   
}

export default RestaruntDetails;



// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5288974&lng=73.8665321&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER