"use client"

import React from 'react'
import { useContext } from 'react'

import { WorkoutContext } from '../context/WorkoutContext'

const PlanButton = ({workout}) => {

    const { planWorkout, setPlanWorkout } = useContext(WorkoutContext);

    const handleAddPlan=()=>{
        console.log("Plan Button Triggered", workout);
        setPlanWorkout([...planWorkout, workout]);
    }

    return (
        <button onClick={handleAddPlan} type="button" className="flex items-center gap-2 rounded-md bg-[#c8ff00] px-5 py-3 text-[9px] font-bold text-black transition hover:bg-[#b5e600] cursor-pointer">
            <span>▣</span>Add to todays plan
        </button>
    )
}

export default PlanButton