import Navigation from '@/components/Navigation'
import React from 'react'

const AboutLayout = ({children}) => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-2'><Navigation /></div>
        <div className='col-span-10'>{children}</div>
    </div>
  )
}

export default AboutLayout