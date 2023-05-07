import Link from "next/link"
import React , {useState} from 'react'
import Logo from "./Logo"
import {motion} from "framer-motion"
import {useRouter} from "next/router"
import Hamburger from "./Hamburger.js"

const MotionLink=motion(Link);
const CustomLink = ({href,imgURL})=>{
  const fullLink="/"+href;
  const router=useRouter();
  return(
    
      <MotionLink href={href}
    className={`items-center justify-center mx-4 ${router.asPath===fullLink?"w-20 h-16 ":"w-16 h-12"}`}>
    <motion.img src={imgURL} className={`rounded-2xl p-2 shadow-2xl ${router.asPath===fullLink?"bg-violet-400 border-2 border-slate-700":"bg-white"}`} whileHover={
      router.asPath===fullLink?{
        scale:1.2,
      }:{
        scale:1.6,
        backgroundColor:"orange",
        boxShadow:"rgba(0,0,1,1) 0 0 10px ",
      }}></motion.img>
       
    </MotionLink>
    )
}
const CustomLinkIcon = ({href,imgURL})=>{
  return(
    
      <a href={href} target="_blank"
    className="w-16 h-8 items-center justify-center mx-3">
    <motion.img src={imgURL} className="w-full rounded-2xl p-1 " whileHover={
      {
        scale:1.4,
        backgroundColor:"#fca5a5",
        boxShadow:"rgba(0,0,1,1) 0 0 10px ",
      }}></motion.img>
       
    </a>
    )
}
const NavBar = () => {
  
  return (
    <header
      className='w-full px-8  py-12 font-medium flex items-center justify-between bg-gradient-to-b from-cyan-600 to-sky-200'
      >
        <Hamburger/>
        <nav className="max-lg:hidden flex justify-between">
        
          <CustomLink href="GameDev" imgURL="/images/joystick.svg">
          </CustomLink>
          <CustomLink href="AppDev" imgURL="/images/mobile.svg">
          </CustomLink>
          <CustomLink href="WebDev" imgURL="/images/web.svg">
          </CustomLink>
          <CustomLink href="Courses" imgURL="/images/course.svg">
          </CustomLink>
        </nav>
        <nav className="max-lg:hidden flex justify-between">
          <CustomLinkIcon href="https://github.com/TheLostSun/" target="_blank" imgURL="/images/github.svg">
          </CustomLinkIcon>
          <CustomLinkIcon href="https://in.linkedin.com/in/prabhu-awasthi-668780232" imgURL="/images/linkedin.svg"  >
          </CustomLinkIcon>
          <CustomLinkIcon href="https://discord.com/invite/qVqmyKtdfq" imgURL="/images/baseline-discord.svg">
          </CustomLinkIcon>
          <CustomLinkIcon href="https://www.instagram.com/prabhu.awasthi/?hl=en" imgURL="/images/instagram.svg">
          </CustomLinkIcon>
        </nav>
        <div className="absolute left-[50%] translate-x-[-50%]">
          <Logo/>
        </div>

      </header>
  )
}

export default NavBar