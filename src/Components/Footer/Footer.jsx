import React from 'react'
import FooterNav from './FooterNav'
import FooterCopyright from './FooterCopyright'

export default function Footer() {
  return (
    <div className='flex-col sm:flex-row flex justify-center sm:justify-between items-center h-32 container space-y-5 sm:space-y-0'>
      <FooterNav/>
      <FooterCopyright/>
    </div>
  )
}
