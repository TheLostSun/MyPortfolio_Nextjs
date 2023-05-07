import React from 'react'
import  Link  from 'next/link'
import {motion} from "framer-motion"

const MotionLink=motion(Link);

const Logo = () => {
    
  return (
    <div ckassName="flex items-center justify-center">
    <MotionLink href="/"
    className="w-16 h-12 lg:w-24 lg:h-16 flex items-center justify-center" >
    <motion.img src="/images/logo.jpg" className='rounded-full' whileHover={{
        scale:1.3,
        boxShadow:"rgba(0,0,1,1) 0 0 10px "}}
        whileTap={{
          scale:1.4,
        boxShadow:"rgba(0,0,1,1) 0 0 10px "
        }}></motion.img>
   
    </MotionLink>
    </div>
  )
}

export default Logo