import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

const Sidebar = (props) => {
    const CustomLinkIcon = ({href,imgURL})=>{
        return(
            <a href={href} target="_blank" onClick={props.toggleMenu}
               className="w-12 h-12 items-center justify-center mx-1">
              <motion.img 
                src={imgURL} 
                className="w-full rounded-2xl p-1" 
                whileTap={{
                  scale:1.4,
                  backgroundColor:"#7dd3fc",
                  boxShadow:"rgba(0,0,1,1) 0 0 10px",
                }}
              />
            </a>
        )
    }

    return (
    <>
      {/* Backdrop */}
      <div 
        id="backdrop" 
        onClick={props.toggleMenu}
        className={`lg:hidden fixed top-0 left-0 h-full w-full bg-black opacity-50 z-10 ${props.isOpen ? "" : "hidden"}`}
      ></div>

      {/* Sidebar */}
      <motion.div 
        className={`border-e-4 border-dark lg:hidden fixed inset-y-0 left-0 w-4/5 bg-gradient-to-r from-orange-500 to-yellow-300
        transform transition-all duration-300 ease-in-out
        ${props.isOpen ? "translate-x-0" : "-translate-x-full"}
        flex flex-col justify-center items-center z-20`}
      >
        <Link href="/" onClick={props.toggleMenu}
          className='text-lg antialiased font-bold uppercase border-dark border-4 my-4 p-5 
          bg-gradient-to-r from-rose-500 to-rose-200 rounded-3xl'>
          Home Page
        </Link>
        
        <Link href="GameDev" onClick={props.toggleMenu}
          className='text-lg antialiased font-bold uppercase border-dark border-4 my-4 p-5 
          bg-gradient-to-r from-rose-500 to-rose-200 rounded-3xl'>
          Game Development
        </Link>

        {/* Social Icons */}
        <div className='flex my-4'>
          <CustomLinkIcon href="https://github.com/TheLostSun/" imgURL="/images/github.svg"/>
          <CustomLinkIcon href="https://in.linkedin.com/in/prabhu-awasthi-668780232" imgURL="/images/linkedin.svg"/>
          <CustomLinkIcon href="https://discord.com/invite/qVqmyKtdfq" imgURL="/images/baseline-discord.svg"/>
          <CustomLinkIcon href="https://www.instagram.com/prabhu.awasthi/?hl=en" imgURL="/images/instagram.svg"/>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
