'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from './core'
import { FaBars, FaTimes } from 'react-icons/fa'

type Props = {}


const Navbar = (props: Props) => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: 'https://app.apexmechanic.com/', isNewTab: true },
  ]
  const pathName = usePathname();
  const currentRoute = pathName.split('/')[1];

  const isHomePage = currentRoute === '' || currentRoute === '/';
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  return (
    <>
      <header className={`py-3 md:py-5 border-b z-20 ${isHomePage ? 'bg-primary relative md:absolute md:bg-transparent  z-20 top-0 left-0 w-full border-b-white/20' : 'bg-white relative border-slate-200'}`}>
        <nav className='layout flex justify-between items-center'>
          <Link href='/'>
            <Image
              src={isHomePage ? '/images/logo-white.svg' : '/images/logo.svg'}
              width={120}
              height={44}
              alt="logo"
              className='w-[120px] h-auto'
            />
          </Link>
          <div className='gap-12 items-center hidden md:flex'>
            <ul className='flex gap-8 xl:gap-12'>
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} target={link?.isNewTab ? '_blank' : '_self'}>
                    <span className={`transition text-lg font-medium 
                      ${currentRoute === link?.href.replace(/^\//, '') ?
                        isHomePage ? 'text-white' : 'text-primary'
                        : isHomePage ? 'text-slate-300 hover:text-white' : 'text-gray-500 hover:text-primary/70'}
                        `}>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button
            buttonText='Request free demo'
            buttonLink='/contact'
            className='tracking-wide'
            isHomePage={isHomePage}
          />
          <button
            className={`md:hidden ${isHomePage ? 'text-white' : 'text-slate-500'}`}
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {showMobileNav ? <FaTimes className='text-2xl ' /> : <FaBars className='text-2xl ' />}
          </button>

        </nav>
      </header >

      <div className={`absolute z-10 top-0 left-0 w-full h-screen bg-black-1/50 md:hidden ${showMobileNav ? 'block' : 'hidden'}`}
        onClick={() => setShowMobileNav(false)}
      >
        <ul className={`pl-[5%] pt-24 bg-white relative !z-[9] mx-auto flex flex-col gap-2 pb-8 ${showMobileNav ? 'h-auto' : 'h-0'} transition duration-300`}>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>
                <span className={`text-gray-500 hover:text-primary transition text-lg font-medium ${pathName.includes(link?.href) && 'text-primary'} `}>{link.name}</span>
              </Link>
            </li>
          ))}
          <li>
            <Button
              buttonText='Request free demo'
              buttonLink='/contact'
              isHomePage={isHomePage}
            />
          </li>
        </ul>
      </div>
    </>
  )
}

export { Navbar }