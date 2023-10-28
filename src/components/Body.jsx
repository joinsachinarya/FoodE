import React from 'react'
import useOnline from '../hooks/useOnline';

const Body = () => {
    const isOnline = useOnline();

    if (!isOnline) return (
        <p>Offline</p>
    )

    return (
        <div>Body</div>
    )
}

export default Body;