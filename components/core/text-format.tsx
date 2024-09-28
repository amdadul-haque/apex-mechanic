import { termsAndConditions } from '@/constants/terms';
import Link from 'next/link';
import React from 'react';


interface TermSection {
  title: string;
  content: string;
}
type Props = {
  title: string;
  data: TermSection[];
};

// Helper function to handle line breaks and bold text
const formatContent = (content: string) => {
  return content.split('\n').map((segment, index) => {
    // Check if the segment has bold markers (e.g., **bold text**)
    const boldPattern = /\*\*(.*?)\*\*/g;
    const parts = segment.split(boldPattern);

    return (
      <p key={index} className='mt-2'>
        {parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i}>{part}</strong> : part
        )}
      </p>
    );
  });
};

const TextFormat = ({title, data}: Props) => {

  const heading = data[0]
  return (
    <>
      <div className='layout'>
        <div className='py-10 md:py-16'>
          <h1 className='text-4xl md:text-5xl xl:text-6xl font-medium !leading-[1]'>
            {title}
          </h1>
          <div className='my-10 md:my-12 xl:my-16 text-base md:text-lg'>
            {data.slice(0,1).map((term, index) => (
              <div
                key={index}
                className='mb-5'
                id={`${term.title.split(' ').join('-').toLowerCase()}`}
              >
                <h2 className='text-xl md:text-2xl font-bold !leading-none'>
                  {term.title}
                </h2>
                <div className='mt-3'>{formatContent(term.content)}</div>
              </div>
            ))}
          </div>
          {data.slice(1).map((term, index) => (
            <Link
              href={`#${term.title.split(' ').join('-').toLowerCase()}`}
              key={index}
              className='text-base md:text-lg text-primary block mt-5'
            >
              {term.title}
            </Link>
          ))}

          <div className='mt-10 md:mt-12 xl:mt-16 text-base md:text-lg'>
            {data.slice(1).map((term, index) => (
              <div
                key={index}
                className='mb-5'
                id={`${term.title.split(' ').join('-').toLowerCase()}`}
              >
                <h2 className='text-xl md:text-2xl font-bold !leading-none'>
                  {term.title}
                </h2>
                <div className='mt-3'>{formatContent(term.content)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export {TextFormat}
