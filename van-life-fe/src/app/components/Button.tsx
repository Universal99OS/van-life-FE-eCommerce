import React from 'react'

const Button = (props:{name:string,active?:boolean}) => {
  return (
    <button className={`${props.active?'bg-orange-bg text-light-yellow hover:border-2 hover:border-border-orange hover:text-black hover:bg-transparent':'border-2 border-border-orange hover:bg-orange-bg hover:text-light-yellow'} rounded-full px-5 py-1 `}>{props.name}</button>
  )
}

export default Button