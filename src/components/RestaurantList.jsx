import React, { useEffect, useState } from 'react';
import { FETCH_ALL_RESTAURANTS_URL } from "../constants/apiLinks";
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const RestaurantList = () => {

    const [restaurantList, setRestaurantList] = useState(null);
    useEffect(() => {
        fetchDataByUrl(FETCH_ALL_RESTAURANTS_URL);
    }, []);

    const fetchDataByUrl = async (url) => {
        const readableStream = await fetch(url);
        const jsonData = await readableStream.json();
        setRestaurantList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div>
            {!restaurantList ? <Shimmer /> :
                // restaurantList.map((r, i) => {
                <RestaurantCard {...restaurantList[0]} />
                // console.log(r, i);
                // })
            }
        </div>
    )
}

export default RestaurantList;