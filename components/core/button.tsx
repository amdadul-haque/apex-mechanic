import Link from 'next/link';
import React, { ReactNode } from 'react'

type Props = {
  buttonText?: string;
  buttonLink?: string;
  secondary?: boolean;
  className?: string;
  newTab?: boolean;
  onClick?: () => void;
}

const Button = ({ buttonText, buttonLink, secondary, className, newTab }: Props) => {
  return (
    <Link
      href={buttonLink ?? ''}
      target={newTab ? '_blank' : '_self'}
      className={`inline-block px-4 py-2 md:px-5 lg:px-6 xl:px-8 md:py-3 font-medium text-sm rounded-full cursor-pointer ${secondary ?
        'bg-white/10 text-slate-200 border border-slate-200 hover:bg-primary-light hover:text-white hover:border-white'
        :
        'bg-primary-light/90 text-white hover:bg-primary-light hover:scale-[1.02] border-2 border-primary-light'} 
        transition duration-300 text-center ${className}`}
    >
      {buttonText}
    </Link>
  )
}

export { Button }