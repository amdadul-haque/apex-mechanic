import Link from 'next/link';
import React, { ReactNode } from 'react'

type Props = {
  buttonText?: string;
  buttonLink?: string;
  secondary?: boolean;
  className?: string;
  newTab?: boolean;
}

const Button = ({ buttonText, buttonLink, secondary, className, newTab }: Props) => {
  return (
    <Link
      href={buttonLink ?? ''}
      target={newTab ? '_blank' : '_self'}
      className={`inline-block font-TT-firs px-4 py-2 md:px-5 md:py-3 font-medium text-sm rounded-full cursor-pointer ${secondary ? 'bg-white/10 text-slate-200 border border-slate-200 hover:bg-primary hover:text-white hover:border-white' : 'bg-primary/90 text-white hover:bg-primary hover:scale-[1.02] border-2 border-primary'} transition duration-300 text-center ${className} `}
    >
      {buttonText}
    </Link>
  )
}

export { Button }