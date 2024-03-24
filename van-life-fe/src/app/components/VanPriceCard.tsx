import React, { useContext } from 'react'


const VanPriceCard = (props:{imageUrl?:string,title?:string,price?:number,type?:string}) => {
  
  return (
    <div className='flex flex-col max-w-xs '>
        <div className=''><img src={props.imageUrl} alt="van image" className='max-w-xs max-h-96 object-cover rounded-xl' /></div>
        <div className='flex flex-row justify-between my-5'>
            <div className='text-xl font-extrabold'>{props.title}</div>
            <div className='text-xl font-bold'>$ {props.price}<span className='text-base font-normal'> /day</span></div>
        </div>
        <div><button type='button' className={`py-2 px-3 rounded-md text-lg font-bold text-light-yellow ${props.type==='Simple'?'bg-orange-bg':props.type==='Rugged'?'bg-dark-green':'bg-btn-black'}`}>{props.type}</button></div>


    </div>
  )
}

export default VanPriceCard