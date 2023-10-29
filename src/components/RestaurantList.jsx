import React, { useEffect, useState } from 'react';
import { FETCH_ALL_RESTAURANTS_URL } from "../constants/apiLinks";
import RestaurantCard from './RestaurantCard';
import { ShimmerRestaurantCard } from './Shimmer';
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
        <div className='flex flex-wrap gap-5 p-10 mb-14 bg-slate-100'>
            {!restaurantList ? <ShimmerRestaurantCard /> : restaurantList.map((it, i) => (
                <div className='flex flex-col w-[220px] h-[300px]  bg-white shadow-lg rounded-lg' key={i}><RestaurantCard {...restaurantList[i]} /></div>
            ))}
        </div>
    )
}

export default RestaurantList;