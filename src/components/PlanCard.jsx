import React from 'react'

const PlanCard = () => {
    return (
        <div className="group flex flex-col gap-4 rounded-xl border border-[#252a31] bg-[#15181d] p-3 transition hover:border-[#353b44] sm:flex-row sm:items-center">
            <div className="h-[70px] w-full shrink-0 overflow-hidden rounded-lg sm:h-[64px] sm:w-[80px]">
                <img src="https://api.abcz.workers.dev/images/fitlog/pull-up.jpg" alt="Pull Up" className="h-full w-full object-cover"/>
            </div>
            {/* Workout Information */}
        
            <div className="min-w-0 flex-1">
                <h2 className="truncate text-[11px] font-black uppercase text-white">
                    Pull-Up
                </h2>
                <p className="mt-1 text-[8px] text-gray-500">
                    Pull-up Bar
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                    <span className="flex items-center gap-1 text-[8px] text-gray-500">
                        <span className="text-[#c8ff00]">
                            ◷
                        </span>
                        15 min
                    </span>
                    <span className="flex items-center gap-1 text-[8px] text-gray-500">
                        <span className="text-[#c8ff00]">
                            ◆
                        </span>
                        120 kcal
                    </span>
                    <span className="flex items-center gap-1 text-[8px] text-gray-500">
                        <span className="text-[#c8ff00]">
                            ★
                        </span>
                        4.7
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-between gap-3 sm:justify-end">
                <button type="button" className="rounded-full border border-[#30353c] px-4 py-2 text-[8px] font-medium text-gray-400 transition hover:border-gray-500 hover:text-white">View Details</button>
                <button type="button" className="flex h-7 w-7 items-center justify-center rounded-full text-gray-600 transition hover:bg-[#242830] hover:text-white">×</button>
            </div>
        </div> 
    )
}

export default PlanCard