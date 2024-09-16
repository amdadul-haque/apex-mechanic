import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'

type Props = {}

const sectionData = [
  {
    title: "Efficiently generate estimates or invoices.",
    image: "/images/home/invoice.png",
    features: [
      "Create, manage, and send estimates or invoices in one centralized system.",
      "Improve your customer experience by sending estimates or invoices straight to their phones.",
      "Easily track your customer’s vehicles, past appointments and service history."
    ]
  },
  {
    title: "Convert online leads into loyal customers.",
    image: "/images/home/leads-to-customers.png",
    features: [
      "Receive professionally edited photos for your Apex Auto profile increasing your daily bookings. ",
      "Increase business by offering digital estimates on your Apex Auto shop profile. ",
      "Integrated messaging allows new customers to reach you after hours with estimates and inquiries."
    ]
  }
]

const Invoice = (props: Props) => {
  return (
    <div className='bg-white rounded-[40px] md:rounded-[60px] py-20 md:py-24 xl:py-28'>
      <div className='layout'>
        <div className='flex flex-col gap-10 md:gap-16 xl:gap-28'>
          {
            sectionData.map((item, index) =>
              <>
                <div className={`flex flex-col-reverse justify-between gap-y-10 gap-x-12 items-center ${index % 2 == 0? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className='w-full md:w-1/2 flex flex-col gap-5 md:gap-6 xl:gap-7'>
                    <h3 className='text-black-1 text-2xl md:text-3xl xl:text-[40px] leading-[1.2] font-TT-firs font-semibold'>{item?.title}</h3>
                    <div className='flex flex-col gap-3 md:gap-4 xl:gap-5'>
                      {item.features.map((item, index) => (
                        <div key={index} className='flex gap-3'>
                          <div className='w-7 min-w-[24px] pt-2'>
                            <FaCircleCheck className='text-black-1 text-2xl' />
                          </div>
                          <p className='text-slate-700 text-base md:text-lg font-medium'>{item}</p>
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