import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export  default function Navbar({className} :{className?:string})  {

  const socials=[
    {
      link:"https://www.linkedin.com/in/krishchhabra25/",
      label:"Linkedin",
      icon:<FaLinkedin  className='w-5 h-5 hover:scale-125 transition-all'/>
    },
    {
      link:"https://twitter.com/KrishChhabra25",
      label:"Twitter",
      icon:<FaTwitter  className='w-5 h-5 hover:scale-125 transition-all'/>
    },
    {
      link:"https://github.com/KrishKuChhabra",
      label:"Github",
      icon:<FaGithub  className='w-5 h-5 hover:scale-125 transition-all'/>
    },
 
  ]
  return (
    <nav className={cn('py-10 flex justify-between items-center  animate-move-down', className)}>
    <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Krish Kumar Chhabra 👨🏻‍💻</h1>

    <div className='flex items-center gap-5'>
      {socials?.map((social, index) => {
        return (
          <Link href={social?.link} key={index} aria-label={social?.label}>
          {social?.icon}
          </Link>
        );
      })}
    </div>
  </nav>
  )
}


