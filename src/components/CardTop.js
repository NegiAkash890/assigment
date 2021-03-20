import React from 'react'

function CardTop({ icon, heading, text }) {
    return (
        <>
        <div className='d-flex align-items-center justify-content-between p-3 mt-1' style={{height:"50px"}}>
           <p className={icon}> {heading}</p>
           <span className='badge badge-pill badge-success'>{text}</span>
           
        </div>
        </>
    )
}

export default CardTop
