// path: @/pages/logout.tsx

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

import { ACCESS_TOKEN_KEY } from '../config/storageKey';
import { profileState } from '../states/profile';

// remove token from local storage
const Logout: NextPage = () => {
  const router = useRouter();
  const setProfile = useSetRecoilState(profileState);

  localStorage.removeItem(ACCESS_TOKEN_KEY);
  setProfile({
    email: '',
    name: '',
    token: '',
    twitterHandle: '',
  });

  useEffect(() => {
    toast.success('You have been logged out successfully', {
      toastId: 'logout',
    });
  }, []);

  router.push('/');
  return null;
};

export default Logout;
