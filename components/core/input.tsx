import React from 'react'

type Props = {
  label?: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  className?: string;
}

const Input = ({ label, placeholder, type, value, onChange, isRequired ,className }: Props) => {
  return (
    <div className='w-full'>
      {label && <h2 className='text-slate-800 leading-none text-base mb-3'>{label} <span className='text-red-500 text-xl'>{isRequired && '*'}</span></h2>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border border-slate-300 outline-none focus:outline-none focus:border-primary/80 transition duration-300 rounded-lg p-2 px-3  ${className}`}
      />
    </div>
  )
}

export { Input }