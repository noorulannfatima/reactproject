import React, { useState } from 'react'

const Contact = () => {
const [data , setData]=useState(0 );
const addvalue = ()=>{
setData(data+1)
}
const decrease = ()=>{
  setData(data-1)
  }
  return (
    <div className='text-center m-auto d-flex'>
    <button onClick={decrease} className='btn btn-primary mx-3'>Add</button>
    {data}
    <button onClick={addvalue} className='btn btn-primary mx-3'>Add</button>
    </div>
  )
}


export default Contact

