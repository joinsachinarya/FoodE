import React from 'react'
import { CDN_IMG_BASE_URL } from "../constants/apiLinks";

const RestaurantCard = (props) => {
    const restaurantInfo = props;
    console.log(restaurantInfo?.info);
    const { name, cloudinaryImageId, locality, avgRating, sla, costForTwo, cuisines } = restaurantInfo?.info;
    console.log("name", name);
    return (
        <>
            <img alt={name} src={`${CDN_IMG_BASE_URL}` + `${cloudinaryImageId}`} className='h-40' />
            <p className='text-orange-600 text-base font-bold'>{name}</p>
            <p className='text-red-600 line-clamp-1'>{[...cuisines].join(", ")}</p>
            <p className='text-sm'>{avgRating}🌟</p>
            <p className='text-green-600 text-sm font-semibold'>{costForTwo}</p>
            <p className='text-xs text-gray-600'>{locality}, {sla.lastMileTravelString}</p>
        </>
    )
}

export default RestaurantCard