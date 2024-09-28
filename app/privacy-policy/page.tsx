import { TextFormat } from '@/components/core'
import { privacyPolicy } from '@/constants/privacy'
import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <div className=''>
      <TextFormat
        title='Privacy Policy'
        data={privacyPolicy}
      />
    </div>
  )
}

export default PrivacyPolicyPage