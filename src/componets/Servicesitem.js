import React from 'react'

function ServicesItem({ image, name}) {
  return (
    <div className='ServicesItem'>
    <div style={{ backgroundImage: `url(${image})`}}> </div>
    <h1> {name}</h1>
   
    </div>
  )
}

export default ServicesItem