import React from 'react'
import FooterNav from './FooterNav'
import FooterCopyright from './FooterCopyright'

export default function Footer() {
  return (
    <div className='flex justify-between items-center h-32 container'>
      <FooterNav/>
      <FooterCopyright/>
    </div>
  )
}
