"use client"

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import {SiGit, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript} from "react-icons/si"
export default function Skills() {

  const skilss=[
    {
      text:"React",
      Icon:SiReact
    },
    {
      text:"Next.js",
      Icon:SiNextdotjs
    },
    {
      text:"Tailwind",
      Icon:SiTailwindcss
    },
    {
      text:"Git",
      Icon:SiGit
    },
    {
      text:"GitHub",
      Icon:SiGithub
    },
    {
      text:"JavaScript",
      Icon:SiJavascript
    },
    {
      text:"TypeScript",
      Icon:SiTypescript
    },
    {
      text:"MongoDb",
      Icon:SiMongodb,
    },
  
   
  ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title text="Skills" className='flex flex-col items-center justify-center -rotate-6 '/>
      <HoverEffect items={skilss} />
    </div>
  )
}
