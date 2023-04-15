import React from 'react';
import { UseFormSetValue } from 'react-hook-form';

import Button from '@/src/components/Button';
import Input from '@/src/components/Input';

const SignupForm: React.FC<{
  setValue: UseFormSetValue<AuthSignupPayload>;
}> = ({ setValue }) => {
  return (
    <div className="flex flex-col gap-[38px] mt-[38px] justify-center">
      <h1 className="text-[20px] leading-[30px] font-medium text-[#F5F5F5] text-center">
        Join Jury DAO
      </h1>
      <div className="flex flex-col gap-[29px]">
        <div className="flex flex-col gap-[15px]">
          <Input
            variant="form"
            label="Name"
            placeholder="Full Name"
            onChange={(e) => setValue('name', e.target.value)}
          />
          <Input
            variant="form"
            label="Email (Optional)"
            placeholder="Email"
            onChange={(e) => setValue('email', e.target.value)}
          />
          <Input
            variant="form"
            label="Twitter Handle (Optional)"
            placeholder="@ Twitter Handle"
            onChange={(e) => setValue('twitterHandle', e.target.value)}
          />
        </div>
        <Button variant="primary" className="flex justify-center h-[70px]">
          <span className="text-[20px] leading-[30px]">Sign Me Up</span>
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
