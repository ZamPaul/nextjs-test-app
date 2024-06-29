import Link from 'next/link'
import React from 'react'

// A a W w D d Q q

const Header = () => {
  return (
    <header className="fixed left-1/2 -translate-x-1/2 top-[5vh]">
      <div className="links flex gap-[10px]">
        <Link href={"/"}>
            Home
        </Link>
        <Link href={"/contact"}>
            contact
        </Link>
        <Link href={"/about"}>
            about                  
        </Link>
      </div>
    </header>
  )
}

export default Header
