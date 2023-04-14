import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '../Button';

const HeaderUserInfo: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-0">
      <p className="text-sm text-gray-200 tracking-tight mr-2 hidden xl:block">
        Please Login to get started
      </p>
      <Link
        href="/login"
        className="px-3 xl:px-4 py-2 rounded-2xl hover:bg-gray-50 mr-1 xl:mr-2 tracking-tighter xl:tracking-normal"
      >
        Login
      </Link>
      <Button
        variant="gradient"
        onClick={() => router.push('/signup')}
        className="tracking-tighter xl:tracking-normal"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default HeaderUserInfo;
