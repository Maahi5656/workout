import React from 'react'

import Image from 'next/image'

import bannerImage from '../assets/banner.png'

const Banner = () => {
    return (
        <>
            <div className="container-fluid flex items-center justify-center relative top-[76px] mt-[48px]">
                <div className='flex justify-between items-center bg-[#15171D] p-[56px] rounded w-[95%]'>
                    <div>
                        <small className='text-[12px] font-bold text-[#C2F800] uppercase mb-3'>Workout Library</small>
                        <h1 className='text-[40px] font-extrabold text-[#fff] mb-3.5 uppercase '>Train With Intent. Log<br/>Every Set.</h1>
                        <p className='text-[15px] font-medium text-[#9CA3AF] mb-3.5'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>
    into todays plan, and watch the weeks work add up.</p>
                        <button className='uppercase text-[#000] text-[16px] p-3 bg-[#C2F800] rounded'>Browse Workouts</button>
                    </div>
                    <div>
                        <Image src={bannerImage} width={334} height={334} alt='banner-image' />
                    </div>
                </div>

            </div> 
        </>
    )
}

export default Banner