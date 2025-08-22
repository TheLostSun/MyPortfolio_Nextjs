import {React,useState} from 'react'
import {motion} from "framer-motion"
import Sidebar from "./Sidebar.js"

const Hamburger = () => {
    const [menu,menuToggle]=useState({
        menuState:false,
        menuIcon:"/images/hamburger-menu-bold.svg"
    });

    function toggleMenu(){
        if(menu.menuState===false) {
            menuToggle({
                menuState:true,
                menuIcon:"/images/alpha-x-circle.svg"
            });
        } else {
            menuToggle({
                menuState:false,
                menuIcon:"/images/hamburger-menu-bold.svg"
            });
        }
    }
    
    return (
      <>
        <button className="lg:hidden absolute z-40 top-4 left-2 w-16 h-12" onClick={toggleMenu}>
          <motion.img 
            src={menu.menuIcon} 
            className="w-full rounded-2xl p-1" 
            whileTap={{
              scale:1.15,
              backgroundColor:"#7dd3fc",
              boxShadow:"rgba(0,0,1,1) 0 0 10px",
            }}
          />
        </button>      
        <Sidebar isOpen={menu.menuState} toggleMenu={toggleMenu}/>
      </>
    )
}
export default Hamburger
