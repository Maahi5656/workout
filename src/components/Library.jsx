import ExerciseCard from './ExerciseCard'

const getExercise = async () => {
    try {
        const response = await fetch('https://YOUR-DOMAIN.com/workoutData.json')

        if (!response.ok) {
            throw new Error(`Failed to fetch exercises: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error('Failed to load exercises:', error)
        return []
    }
}

const Library = async () => {
    const exerciseData = await getExercise()

    return (
        <div className='relative top-[76px] py-[40px]'>
            <div className="mx-[15px]">
                <h2 className='text-[30px] font-bold text-[#fff] uppercase'>
                    The Library
                </h2>

                <p className='text-[#9CA3AF] text-[14px] font-medium mb-2.5'>
                    Twelve lifts covering every major muscle group
                </p>

                <div className='flex flex-wrap items-center gap-5'>
                    {exerciseData.map((exercise, index) => (
                        <ExerciseCard
                            exercise={exercise}
                            key={exercise.id ?? index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Library