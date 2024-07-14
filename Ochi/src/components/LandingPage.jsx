import React from 'react'
import { FaArrowUp } from "react-icons/fa6";




function LandingPage() {
  return (
    <div className='w-full h-screen bg-white-100 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item,index)=>{
                return(
                    <div className='masker'>
                        <div className='w-fit flex items-end'>
                            {index === 1 && (
                                <div className='mr-[1vw] w-[10vw] rounded-md h-[5.7vw] -top-[2.3vw] relative bg-lime-300'></div>
                            )}
                            <h1 className='pt-[1vw] -mb-[-0.3vw] text-black uppercase text-[148px] font-semibold leading-[6vw] font-["Founders_Grotesk_X"]'>{item}</h1>
                        </div>
                    </div>
                )
            })}
            <div className='border-t-[1px] border-zinc-800 mt-56 flex justify-between item-center py-5 px-10 '>
                {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>
                (<p className=' font-["Neue_Montreal"] text-md text-black font-light tracking-tight leadning-none'>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className=' font-["Neue_Montreal"] px-5 py-2 border-[1px] border-zinc-700 font-light text-sm  rounded-full text-black'>START THE PROJECT</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-700 rounded-full'>
                    <span className='text-black rotate-[40deg]'>
                        <FaArrowUp />
                    </span>
                    
                </div>

            </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage 
