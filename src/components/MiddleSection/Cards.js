import React from 'react'
import Link from "next/link"
import { motion } from "framer-motion"

const MotionLink = motion(Link);

const Cards = (props) => {

  // Default layout for 1080p videos
  return (
    <div className="lg:flex my-12 w-7/8 p-8 rounded-xl drop-shadow-2xl shadow-md h-full bg-slate-800 mx-8">
      <div className="lg:w-1/2">
        <h1 className='max-lg:text-center text-slate-200 font-extrabold text-4xl lg:text-5xl drop-shadow-2xl uppercase tracking-tighter'>{props.title}</h1>
        <p className=" max-lg:text-center text-rose-300 font-bold text-2xl my-6 underline">{props.heading}</p>
        <p className=" max-lg:text-center text-rose-100 font-base my-5">{props.content}</p>
        <h3 className="max-lg:text-center font-bold text-lg text-rose-300 underline tracking-wide">{props.techOrAvail}</h3>
        <p className=' max-lg:text-center text-rose-100 font-base font-bold mt-2'>{props.tech}</p>
        <div className='flex items-center self-start mt-10 justify-center lg:justify-start pb-10 lg:pb-0'>

          <MotionLink href={props.link} target="_blank" className='text-center drop-shadow-2xl font-extrabold bg-rose-300 p-3 rounded-xl text-black mx-3' whileHover={{
            scale: 1.2,
            boxShadow: "rgba(0,0,1,1) 0 0 10px",
          }}>
            {props.buttonTitle} &#8690;
          </MotionLink>
          {/* <MotionLink href={props.trailer} target="_blank" className={`text-center drop-shadow-2xl font-extrabold bg-slate-100 p-3 rounded-xl text-black mx-3`} whileHover={{
            scale: 1.2,
            boxShadow: "rgba(0,0,1,1) 0 0 10px",
          }}>
            {props.trailerTitle}
          </MotionLink> */}
        </div>
      </div>
      

      <div className='lg:w-1/2  flex self start justify-center items-center'>
        <video width="800" height="800" controls preload="none" className="rounded-xl" autoPlay loop muted>
          <source src={props.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
      </div>
    </div>
  )
}

export default Cards
