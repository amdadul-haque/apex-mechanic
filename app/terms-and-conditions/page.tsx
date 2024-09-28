import { TextFormat } from '@/components/core';
import { termsAndConditions } from '@/constants/terms';
import React from 'react';

type Props = {};

const TermsAndConditionsPage = (props: Props) => {
  return (
    <>
    <TextFormat
      title='Terms and Conditions'
      data={termsAndConditions}
    />
    </>
  );
};

export default TermsAndConditionsPage;
