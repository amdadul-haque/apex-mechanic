import React from 'react'

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
]

const CoreFeatures = (props: Props) => {
  return (
    <div className='py-20 md:py-24 xl:py-28'>
      <div className='layout'>
        <h3 className="h3 text-center !text-white">Core Features</h3>
        <div className='flex justify-center flex-wrap gap-5 mt-10'>
          {coreFeatures.map((item, index) => (
            <div key={index} className='w-full sm:w-[45%] lg:w-[31.5%] xl:w-[405px] flex-shrink-0'>
              <div className='bg-white text-black-1 rounded-xl p-5 flex flex-col items-center justify-center gap-5 py-10 xl:py-0 xl:gap-10 w-full sm:h-[270px] xl:h-[350px]'>
                <img src={item.icon} alt='icon' className='w-16 h-16 lg:size-[88px]' />
                <p className='text-center w-[80%] mx-auto text-base md:text-lg font-medium leading-snug'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export { CoreFeatures }