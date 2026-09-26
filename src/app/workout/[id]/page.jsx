// import React from 'react'

import Image from 'next/image';

import PlanButton from '../../../components/PlanButton';
import SaveButton from '../../../components/SaveButton';

const getExercise = async(id)=>{

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/workoutData.json`);
        const data = await response.json();
        
        return data;
    }catch(error){
        console.log(error);
    }

}

const WorkoutDetails = async({params}) => {

    const { id } = await params;
    const exerciseData = await getExercise();

    const exercise = exerciseData.find((exercise)=>String(exercise.id) === String(id))

    return (
        <>
            <div className="py-10 relative top-[56px]">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr]">
                        <div className="overflow-hidden rounded-xl bg-[#15181d]">
                            <div className="relative aspect-[1/1] w-full">
                                <Image src={exercise.image} alt={exercise.name} fill priority className="object-cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div>
                                <h1 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-[-1.5px] text-white sm:text-5xl">
                                    {exercise.name}
                                </h1>
                                <p className="mt-4 max-w-[560px] text-[12px] leading-6 text-gray-500">
                                    {exercise.description}
                                </p>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {exercise.muscleGroups.map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-md bg-[#c8ff00] px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-black"
                                    >
                                        {muscle}
                                    </span>
                                ))}

                            </div>



                            <div className="mt-6 overflow-hidden rounded-xl border border-[#252a31] bg-[#15181d]">
                                <div className="flex items-center justify-between border-b border-[#252a31] px-4 py-3">
                                    <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                                        Equipment
                                    </span>
                                    <span className="text-[10px] font-medium text-gray-300">
                                        {exercise.equipment}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between border-b border-[#252a31] px-4 py-3">
                                    <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                                        Difficulty
                                    </span>
                                    <span className="text-[10px] font-medium text-gray-300">
                                        {exercise.difficulty}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between border-b border-[#252a31] px-4 py-3">
                                    <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                                        Sets
                                    </span>
                                    <span className="text-[10px] font-medium text-gray-300">
                                        {exercise.sets}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between border-b border-[#252a31] px-4 py-3">

                                    <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                                        Reps
                                    </span>
                                    <span className="text-[10px] font-medium text-gray-300">
                                        {exercise.reps}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between border-b border-[#252a31] px-4 py-3">
                                    <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                                        Duration
                                    </span>
                                    <span className="text-[10px] font-medium text-gray-300">
                                        {exercise.duration} min
                                    </span>
                                </div>
                                <div className="flex items-center justify-between border-b border-[#252a31] px-4 py-3">
                                    <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                                        Calories
                                    </span>
                                    <span className="text-[10px] font-medium text-gray-300">
                                        {exercise.caloriesBurned} kcal
                                    </span>
                                </div>
                                <div className="flex items-center justify-between px-4 py-3">
                                    <span className="text-[9px] font-semibold uppercase tracking-wide text-gray-500">Rating</span>
                                    <span className="text-[10px] font-medium text-gray-300">
                                        {exercise.rating}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-7">
                                <h2 className="text-[11px] font-black uppercase tracking-wide text-white">Instructions</h2>
                                <ol className="mt-3 space-y-3">
                                    {exercise.instructions.map(
                                        (instruction, index) => (
                                            <li key={index} className="flex gap-3 text-[10px] leading-5 text-gray-500">
                                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#30353c] text-[8px] text-gray-500">
                                                    {index + 1}
                                                </span>
                                                <span>
                                                    {instruction}
                                                </span>
                                            </li>
                                        )
                                    )}

                                </ol>

                            </div>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <PlanButton workout={exercise} />
                                <SaveButton workout={exercise} />
                                {/* <button type="button" className="flex items-center gap-2 rounded-md bg-[#c8ff00] px-5 py-3 text-[9px] font-bold text-black transition hover:bg-[#b5e600]">
                                    <span>▣</span>Add to todays plan
                                </button>
                                <button type="button" className="flex items-center gap-2 rounded-md border border-[#30353c] bg-transparent px-5 py-3 text-[9px] font-medium text-gray-400 transition hover:border-gray-500 hover:text-white">
                                    <span>♡</span>Save for later
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default WorkoutDetails;