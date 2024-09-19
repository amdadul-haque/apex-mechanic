'use client'
import { Button, Input } from '@/components/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Newsletter = (props: Props) => {
  const [email, setEmail] = React.useState('')
  return (
    <div className='py-24 md:py-28 xl:py-32'>
      <div className='layout'>
        <div className='w-full bg-white mt-[5%] text-black-0 rounded-2xl flex flex-col md:flex-row justify-between gap-y-5 gap-x-10 px-2 md:px-8 xl:pl-16'>
          <div className='w-full min-h-[200px] md:w-1/2 relative flex justify-center'>
            <div className='absolute bottom-0 top-[-20%]'>
              <Image
                src="/images/home/request-demo.png"
                alt="request-demo"
                height={500}
                width={500}
                className="h-full w-auto mx-auto"
              />
            </div>
          </div>
          <div className='w-full md:w-1/2 py-5 xl:py-24'>
            <h3 className='h3'>Ready to Improve Your Online Customer Experience?</h3>
            <div className='w-full mt-5 mb-4 flex justify-between relative'>
              <input
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full block py-3 px-5 border border-slate-200 rounded-full focus:outline-none focus:border-primary/80 transition duration-300'
              />
              <Button 
                buttonText='Request a Demo'
                className='absolute bg-primary-lighter whitespace-nowrap border-none flex items-center h-full right-0'
              />
            </div>
            <p className='font-medium'>Get a Question? <Link href="/contact" className='text-primary-lighter'>Contact us</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Newsletter }