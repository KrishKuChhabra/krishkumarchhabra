import React from 'react'

export default function SubTitle({text,className}:{text:string, className?:string}) {
  return (
    <div className={className}>
    <h1 className="text-2xl font-bold group-hover:text-green-400 transition-all ">{text}</h1> 
    <div className="w-40 h-2 bg-green-500 rounded-full  "></div>
    <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
</div>
  )
}


