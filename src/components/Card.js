import React from 'react'
import dice from '../images/icon-dice.svg'
import dvmobile from '../images/pattern-divider-mobile.svg'
import dvdesktop from '../images/pattern-divider-desktop.svg'

function Card({advice,roldeDice,role}) {
return (
<div
    className='max-w-md relative bg-[#313A49] rounded-lg shadow-lg flex flex-col items-center justify-center  p-4'>
    <div className='flex flex-col items-center justify-center p-5 my-5 space-y-2'>
        <p className='text-[#52ffa8] tracking-[3px] font-semibold'>{`ADVICE #${advice['slip'].id}`}</p>
        <h1 className='text-[28px] text-white text-center p-2'>
            <span>&ldquo;</span>{advice['slip'].advice}<span>&rdquo;</span></h1>
        <img className='hidden sm:block' src={dvdesktop} alt="divider" />
        <img className='sm:hidden' src={dvmobile} alt="divider" />
    </div>
    <button onClick={()=>{roldeDice(!role)}} className=' absolute bottom-0 translate-y-1/2 bg-[#52ffa8] rounded-full
        p-4'><img src={dice} alt="dice" /></button>
</div>
)
}

export default Card