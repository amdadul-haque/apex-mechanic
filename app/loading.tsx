import Image from 'next/image'
import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='z-10 h-screen w-[100%] relative'>
      <div className='absolute w-full h-full top-0 flex justify-center items-center'>
        <Image
          src='/images/loading.svg'
          alt='loading'
          height={150}
          width={150}
          className='h-40 w-auto'
        />
      </div>
    </div>
  )
}

export default Loading