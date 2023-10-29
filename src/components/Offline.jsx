import React from 'react'

const Offline = () => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center mt-6">
            <h2 className="text-red-500 font-bold">🚨Offline! </h2>
            <b>Please check your internet connection!!</b>
            <button className='border border-blue-400 p-2 m-2'>Play Tic-Tac-Toe</button>
        </div>
    )
}

export default Offline