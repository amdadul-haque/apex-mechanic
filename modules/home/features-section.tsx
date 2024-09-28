'use client'
import { homepageFeatures as features } from '@/data'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const FeaturesSection = (props: Props) => {
  return (
    <>
      <div className='bg-white rounded-[40px] lg:rounded-[60px] py-20 lg:py-0'>
        <div className='layout'>
          <div className='flex flex-col gap-10 lg:gap-0'>
            {
              features.map((item, index) =>
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-col-reverse lg:flex-row justify-between gap-y-10 items-center'
                  >
                    <div className='w-full lg:w-1/2 lg:pr-8 xl:pr-[72px]'>
                      <h3 className='h3'>{item?.title}</h3>
                      <div className='flex flex-col gap-3 lg:gap-4 xl:gap-5 mt-6 xl:mt-10'>
                        {item.features.map((item, index) => (
                          <div key={index} className='flex gap-3 xl:gap-5'>
                            <div className='w-7 min-w-[24px] pt-1'>
                              <Image
                                src={item.icon}
                                alt='icon'
                                height={24}
                                width={24}
                                className='size-6'
                              />
                            </div>
                            <p className='text-slate-700 text-base lg:text-lg font-medium !leading-[1.44]'>{item?.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`w-full lg:w-1/2 xl:border xl:border-t-0 xl:border-r-0 p-0 lg:pl-[50px] py-16 xl:py-[50px] ${index == 0 && 'py-16 xl:pt-44'} ${index == features?.length - 1 && 'xl:pb-[100px]'}`}>
                      <div className={`border bg-slate-100 rounded-xl ${index === 0 ? 'p-0 shadow my-24 xl:my-16' : 'px-10 py-12 pb-0'}`}>
                        <Image
                          src={item?.image}
                          alt='image'
                          height={500}
                          width={500}
                          className='w-full h-auto rounded-xl'
                        />
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
          </div >
        </div>
      </div>
    </>
  )
}

export { FeaturesSection }