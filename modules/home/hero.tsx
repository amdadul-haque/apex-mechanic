import { Button } from '@/components/core'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (

    <div className='hero pt-[88px] flex items-center'>
      <div className='w-full py-16 md:py-20 xl:pt-[124px] xl:pb-[102px] flex flex-col-reverse md:flex-row justify-between gap-y-10'>
        <div className='w-full md:w-1/2 flex items-center'>
          <div className='w-[90%] max-w-[640px] ml-auto md:pr-5 lg:pr-10 xl:pr-20'>
            <h1 className='text-4xl lg:text-5xl xl:text-6xl font-medium !leading-[1]'>Boost your shop sales and save time.</h1>
            <p className='text-base md:text-lg mt-5 md:mt-6 xl:mt-8 mb-7 md:mb-8 xl:mb-10'>Online scheduling for your shop with instant appointment requests. No back and forth needed. Capture new business after closing hours and increase customer satisfaction.</p>
            <Button
              buttonText='Start Free Trial'
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

      </div>
    </div>
  )
}

export { Hero }