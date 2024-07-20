import React from 'react'

function Featured() {
  return (
    <div className='w-full text-zinc-800 font-[Neue_Montreal]'>
        <div className='p-16 text-[4vw]'>Featured Section</div>
      <div className=' pb-[4vw] w-full border-t-[1px] border-black'></div>
      <div className='pb-10 w-full flex gap-5'>
        <div className='fyde w-1/2 ml-16 '>
        <div><ul className='ml-4 mb-6  list-disc text-[1vw] font-semibold'><li>FYDE</li></ul></div>
        <div className='mb-6 w-full h-[35vw] bg-zinc-500 rounded-lg'></div>
        <div className='tags flex gap-5'>
          <p className='border-[1px] border-black rounded-full p-2'>AUDIT</p>
          <p className='border-[1px] border-black rounded-full p-2'>COPYWRITING</p>
          <p className='border-[1px] border-black rounded-full p-2'>SALES DECK</p>
          <p className='border-[1px] border-black rounded-full p-2'>SLIDES DESIGN</p>
        </div>
        </div>
        <div className='vise w-1/2 mr-16'>
        <div><ul className='mb-6 list-disc text-[1vw] font-semibold mr-16'><li>VISE</li></ul></div>
        <div className='mb-6 w-full h-[35vw] bg-zinc-950 rounded-lg'></div>
        <div className='tags flex gap-5'>
          <p className='border-[1px] border-black rounded-full p-2'>AUDIT</p>
          <p className='border-[1px] border-black rounded-full p-2'>COPYWRITING</p>
          <p className='border-[1px] border-black rounded-full p-2'>SALES DECK</p>
          <p className='border-[1px] border-black rounded-full p-2'>SLIDES DESIGN</p>
        </div>        
        </div>
      </div>
      
    </div>
  )
}

export default Featured