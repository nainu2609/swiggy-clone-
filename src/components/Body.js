import Restaurantcard from "./Restaurantcard";
import {useEffect,useState} from 'react';
const Body = () => {
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json(); // Don't forget to invoke the json() method
            console.log(json);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return(
        <div className="body">
            <div className="filter">
                <button onClick={()=>{
                    
                }}> top rated Restaurant</button>
            </div>
            <div className="res-containers">
                <Restaurantcard 
                resName = "meghna foods "
                food = "south indian"
                rating = "4.5"
                />
                <Restaurantcard
                resName = "KFC "
                food = "juck food"
                rating = "4.7"
                />
                
            </div>
        </div>
    )
}

export default Body;