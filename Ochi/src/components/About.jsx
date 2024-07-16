import React from 'react'

function About() {
  return (
    <div className='h-[140vh] w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-left leading-[3.5vw] text-[3.6vw]'>Ochi is a strategic partner for fast-growing <br></br> tech businesses that need to raise funds, 
            sell products, <br></br>explain complex ideas, and hire great people.</h1>
      <div className='mt-[5vw] py-[10vw] w-full border-t-[1px] border-b-[1px] border-black flex'>
        <div className='w-80 font-["Neue_Montreal"] -mt-[8.5vw] text-[1.0982306284319707vw] leading-tight '><h1>What you can expect:</h1></div> 
        <div className='text-left w-60 font-["Neue_Montreal"] ml-[25vw] -mt-[8.5vw] text-[1.0982306284319707vw] leading-tight '><p>
          We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
          <br></br><br></br>
          We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p></div> 
          <div className='font-["Neue_Montreal"] ml-[20vw] -mt-[0vw] text-[1.0982306284319707vw] leading-tight '>
            <h1>S:</h1>
            <br></br>
              <ul>
                <li>Instagram</li>
                <li>Behance</li>
                <li>Facebook</li>
                <li>Linkedin</li>
              </ul>
          </div>
        </div>
        <div className='w-full p-5'>
          <h1 className='font-["Neue_Montreal"] text-left leading-[3.5vw] text-[3.6vw]'>Our approach:</h1>
          <button class="flex items-center gap-8 rounded-full bg-black text-white pl-12 pr-5 pt-4 pb-4 mt-[2vw] font-semibold  ">
            <p className='-ml-[2vw]'>READ MORE</p>
            <div className='w-2.5 h-2.5 bg-white rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[50vh] bg-red-600 ml-[45vw] -mt-[18vh] rounded-[10px] bg-[#928473] '></div>   
    </div>
  )
}

export default About