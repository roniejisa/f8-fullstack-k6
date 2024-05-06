import React from 'react'
import {useLocation} from 'react-router-dom'
const ThankYou = () => {
    const location = useLocation();
    console.log(location);
  return (
    <div>
        <h1 className='text-2xl font-bold'>Cảm ơn đã đặt hàng</h1>
    </div>
  )
}

export default ThankYou