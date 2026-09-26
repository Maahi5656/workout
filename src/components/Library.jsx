import React from 'react'

import ExerciseCard from './ExerciseCard'

const getExercise = async()=>{

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/workoutData.json`);
        const data = await response.json();

        return data;
    }catch(error){
        console.log(error);
    }

}

const Library = async() => {

    const exericeData = await getExercise();

    return (
        <div className='relative top-[76px] py-[40px]'>
            <div className="mx-[15px]">
                <h2 className='text-[30px] font-bold text-[#fff] uppercase'>The Library</h2>
                <p className='text-[#9CA3AF] text-[14px] font-medium mb-2.5'>Twelve lifts covering every major muscle group</p>
                <div className='flex flex-wrap items-center gap-5'>
                {
                    exericeData.map((exercise, index)=>{
                        return <ExerciseCard exercise={exercise} key={index} /> 
                    })
                }
                </div>
            </div>

        </div>
    )
}

export default Library;