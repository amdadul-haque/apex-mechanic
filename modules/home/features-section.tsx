import { homepageFeatures as features } from '@/data'
import Image from 'next/image'
import React from 'react'

type Props = {}

const FeaturesSection = (props: Props) => {
  return (
    <>
      <div className='bg-white rounded-[40px] md:rounded-[60px] py-20 md:py-0'>
        <div className='layout'>
          <div className='flex flex-col gap-10 md:gap-0'>
            {
              features.map((item, index) =>
                <>
                  <div className='flex flex-col-reverse md:flex-row justify-between gap-y-10 items-center'>
                    <div className='w-full md:w-1/2 flex flex-col gap-5 md:gap-6 xl:gap-7 md:pr-8 xl:pr-12'>
                      <h3 className='text-black-1 text-2xl md:text-3xl xl:text-[40px] leading-[1.2] font-TT-firs font-semibold'>{item?.title}</h3>
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
                    <div className={`w-full md:w-1/2 md:border md:border-t-0 md:border-r-0 p-0 md:pl-10 xl:py-20 ${index == 0 && 'xl:pt-40'} ${index == features?.length - 1 && 'xl:pb-32'}`}>
                      <div className={`border bg-slate-100 rounded-xl ${index === 0 ? 'p-0 shadow' : 'px-10 py-12 pb-0'}`}>
                        <Image
                          src={item?.image}
                          alt='image'
                          height={500}
                          width={500}
                          className='w-full h-auto rounded-xl'
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

export { FeaturesSection }