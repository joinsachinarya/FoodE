import React from 'react'

const Shimmer = () => {
    return (
        <div className=''>
            {/* {Array(12).fill("").map((it, i) => { */}
            <div className='flex flex-col gap-4 w-[220px] h-[300px] rounded-lg  items-center bg-slate-100 animate-pulse p-4' key={"i"}>
                <div className=' bg-slate-200 w-[100%]  h-[50%] animate-pulse' />
                <div className='bg-slate-200 w-[100%]  h-[10%] animate-pulse' />
                <div className='bg-slate-200 w-[100%]  h-[10%] animate-pulse' />
                <div className='bg-slate-200 w-[100%]  h-[10%] animate-pulse' />
            </div>
            {/* })} */}
        </div>
    )
}

export default Shimmer