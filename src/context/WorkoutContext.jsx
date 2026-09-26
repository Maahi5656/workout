"use client"

import React from "react"
import { createContext } from "react"
import { useState } from "react"

export const WorkoutContext = createContext({
    planWorkout: [],
    setPlanWorkout: ()=>{},
    saveWorkout: [],
    setSaveWorkout: ()=>{}
});

const WorkoutProvider=({children})=>{

    const [planWorkout, setPlanWorkout] = useState([]);
    const [saveWorkout, setSaveWorkout] = useState([]);

    const sharedData = {
        planWorkout,
        setPlanWorkout,
        saveWorkout,
        setSaveWorkout       
    }

    return <WorkoutContext.Provider value={sharedData}>
        {children}
    </WorkoutContext.Provider>
}

export default WorkoutProvider;