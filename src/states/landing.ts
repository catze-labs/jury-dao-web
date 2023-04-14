import { atom } from 'recoil';

// import localStorageEffect from '@/src/states/localStorageEffect';

export const landingStateKey = '@landing';

export const landingState = atom({
  key: landingStateKey,
  default: true,
  // effects: [localStorageEffect(landingStateKey)],
});
