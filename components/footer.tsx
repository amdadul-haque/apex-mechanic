import React from 'react'
import { Button } from './core'
import { socials } from '@/data'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary '>
      <div className='w-full h-20 md:h-32 bg-white rounded-b-[30px] md:rounded-b-[60px]'></div>
      <div className='layout py-10'>
        <div className='flex flex-col gap-y-8 md:flex-row justify-between items-center'>
          <div>
            <div className='flex justify-start md:justify-end items-center gap-3 md:gap-4'>
              {socials.map((item, index) => (
                <Link key={index} href={item.link} passHref>
                  <span className='bg-white/10 border border-white/10 rounded-full text-white text-base md:text-lg flex justify-center items-center w-10 md:w-12 aspect-square hover:bg-white/30 hover:border-white/50 transition duration-300'>{item?.icon}</span>
                </Link>
              ))}
            </div>
          </div>
          <div><p className='text-sm md:text-base text-white leading-normal text-center'> © {new Date().getFullYear()} Apex Mechanic Inc.</p></div>
          <div className='flex gap-5'>
            <Button
              secondary
              buttonText='Terms of Service'
              buttonLink='/'
              className='text-sm mdt:text-base'
            />
            <Button
              secondary
              buttonText='Privacy Policy'
              buttonLink='/'
              className='text-sm mdt:text-base'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }