import React from 'react'

import Image from 'next/image';

import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
        <div className='container py-[40px] px-[15px] bg-[#090A0D]'>
            <div className="flex justify-between items-center">
                <Image src={logo} width={25} height={25} />
                <p className='font-[12px] text-[#6B7280]'>@2026 FitLog - Workout Library. Train Hard, Log Honest</p>
            </div>
        </div>
    </>
  )
}

export default Footer