import React from 'react'
import { SiJavascript, SiMongodb, SiNextdotjs, SiPrisma, SiReact, SiRedux, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

export const Project = () => {
    const projects=[
        {
            title:"Aarohi Media",
            tech:[SiReact, SiTailwindcss, SiJavascript],
            Link:"https://aarohi-media.netlify.app/#/",
            cover:"/project1.png",
            background:"bg-indigo-500",
        },
        {
            title:"Atv News Odisha",
            tech:[SiReact, SiTailwindcss, SiJavascript,SiRedux],
            Link:"https://atvodisha.com/",
            cover:"/project2.png",
            background:"bg-green-500",
        },
        {
            title:"Spotify Clone",
            tech:[SiNextdotjs, SiTailwindcss, SiTypescript,SiPrisma,SiMongodb, SiSupabase ],
            Link:"https://spotifymusic-krish.vercel.app/",
            cover:"/project3.png",
            background:"bg-yellow-500",
        },
        {
            title:"Ecommerce web " ,
            tech:[SiNextdotjs, SiTailwindcss, SiTypescript,SiMongodb,SiRedux ],
            Link:"https://spotifymusic-krish.vercel.app/",
            cover:"/project4.png",
            background:"bg-purple-500",
        },
    ]
  
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text='Projects' className='flex flex-col items-center justify-center -rotate-6' />
        <div className='grid grid-col-1 sm:grid-cols-2 pt-20 gap-5'>
         {projects?.map((project,index)=>{
            return <Link href={project?.Link} key={index}>
               <div className={cn("p-5 rounded-md ", project?.background)}>
                 <DirectionAwareHover imageUrl={project?.cover} className='w-full space-y-5 cursor-pointer'>
                 <div className='space-y-5'>
                        
                    <h1 className='font-bold text-2xl'>{project?.title}</h1>
                 
                    <div className=' flex items-center gap-5'>
                        {project.tech.map((Icon, index)=>{
                            return <Icon className='w-8 h-8' key={index} />
                        })}
                    </div>
                    </div>

                 </DirectionAwareHover>
               </div>
            </Link>
         })}
        </div>
    </div>
  )
}
