import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"

const MotionLink=motion(Link);
const AnimatedText = (props) => {

  
  return (
    <>
        <div className='lg:ml-24'>
        <h1 className="drop-shadow-2xl max-lg:text-5xl max-lg:text-center text-7xl font-bold capitalize tracking-tighter text-slate-800">{props.value}</h1>
        <p className='drop-shadow-2xl max-lg:text-xl text-lg max-lg:text-center mt-8 tracking-wider font-semibold'>Hey There! My Name is Prabhu Awasthi AKA TheLostSun. Welcome to my development portfolio. Over the course of time, I've ventured into various development fields and have incorporated numerous essential skills. Explore my latest projects and articles showcasing my expertise in different development domains. </p>
        <div className='flex items-center self-start mt-6 max-lg:justify-center'>
        <MotionLink href="/images/Resume.pdf" target={"_blank"} className='drop-shadow-2xl font-bold bg-slate-800 p-3 rounded-xl text-rose-100 mx-2' whileHover={{
          scale:1.2,
          boxShadow:"rgba(0,0,1,1) 0 0 10px ",
        }}>Resume</MotionLink>
        <MotionLink href="mailto:prabhuawasthibuisness@gmail.com" target={"_blank"} className='bg-slate-100 p-3 rounded-xl drop-shadow-2xl font-bold text-slate-800 mx-2' whileHover={{
          scale:1.2,
          boxShadow:"rgba(0,0,1,1) 0 0 10px ",
        }}>Contact Me</MotionLink>
        </div>
        <div className='lg:hidden flex items-center self-start mt-6 font-bold bg-rose-200 p-3 rounded-xl shadow-lg uppercase text-xl text-center max-lg:justify-center'>
          <h2>Go to the sidebar above to explore my projects!</h2>
        </div>
        </div>
    </>
  )
}

export default AnimatedText