import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'

type Props = {}

const sectionData = [
  {
    title: "Keep Track of All Your Estimates and Invoices in One Place",
    image: "/images/home/invoice/1/right.png",
    features: [
      {
        icon: "/images/home/invoice/1/1.svg",
        title: "",
        description: "Easily search and access past estimates and invoices anytime you need."
      },
      {
        icon: "/images/home/invoice/1/2.svg",
        title: "",
        description: "Organize everything in one centralized system, no more scattered paperwork or files."
      },
      {
        icon: "/images/home/invoice/1/3.svg",
        title: "",
        description: "Improve accuracy and efficiency by generating and managing records digitally."
      },
    ]
  },
  // {
  //   title: "Convert online leads into loyal customers.",
  //   image: "/images/home/leads-to-customers.png",
  //   features: [
  //     "Receive professionally edited photos for your Apex Auto profile increasing your daily bookings. ",
  //     "Increase business by offering digital estimates on your Apex Auto shop profile. ",
  //     "Integrated messaging allows new customers to reach you after hours with estimates and inquiries."
  //   ]
  // }
]

const Invoice = (props: Props) => {
  return (
    <div className='bg-white rounded-[40px] md:rounded-[60px] py-20 md:py-24 xl:py-28'>
      <div className='layout'>
        <div className='flex flex-col gap-10 md:gap-16 xl:gap-28'>
          {
            sectionData.map((item, index) =>
              <>
                <div className={`flex flex-col-reverse justify-between gap-y-10 gap-x-12 items-center ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className='w-full md:w-1/2 flex flex-col gap-5 md:gap-6 xl:gap-7'>
                    <h3 className='text-black-1 text-2xl md:text-3xl xl:text-[40px] !leading-[1.2] max-w-[80%] font-semibold'>{item?.title}</h3>
                    {/* <div className='flex flex-col gap-3 md:gap-4 xl:gap-5'>
                      {item.features.map((item, index) => (
                        <div key={index} className='flex gap-3'>
                          <div className='w-7 min-w-[24px] pt-2'>
                            <FaCircleCheck className='text-black-1 text-2xl' />
                          </div>
                          <p className='text-slate-700 text-base md:text-lg font-medium'>{item}</p>
                        </div>
                      ))}
                    </div> */}
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
                  <div className='w-full md:w-1/2 '>
                    <div className='border bg-slate-100 flex justify-center py-12 rounded-xl'>
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
  )
}

export { Invoice }