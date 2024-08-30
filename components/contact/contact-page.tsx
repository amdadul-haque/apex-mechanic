'use client'
import { socials } from '@/data'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button, Input } from '../core'
import { FaRegCircle, FaRegDotCircle } from 'react-icons/fa';

const options = [
  { id: 'software', label: 'I use a software to manage appointment' },
  { id: 'pen-paper', label: 'Pen and paper' },
  { id: 'custom-software', label: 'Software' },
  { id: 'others', label: 'Others' },
];


type Props = {}

const Contact = (props: Props) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [shopName, setShopName] = useState<string>('')
  const [appointmentSystem, setAppointmentSystem] = useState<string>('')
  const [howDidYouHear, setHowDidYouHear] = useState<string>('')
  const [comments, setComments] = useState<string>('')

  const [selectedOption, setSelectedOption] = useState('');
  const [customSoftware, setCustomSoftware] = useState('');
  return (
    <div>
      <div className='layout pt-12 md:pt-16 xl:pt-20'>
        <div className='flex flex-col md:flex-row items-stretch gap-8'>
          <div className='bg-primary rounded-lg md:rounded-xl xl:rounded-[16px] w-full md:w-[296px] md:max-w-[296px] px-8 py-10 text-white flex flex-col justify-between'>
            <div className='flex flex-col gap-5 md:gap-8'>
              <div>
                <h3 className='text-2xl md:text-[28px] xl:text-[32px] font-semibold font-TT-firs leading-none'>Get In Touch</h3>
                <p className='text-base md:text-lg text-white/90 mt-3'>Please fill out the following form and one of our team members will get in touch with you as soon as possible.</p>
              </div>
              <div>
                <h4 className='text-base md:text-lg font-semibold'>Chat with us</h4>
                <p className='text-white/90'>Our team is here to help.</p>
                <Link href={'mailto:support@apexmechanic.com'}>support@apexmechanic.com</Link>
              </div>
              <div>
                <h4 className='text-base md:text-lg font-semibold'>Call us</h4>
                <p className='text-white/90'>Mon - Sat from 8am to 7pm</p>
                <Link href={'tel:437-961-8836'}>437-961-8836</Link>
              </div>
            </div>
            <div className=''>
              <h5 className='text-base md:text-lg font-semibold leading-none'>Social media</h5>
              <div className='flex justify-start items-center gap-3 md:gap-4 mt-3'>
                {socials.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <span className='bg-white border border-white/10 rounded-full text-primary text-base flex justify-center items-center w-8 aspect-square hover:bg-white/30 hover:border-white/50 transition duration-300'>{item?.icon}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div>
              {name}
            </div>
            <form
              action=""
              className='w-full flex flex-col gap-5 md:gap-6 xl:gap-8'
            >
              <div className='flex flex-col md:flex-row w-full gap-5'>
                <Input
                  label='Name'
                  placeholder='John'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='!w-full'
                />
                <Input
                  label='Phone'
                  placeholder='(123) 456-7890'
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='!w-full'
                />

              </div>

              <Input
                label='Shop Name'
                placeholder='Apex Mechanic'
                type='text'
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className='w-full'
              />

              <div className=''>
                <h2 className='text-slate-800 leading-none text-base'>Please describe your current appointment system</h2>
                <div className='mt-4 flex flex-col gap-3'>
                  {options.map((option) => (
                    <React.Fragment key={option.id}>
                      <div
                        className={`flex items-center rounded-lg cursor-pointer transition-colors`}
                        onClick={() => setSelectedOption(option.id)}
                      >
                        {selectedOption === option.id ? (
                          <FaRegDotCircle className="text-blue-500 text-xl mr-3" />
                        ) : (
                          <FaRegCircle className="text-gray-400 text-xl mr-3" />
                        )}
                        <span className={`text-sm ${selectedOption === option.id ? 'font-medium' : ''}`}>{option.label}</span>
                      </div>
                      {selectedOption === option.id && option.id === 'custom-software' && (
                        <div className="ml-7">
                          <Input
                            placeholder="Add software name you're using"
                            type='text'
                            value={customSoftware}
                            onChange={(e) => setCustomSoftware(e.target.value)}
                            className='w-full max-w-xs'
                          />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className='w-full'>
                <h2 className='text-slate-800 leading-none text-base'>How did you hear about us?</h2>
                <select
                  name=""
                  id=""
                  className={`w-full border border-slate-300 outline-none focus:outline-none focus:border-primary/80 transition duration-300 rounded-lg p-2 mt-3`}
                >
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Google">Google</option>
                  <option value="Friend">Friend</option>
                </select>
              </div>

              <div className='w-full'>
                <h2 className='text-slate-800 leading-none text-base'>Question or comments</h2>
                <textarea name="" id=""
                  className={`w-full border border-slate-300 outline-none focus:outline-none focus:border-primary/80 transition duration-300 rounded-lg p-2 mt-3 h-32`}
                >

                </textarea>
              </div>

              <div>
                <Button
                  buttonText='Submit'
                  className='w-full sm:w-[219px] text-base md:text-lg font-medium'
                />
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Contact }