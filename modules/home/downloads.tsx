'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Downlaods = (props: Props) => {
  return (
    <div className='bg-white rounded-t-[30px] md:rounded-t-[60px] pt-20 md:pt-32'>
      <div className='layout'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-8'
        >
          <div className='bg-slate-800 p-5 pt-10 md:p-10 lg:p-5 xl:p-10 !pb-0 rounded-xl md:rounded-3xl xl:rounded-[30px] flex flex-col md:flex-row gap-y-10 gap-x-5'>
            <div className='md:w-3/5'>
              <Image
                src='/images/logo-white.svg'
                alt='logo'
                height={40}
                width={150}
                className='h-10 w-auto'
              />
              <h4 className='text-xl md:text-2xl xl:text-[28px] font-bold my-3 !leading-none'>Mechanic app built for shop owners</h4>
              <p className='text-slate-400 text-sm md:text-base !leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic </p>
              <div className='flex gap-2 mt-6'>
                <Link href='/' >
                  <Image
                    src="/images/home/play-store.svg"
                    alt="play-store"
                    height={47}
                    width={150}
                    className='h-10 w-auto'
                  />
                </Link>
                <Link href=''>
                  <Image
                    src="/images/home/app-store.svg"
                    alt="play-store"
                    height={47}
                    width={150}
                    className='h-10 w-auto'
                  />
                </Link>
              </div>
            </div>
            <div className='md:w-2/5 flex justify-center md:justify-end'>
              <Image
                src="/images/home/downloads/shop-owners.png"
                alt="play-store"
                height={47}
                width={150}
                className='h-full w-full object-contain object-bottom'
              />
            </div>

          </div>
          <div className='bg-primary p-5 pb-10 md:p-10 lg:p-5 xl:p-10 !pt-0 md:!pb-0 lg:px-0 xl:pb-0 rounded-xl md:rounded-3xl xl:rounded-[30px] flex flex-col md:flex-row gap-y-10 gap-x-5'>
            <div className='md:w-2/5 flex justify-center md:justify-end '>
              <Image
                src="/images/home/downloads/car-owners.png"
                alt="play-store"
                height={47}
                width={150}
                className='h-full w-full object-contain object-top'
              />
            </div>
            <div className='md:w-3/5 md:pt-10'>
              <Image
                src='/images/logo-white.svg'
                alt='logo'
                height={40}
                width={150}
                className='h-10 w-auto'
              />
              <h4 className='text-xl md:text-2xl xl:text-[28px] font-bold my-3 !leading-none'>Auto app made for car owners</h4>
              <p className='text-slate-400 text-sm md:text-base !leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam hic </p>
              <div className='flex gap-2 mt-6'>
                <Link href='/' >
                  <Image
                    src="/images/home/play-store.svg"
                    alt="play-store"
                    height={47}
                    width={150}
                    className='h-10 w-auto'
                  />
                </Link>
                <Link href=''>
                  <Image
                    src="/images/home/app-store.svg"
                    alt="play-store"
                    height={47}
                    width={150}
                    className='h-10 w-auto'
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export { Downlaods }