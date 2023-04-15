import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { profileState } from '@/src/states/profile';

import Button from '../Button';
import NoSSR from '../NoSSR';

const HeaderUserInfo: React.FC = () => {
  const router = useRouter();
  const profile = useRecoilValue(profileState);
  return (
    <NoSSR>
      <div className="flex items-center gap-0">
        <p
          className={clsx([
            'text-sm text-gray-200 tracking-tight mr-2 hidden xl:block',
            profile.token && 'text-gray-400',
          ])}
        >
          {!profile.token && 'Please Login to get started'}
          {profile.token && (
            <>
              Welcome, <b>{profile.name}</b>
            </>
          )}
        </p>

        {!profile.token && (
          <Link
            href="/login"
            className="px-3 xl:px-4 py-2 rounded-2xl hover:bg-gray-50 mr-1 xl:mr-2 tracking-tighter xl:tracking-normal"
          >
            Login
          </Link>
        )}
        {!profile.token && (
          <Button
            variant="gradient"
            onClick={() => router.push('/signup')}
            className="tracking-tighter xl:tracking-normal"
          >
            Sign Up
          </Button>
        )}
      </div>
    </NoSSR>
  );
};

export default HeaderUserInfo;
