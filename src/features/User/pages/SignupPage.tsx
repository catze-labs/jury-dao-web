import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';
import * as Yup from 'yup';

import { useSignup } from '@/src/requests/auth';

import ConnectWallet from '../components/ConnectWallet';
import Signing from '../components/Signing';
import PhaseCircle from '../components/signup/PhaseCircle';
import SignupForm from '../components/signup/SignupForm';

export const Phase = {
  Wallet: 0,
  Signing: 1,
  Info: 2,
};

const signupScheme = Yup.object({
  email: Yup.string().email(),
  name: Yup.string().required(),
  signature: Yup.string().required(),
  twitterHandle: Yup.string(),
  // walletAddress: Yup.string().required(),
});

const SignupPage: NextPage = () => {
  const router = useRouter();
  const [phase, setPhase] = useState<number>(0);

  const { mutate, isLoading } = useSignup(
    (data) => {
      toast.success('Signed up successfully');
      router.push('/login');
    },
    (error) => {
      toast.error(error.message);
    },
  );

  const { address } = useAccount();

  const { setValue, handleSubmit, watch, formState } =
    useForm<Auth.SignupPayload>({
      defaultValues: {
        email: '',
        name: '',
        signature: '',
        twitterHandle: '',
      },
      resolver: yupResolver(signupScheme),
    });

  const onSubmit = (formData: Auth.SignupPayload) => {
    mutate({
      ...formData,
      walletAddress: address as string,
    });
  };

  return (
    <div className="w-full h-[120vh] bg-primary-300 flex justify-center items-center">
      <div className="w-[412px] h-[490px] flex flex-col">
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-bold text-[32px] leading-[48px] text-center">
            Sign up
          </h1>
          <PhaseCircle phase={phase} />
        </div>

        <form
          className="flex justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          {phase === Phase.Wallet && (
            <ConnectWallet
              onConnect={(address) => {
                setPhase(Phase.Signing);
              }}
            />
          )}
          {phase === Phase.Signing && (
            <Signing
              onSign={(signature) => {
                if (signature) {
                  setPhase(Phase.Info);
                  setValue('signature', signature);
                }
              }}
            />
          )}
          {phase === Phase.Info && <SignupForm setValue={setValue} />}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
