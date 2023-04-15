import { atom } from 'recoil';

import localStorageEffect from '@/src/states/localStorageEffect';

export const profileStateKey = '@profile';

export const profileState = atom<{
  name: string;
  email: string;
  twitterHandle: string;
  token: string | null;
}>({
  key: profileStateKey,
  default: {
    name: '',
    email: '',
    twitterHandle: '',
    token: null,
  },
  effects: [localStorageEffect(profileStateKey)],
});
