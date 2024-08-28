'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../core'

type Props = {}

const Navbar = (props: Props) => {
  const links = [
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/login' },
  ]
  const pathName = usePathname()
  return (
    <header className='py-5 border-b border-b-slate-200'>
      <nav className='layout flex justify-between items-center'>
        <Link href='/'>
          <Image
            src={"./images/logo.svg"}
            width={120}
            height={44}
            alt="logo"
            className='w-[120px] h-auto'
          />
        </Link>
        <div className='flex gap-12 items-center'>
          <ul className='flex gap-12'>
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <span className={`text-gray-500 hover:text-primary transition text-lg font-medium ${pathName.includes(link?.href) && 'text-primary'} `}>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Button
            buttonText='Reques Free Demo'
            buttonLink='/login'
          />
        </div>
      </nav>
    </header>
  )
}

export { Navbar }