import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const ExerciseCard = ({exercise}) => {
    return (
        <>
            <div className="card bg-base-100 w-[32%] shadow-sm">
                <Link href={`workout/${exercise.id}`} >
                    <figure>
                      <Image src={exercise.image} width={100} height={250} alt={exercise.name} style={{width:"100%"}} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                          { exercise.name }
                        {/* <div className="badge badge-secondary">NEW</div> */}
                      </h2>
                      <p>{ exercise.description }</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ExerciseCard