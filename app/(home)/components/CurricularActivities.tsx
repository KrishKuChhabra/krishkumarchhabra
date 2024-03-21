import React from 'react'
import Title from './Title'
import Photographers from './Photographers'

export default function CurricularActivities() {
  return (
    <>
    <div className='max-w-5xl mx-auto px-8 mt-32'>
      <Title text="Curricular Activities" className='flex flex-col items-center justify-center -rotate-6 '/>
   </div>  
   <div>
   <Photographers />

   </div>
   </>
  )
}
