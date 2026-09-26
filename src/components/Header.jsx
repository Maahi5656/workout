"use client"

// import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { useContext } from 'react';

import { WorkoutContext } from '../context/WorkoutContext';

import logo from '../assets/logo.png'

const Header = () => {

    const { planWorkout, setPlanWorkout, saveWorkout, setSaveWorkout } = useContext(WorkoutContext);
     
    return (
        <div className="navbar fixed top-0 bg-[#0C0D10] text-[#9CA3AF] shadow-sm z-999">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <Image src={logo} width={25} height={25} alt="logo" />
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link className='font-[14px] text-2xl text-[#9CA3AF] hover:text-[#C2F800]'  href="/">Workout</Link></li>
                <li><Link className='font-[14px] text-2xl text-[#9CA3AF] hover:text-[#C2F800]' href="/my-plan">My Plan</Link></li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">
                <Image src={logo} width={25} height={25} alt="logo" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link className='font-[14px] text-2xl text-[#9CA3AF] hover:text-[#C2F800]' href="/">Workout</Link></li>

              <li><Link className='font-[14px] text-2xl text-[#9CA3AF] hover:text-[#C2F800]' href="/my-plan">My Plan</Link></li>
            </ul>
          </div>
          <div className="navbar-end">
            <p className='font-[14px]text-2xl text-[#9CA3AF] px-2'>Plan ({planWorkout.length})</p>
             <p className='font-[14px]text-2xl text-[#9CA3AF] px-2'>Saved ({saveWorkout.length})</p>
          </div>
        </div>
    )
}

export default Header;