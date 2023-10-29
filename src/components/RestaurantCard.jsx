import React from 'react'
import { CDN_IMG_BASE_URL } from "../constants/apiLinks";

const RestaurantCard = (props) => {
    const restaurantInfo = props;
    const { name, cloudinaryImageId, locality, avgRating, sla, costForTwo, cuisines } = restaurantInfo?.info;
    return (
        <>
            <img alt={name} src={`${CDN_IMG_BASE_URL}` + `${cloudinaryImageId}`} className='h-[60%] p-4' />
            <div className='pl-4 bg-slate-100 h-full rounded-b-lg pt-4'>
                <p className='text-orange-600 text-base font-bold flex justify-between pr-4'>
                    {name}
                    <span className='text-xs font-bold text-yellow-400'>{avgRating}🌟</span>
                </p>
                <p className='text-red-600 line-clamp-1'>{[...cuisines].slice(0, 2).join(", ")}</p>
                <p className='text-green-600 text-sm font-semibold'>{costForTwo}</p>
                <p className='text-xs text-gray-600'>{locality}, {sla.lastMileTravelString}</p>
            </div>
        </>
    )
}

export default RestaurantCard