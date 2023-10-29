import React, { useEffect, useState } from 'react';
import { FETCH_ALL_RESTAURANTS_URL } from "../constants/apiLinks";
import RestaurantCard from './RestaurantCard';
import { ShimmerRestaurantCard } from './Shimmer';
import { Link } from 'react-router-dom';
import { fetchDataByUrl } from "../utils/helper";

const RestaurantList = () => {

    const [restaurantList, setRestaurantList] = useState(null);
    useEffect(() => {
        fetchAllRestaurants();
    }, []);

    const fetchAllRestaurants = async () => {
        const result = await fetchDataByUrl(FETCH_ALL_RESTAURANTS_URL);
        setRestaurantList(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className='flex flex-wrap gap-5 p-10 mb-14 bg-slate-100'>
            {!restaurantList ? <ShimmerRestaurantCard /> : restaurantList.map((it, i) => (
                <Link to={`/restaurants/${restaurantList[i]?.info?.id}`} className='flex flex-col w-[220px] h-[300px]  bg-white shadow-lg rounded-lg' key={i}><RestaurantCard {...restaurantList[i]} /></Link>
            ))}
        </div>
    )
}

export default RestaurantList;