import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import Limgage from "../assets/Landing-img.jpg";



function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item,index)=>{
                return(
                    <div className='masker'>
                        <div className='w-fit flex items-end'>
                            {index === 1 && (
                                <div className='mr-[1vw] w-[10vw] rounded-md h-[5.7vw] -top-[0vw] relative Limage'></div>
                            )}
                            <h1 className='pt-[1vw] -mb-[-0.3vw] uppercase text-[7vw] leading-[0.75] font-["Founders-Grotesk_X-Condensed"]'>{item}</h1>
                        </div>
                    </div>
                )
            })}
            <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between item-center py-5 px-10 '>
                {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>
                (<p className='text-md font-light tracking-tight leadning-none'>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-700 font-light text-sm  rounded-full'>START THE PROJECT</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-700 rounded-full'>
                    <span className='rotate-[40deg]'>
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