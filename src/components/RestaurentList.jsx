import React from 'react'
import useOnline from '../hooks/useOnline';

const RestaurentList = () => {
    const isOnline = useOnline();

    if (!isOnline) return (
        <p>Offline</p>
    )

    return (
        <div>RestaurentList</div>
    )
}

export default RestaurentList;