import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-30 flex gap-10 overflow-hidden  whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}}  className='text-[40vh] leading-none font-["Founders_Grotesk"] font-semibold uppercase pt-4 mt-16 -mb-11'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}}  className='text-[40vh] leading-none font-["Founders_Grotesk"] font-semibold uppercase pt-4 mt-16 -mb-11'>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

 export default Marquee