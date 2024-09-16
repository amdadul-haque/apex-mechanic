import { homepageFeatures as features } from '@/data'
import Image from 'next/image'
import React from 'react'

type Props = {}

const FeaturesSection = (props: Props) => {
  return (
    <>
    <div className='bg-white rounded-t-[40px] md:rounded-t-[80px]'>
      <div className='layout'>
        <div className='flex flex-col gap-10 md:gap-0'>
          {
            features.map((item, index) =>
              <>
                <div className='flex flex-col-reverse md:flex-row justify-between gap-y-10 gap-x-12 items-center first:py-16'>
                  <div className='w-full md:w-1/2 flex flex-col gap-5 md:gap-6 xl:gap-7'>
                    <h3 className='text-blakc-1 text-2xl md:text-3xl xl:text-[40px] leading-[1.2] font-TT-firs font-semibold'>{item?.title}</h3>
                    <div className='flex flex-col gap-3 md:gap-4 xl:gap-5'>
                      {item.features.map((item, index) => (
                        <div key={index} className='flex gap-3'>
                          <div className='w-7 min-w-[24px] pt-2'>
                            <Image
                              src={item.icon}
                              alt='icon'
                              height={24}
                              width={24}
                              className='size-6'
                            />
                          </div>
                          <p className='text-slate-700 text-base md:text-lg font-medium'>{item?.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 md:border md:border-t-0 md:border-r-0 p-0 md:px-10 xl:py-20'>
                    <div className='border bg-slate-100 px-10 py-12 pb-0 rounded-xl'>
                      <Image
                        src={item?.image}
                        alt='image'
                        height={500}
                        width={500}
                        className=''
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
        </div>

      </div>
      </div>
    </>
  )
}

export default FeaturesSection