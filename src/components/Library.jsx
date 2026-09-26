import React from 'react'

import ExerciseCard from './ExerciseCard'

const getExercise = async()=>{

}

const Library = async() => {
    return (
        <div className='relative top-[76px] py-[40px]'>
            <div className="mx-[15px]">
                <h2 className='text-[30px] font-bold text-[#fff] uppercase'>The Library</h2>
                <p className='text-[#9CA3AF] text-[14px] font-medium mb-2.5'>Twelve lifts covering every major muscle group</p>
                <ExerciseCard />
            </div>

        </div>
    )
}

export default Library