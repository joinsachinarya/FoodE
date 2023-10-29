import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';;
import { CDN_IMG_BASE_URL, RESTAURANT_DETAILS_URL } from "../constants/apiLinks"
import { fetchDataByUrl } from '../utils/helper';
import { ShimmerRestaurantDetails } from './Shimmer';

const RestaurantDetails = () => {
    const [resDetails, setResDetails] = useState(null);
    const [menuItems, setMenuItems] = useState(null);
    const { resId } = useParams();
    const url = RESTAURANT_DETAILS_URL.replace("resId", resId);

    useEffect(() => {
        fetchRestaurantDetails();
    }, [])

    const fetchRestaurantDetails = async () => {
        const result = await fetchDataByUrl(url);
        const details = result?.data?.cards[0]?.card?.card?.info;
        const menuItems = result?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setResDetails(details);
        setMenuItems(menuItems);
    }

    return (
        <>
            {!resDetails ? <ShimmerRestaurantDetails /> :

                <div className="flex border m-10 rounded-lg bg-slate-100">
                    <div className="bg-orange-50 text-center">
                        <img alt={resDetails.name} src={`${CDN_IMG_BASE_URL}` + `${resDetails.cloudinaryImageId}`} className='w-1/3 h-1/2' />
                        <p className="font-bold text-2xl py-2" style={{ color: "orange" }}>{resDetails.name} <span style={{ fontSize: "22px" }}>, {resDetails.city}</span></p>
                        <p className="text-red-600 py-2 font-semibold">Two plates only on: ₹{resDetails.costForTwo}/-</p>
                    </div>
                    <div className="p-8">
                        <p className="text-red-400 font-semibold text-xl">Restaurant Type: {resDetails.veg ? "Veg" : "NonVeg"}</p>

                        <p className="pt-5 tex-base">Cuisines Types:   👇</p>
                        {resDetails?.cuisines?.map((cuisine, index) => (
                            <ul className="text-orange-500 pt-2" key={index}>
                                <li> 🍕 {cuisine}</li>
                            </ul>
                        ))}

                        <p className="pt-5 tex-base">Menu Items:   👇</p>
                        {menuItems?.map((item, index) => (
                            <ul className="text-red-400 pt-2" key={index}>
                                <li> 🍕 {item?.card?.info?.name} <button className="border bg-green-400 text-white rounded p-2 ml-2" onClick={() => handleAddItem(item)}>Add to Cart</button></li>
                            </ul>
                        ))}
                    </div>
                </div>
            }
        </>

    )
}

export default RestaurantDetails