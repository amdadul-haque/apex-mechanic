'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const coreFeatures = [
  {
    icon: '/images/home/core-features/1.svg',
    description: 'Reduce phone call interruptions with instant two-way messaging with your customers.',
  },
  {
    icon: '/images/home/core-features/2.png',
    description: 'Instant appointment requests from your website or Google profile.',
  },
  {
    icon: '/images/home/core-features/3.png',
    description: 'Acquire new customers easily and get discovered on the Apex Auto App for Car Owners',
  },
  {
    icon: '/images/home/core-features/4.png',
    description: 'Improve customer satisfaction.',
  },
  {
    icon: '/images/home/core-features/5.png',
    description: 'Quickly produce estimates and invoices.',
  },
  {
    icon: '/images/home/core-features/6.png',
    description: 'Manage your shop’s workflow from your computer or phone. ',
  },
]

const CoreFeatures = (props: Props) => {
  return (
    <div className='py-20 md:py-24 xl:py-28'>
      <div className='layout'>
        <h3 className="h3 text-center !text-white">Core Features</h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'
        >
          {coreFeatures.map((item, index) => (
              <div className='bg-white text-black-1 rounded-xl flex flex-col items-center justify-center gap-5 md:gap-6 xl:gap-8 w-full px-8 py-16 xl:px-10 xl:py-24'>
                <Image
                  src={item.icon}
                  alt='icon'
                  width={88}
                  height={88}
                  className='size-16 lg:size-[88px]'
                />
                <p className='text-center text-lg md:text-xl xl:text-2xl font-medium !leading-[1.1]'>
                  {item.description}
                </p>
              </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export { CoreFeatures }