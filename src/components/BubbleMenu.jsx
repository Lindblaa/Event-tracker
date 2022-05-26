import React from 'react'
import { NavLink } from 'react-router-dom'

const BubbleMenu = () => {
  return (
<div>
    <div className='bubble-row row justify-content-between d-none d-sm-flex'>
        <div className='heladiven col-2'>
        <NavLink to='/create'><div className='bubble-div '>
            <p>Skapa event</p>
            </div></NavLink>
        </div>
        <div className='heladiven col-2'>
        <NavLink to='/upcoming'><div className='bubble-div'>
            <p>Kommande</p>
            </div></NavLink>
        </div>
        <div className='heladiven col-2'>
        <NavLink to='/old'><div className='bubble-div '>
           <p>Avslutade</p>
            </div></NavLink>
        </div>
    </div>
</div>
  )
}

export default BubbleMenu