import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
        <div className='mt-20 -mb-2 text border-t-[1px] border-b-[1px] border-silver flex gap-20 overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}}  className='text-[28.5vw] font-["Founders_Grotesk_X"] font-semibold uppercase leading-[30vw] -mb-[10vw]'>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}}  className='text-[28.5vw] font-["Founders_Grotesk_X"] font-semibold uppercase leading-[30vw] -mb-[10vw]'>We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
