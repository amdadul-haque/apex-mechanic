'use client'
import { featuresContent } from '@/constants/data';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaCircleCheck } from 'react-icons/fa6';
import { motion } from 'framer-motion';


const Features = () => {

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div>
      <div className='layout'>
        <div className='max-w-[1000px] mx-auto flex flex-col items-center py-12 md:py-16 lg:py-20 xl:py-[100px]'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-slate-950 text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold !leading-[1.2] text-center'
          >
            Manage Your Auto Shop with Ease and Grow Customer Trust
          </motion.h2>
        </div>
        <div className='flex flex-col gap-6 md:gap-8 xl:gap-10'>
          {featuresContent.map((item, index) => (
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}            
            key={index} className='border border-slate-200 rounded-lg md:rounded-xl xl:rounded-2xl py-6 md:py-8 xl:py-10 p-5 md:p-8 xl:p-10'>
              <div className={`w-full flex flex-col-reverse ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-10 lg:gap-16 xl:gap-20`}>
                <div className='w-full '>
                  <h3 className='text-slate-950 text-lg md:text-xl xl:text-2xl font-semibold !leading-[1.16]'>
                    {item?.title}
                  </h3>
                  <ul className='mt-5 md:mt-6 lg:mt-10 xl:mt-[50px] flex flex-col gap-3 lg:gap-4'>
                    {item?.description.map((item, index) => (
                      <li key={index} className='flex'>
                        <div className='min-w-[24px] ]sm:min-w-[32px]'>
                          <FaCircleCheck className='text-primary-light inline lg:text-lg' />
                        </div>
                        <span className='block text-slate-600 text-base lg:text-lg !leading-[1.44]'>
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className='text-slate-600 text-base md:text-lg mt-5 md:mt-6'>{item?.conclusion}</p>
                </div>
                <div className='w-full border border-slate-200 bg-slate-100 rounded-lg md:rounded-xl pt-10 flex justify-center items-end max-h-[483px] relative'>
                  {loading &&
                    <div className='absolute inset-0 flex items-center justify-center h-full w-full bg-slate-100 z-20'>
                      <AiOutlineLoading3Quarters className='text-slate-500 text-6xl animate-spin' />
                    </div>
                  }
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    width={500}
                    height={500}
                    onLoadingComplete={() => setLoading(false)}
                    className='object-contain w-[96%]'
                  />
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  )
}

export { Features }