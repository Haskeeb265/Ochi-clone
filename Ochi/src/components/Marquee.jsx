import React from 'react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-2xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-30 0 flex gap-10 overflow-hidden  whitespace-nowrap'>
            <h1 className='text-[40vh] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-4 -mb-0'>We are Ochi</h1>
            <h1 className='text-[40vh] leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold uppercase pt-4 -mb-0'>We are Ochi</h1>
        </div>
    </div>
  )
}

 export default Marquee