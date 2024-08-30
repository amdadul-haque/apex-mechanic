'use client'
import { featuresContent } from '@/data';
import { FeatureContentInterface } from '@/models/types';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface TabOption {
  id: number;
  title: string;
}

const tabOptions: TabOption[] = [
  { id: 0, title: 'Convert More <br> Approvals' },
  { id: 1, title: 'Enhance Appointment <br> Management' },
  { id: 2, title: 'Streamline Shop <br> Workflow' },
  { id: 3, title: 'Keep Your Bays Full' },
  { id: 4, title: 'Reduce Phone-Call <br> Interruptions' },
  { id: 5, title: 'Happy Customers' },
  { id: 6, title: 'Effortless Invoicing & <br> Estimating' }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState<TabOption>(tabOptions[0]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 192; // Width of a single tab
      const newPosition = direction === 'left'
        ? Math.max(scrollPosition - scrollAmount, 0)
        : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth);
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const showLeftArrow = scrollPosition > 0;
      const showRightArrow = scrollPosition < container.scrollWidth - container.clientWidth;
      // You can use these booleans to conditionally render arrows if needed
    }
  }, [scrollPosition]);

  const [currentContent, setCurrentContent] = useState<FeatureContentInterface>(featuresContent[0]);
  useEffect(() => {
    setCurrentContent(featuresContent.find((item) => item.id === activeTab.id) || featuresContent[0]);
  }, [activeTab]);

  return (
    <div>
      <div className='layout-narrow pt-16 md:pt-20 lg:pt-24 xl:pt-28'>
        <div className='max-w-[680px] mx-auto flex flex-col items-center'>
          <h2 className='text-slate-950 text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-TT-firs font-bold leading-[1.2] text-center'>
            Get Discovered by car owners who need you
          </h2>
          <p className='text-slate-600 text-center md:text-xl font-medium max-w-[500px] mx-auto mt-4'>
            Apex Mechanic makes it easy to build a strong online presence and connect with local customers.
          </p>
        </div>
        <div className='mt-7 md:mt-9 xl:mt-12 relative'>
          <div
            ref={scrollContainerRef}
            className='w-full overflow-x-auto flex gap-3 relative scrollbar-hide'
            style={{ scrollBehavior: 'smooth' }}
          >
            {tabOptions.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-center rounded-lg text-sm md:text-base font-medium py-2 min-w-[160px] md:min-w-[192px] text-center border border-slate-200 transition duration-300 cursor-pointer ${activeTab.id === item.id ? 'bg-primary border-primary text-white' : 'bg-slate-50 text-slate-500'
                  }`}
                onClick={() => setActiveTab(item)}
              >
                <span dangerouslySetInnerHTML={{ __html: item?.title }} />
              </div>
            ))}
          </div>
          <button
            className='absolute left-0 top-0 w-9 md:w-[46px] h-full bg-slate-100 border border-slate-200 flex items-center justify-center rounded-lg'
            onClick={() => handleScroll('left')}
            style={{ display: scrollPosition > 0 ? 'flex' : 'none' }}
          >
            <FaArrowLeft className='text-primary' />
          </button>
          <button
            className='absolute right-0 top-0 w-9 md:w-[46px] h-full bg-slate-100 border border-slate-200 flex items-center justify-center rounded-lg'
            onClick={() => handleScroll('right')}
            style={{ display: scrollPosition < (scrollContainerRef.current?.scrollWidth || 0) - (scrollContainerRef.current?.clientWidth || 0) ? 'flex' : 'none' }}
          >
            <FaArrowRight className='text-primary' />
          </button>
        </div>
        <div className='mt-5 md:mt-6 xl:mt-8 border border-slate-200 bg-slate-50 rounded-lg px-5 py-6 md:px-6 md:py-8 xl:px-8 xl:py-10'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-8'>
            <div>
              <h3 className='text-slate-950 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-TT-firs font-bold leading-[1.2]'>
                {currentContent?.title}
              </h3>
              <ul className='mt-4 md:mt-5 xl:mt-6'>
                {currentContent?.description.map((item, index) => (
                  <li key={index} className='text-slate-600 text-base md:text-lg font-medium leading-normal'>
                    <span className='text-primary font-bold'>{item.title}</span>
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className='border border-slate-200 bg-slate-100 rounded-lg px-5 pt-5 flex justify-center items-end max-h-[483px]'>
              <Image
                src={currentContent?.image}
                alt={activeTab?.title}
                width={500}
                height={500}
                className='object-contain h-full w-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Features }