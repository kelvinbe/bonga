import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Topbar = () => {
  return (
    <nav className='topbar'>
        
        Topbar
        <Link href='/' className='flex items-center gap-4'>
            <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
            <p className='text-heading3-bold text-light-1 max-xs:hidden'> Bonga </p>

        </Link>
        
        </nav>
  )
}

export default Topbar