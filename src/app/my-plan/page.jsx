"use client"

// import React from 'react'

import { useContext } from 'react';
import { useState } from 'react';

import { WorkoutContext } from '../../context/WorkoutContext';
import PlanCard from '../../components/PlanCard';

const PlanningWork = () => {

    const { planWorkout, saveWorkout } = useContext(WorkoutContext);

    const [sortBy, setSortBy] = useState("duration");

    const sortWorkout = (workout) => {
        const sortedWorkout = [...workout];

        if(sortBy === "duration"){
            sortedWorkout.sort((a, b)=>b.duration - a.duration);
        }else if(sortBy === "caloriesBurned"){
            sortedBooks.sort((a, b)=>b.caloriesBurned - a.caloriesBurned);
        }else if(sortBy === "name"){
            sortedBooks.sort((a, b)=>b.name - a.name);
        }else if(sortBy === "rating"){
            sortedBooks.sort((a, b)=>b.rating - a.rating);
        }

        return sortedWorkout;
    }

    const sortedPlannedWorkout = sortWorkout(planWorkout);
    const sortedSavedWorkout = sortWorkout(saveWorkout);

    return (
        <>
            <div className="relative top-[76px] min-h-screen bg-[#0d0f12] px-6 py-10 text-white">
                <div className="w-[90%]">
                    <div className="mb-7">
                        <h1 className="text-2xl font-black uppercase tracking-tight text-white">
                            MY PLAN
                        </h1>
                        <p className="mt-2 max-w-[500px] text-[11px] leading-5 text-gray-500">
                            Cap of five lifts for today. Finish them, then load more.
                        </p>   
                    </div>
                    <div className="mb-5 overflow-hidden rounded-xl border border-[#252a31] bg-[#15181d]">
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="border-b border-[#252a31] px-5 py-4 sm:border-b-0 sm:border-r">
                                <p className="text-[8px] font-medium uppercase tracking-wide text-gray-500">
                                    Exercises
                                </p>
                                <p className="mt-1 text-2xl font-black leading-none text-[#c8ff00]">
                                    {planWorkout.length}
                                </p>

                            </div>
                            <div className="border-b border-[#252a31] px-5 py-4 sm:border-b-0 sm:border-r">
                                <p className="text-[8px] font-medium uppercase tracking-wide text-gray-500">
                                    Minutes
                                </p>
                    
                                <p className="mt-1 text-2xl font-black leading-none text-white">
                                    23
                                </p>
                    
                            </div>   
                            <div className="px-5 py-4">
                                <p className="text-[8px] font-medium uppercase tracking-wide text-gray-500">
                                    Calories Burned
                                </p>
                                <p className="mt-1 text-2xl font-black leading-none text-white">
                                    190
                                </p>
                    
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    
                        {/* Tabs */}
                    
                        <div className="flex w-fit items-center rounded-md border border-[#252a31] bg-[#15181d] p-1">
                    
                            <button type="button" className="rounded px-4 py-1.5 text-[9px] font-medium text-gray-500 transition hover:text-white">
                                Todays Plan
                            </button>
                    
                            <button type="button" className="rounded px-4 py-1.5 text-[9px] font-medium text-gray-500 transition hover:text-white">
                                Saved
                            </button>
                    
                        </div>

                    
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] text-gray-500">
                                Sort By
                            </span>
                            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="rounded-md border border-[#30353c] bg-[#15181d] px-3 py-2 text-[9px] text-gray-400 outline-none" defaultValue={"duration"}>
                                <option value={"duration"}>Duration</option>
                                <option value={"calories"}>Calories</option>
                                <option value={"rating"}>Rating</option>
                                <option value={"name"}>Name</option>
                            </select>
                        </div> 
                    </div>
                    <div className="space-y-3">
                        {
                            sortedPlannedWorkout.length > 0 ? (planWorkout.map((workout)=>{
                                return <PlanCard key={workout.id} workout={workout} />
                            })) : (
                                <p className='text-center text-lg font-semibold'>No Data Found</p>
                            )

                        }
                        
                    </div>     
                </div>      
            </div>
        </>
    )
}

export default PlanningWork;