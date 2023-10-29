import React from 'react'

export const ShimmerRestaurantCard = () => {
    return (
        <div className='flex flex-wrap gap-5'>
            {Array(12).fill("").map((it, i) => (
                <div className='flex flex-col gap-4 w-[220px] h-[300px] rounded-lg  items-center bg-white animate-pulse p-4' key={i}>
                    <div className=' bg-slate-200 w-[100%]  h-[50%] animate-pulse' />
                    <div className='bg-slate-200 w-[100%]  h-[10%] animate-pulse' />
                    <div className='bg-slate-200 w-[100%]  h-[10%] animate-pulse' />
                    <div className='bg-slate-200 w-[100%]  h-[10%] animate-pulse' />
                </div>
            ))}
        </div>
    )
}

export const ShimmerRestaurantDetails = () => (
    <div className='flex flex-col gap-4 w-[60%] h-[80%] rounded-lg  items-center bg-white animate-pulse p-4'>
        <div className=' bg-slate-200 w-[100%]  h-[50%] animate-pulse' />
        <div className='bg-slate-200 w-[100%]  h-[10%] animate-pulse' />
        <div className='bg-slate-200 w-[100%]  h-[10%] animate-pulse' />
        <div className='bg-slate-200 w-[100%]  h-[10%] animate-pulse' />
    </div>
)