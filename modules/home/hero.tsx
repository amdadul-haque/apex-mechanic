'use client'
import { Button } from '@/components/core'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Hero = (props: Props) => {
  return (

    <div className='hero pt-[88px] flex items-center'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='w-full py-16 md:py-20 xl:pt-[124px] xl:pb-[102px] flex flex-col-reverse md:flex-row justify-between gap-y-10'
      >
        <div className='w-full md:w-1/2 flex items-center'>
          <div className='w-[90%] max-w-[640px] ml-auto md:pr-5 lg:pr-10 xl:pr-20'>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl font-medium !leading-[1]'>Boost your shop sales and save time.</h1>
            <p className='text-base md:text-lg mt-5 md:mt-6 xl:mt-8 mb-7 md:mb-8 xl:mb-10 text-[#A9D7FF]'>Streamline your repair shop with online scheduling and <span className='text-white'>instant appointment requests</span>—no more back-and-forth needed. Capture new business 24/7 while reducing your phone call interruptions. </p>
            <Button
              buttonText='Request free demo'
              buttonLink='/contact'
              secondary
              className='tracking-wide !text-lg !bg-white !text-black-1 hover:scale-[1.02] hover:!text-lg hover:!text-white hover:!bg-primary-light'
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 relative right-0 pl-[10%] md:pl-0'>
          <Image
            src='/images/home/hero/hero-right.svg'
            width={600}
            height={600}
            alt='hero'
            className='w-full'
          />
        </div>
      </motion.div >
    </div>
  )
}

export { Hero }