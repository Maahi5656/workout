"use client"

// import React from 'react'
import { useContext } from 'react'

import { WorkoutContext } from '../context/WorkoutContext'

const SaveButton = ({workout}) => {

    const { saveWorkout, setSaveWorkout } = useContext(WorkoutContext);

    const handleSavePlan=()=>{
        console.log("Save Button Triggered", workout);
        setSaveWorkout([...saveWorkout, workout]);
    }

    return (
        <button onClick={handleSavePlan} type="button" className="flex items-center gap-2 rounded-md border border-[#30353c] bg-transparent px-5 py-3 text-[9px] font-medium text-gray-400 transition hover:border-gray-500 hover:text-white cursor-pointer">
            <span>♡</span>Save for later
        </button>
    )
}

export default SaveButton