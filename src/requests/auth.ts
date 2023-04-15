import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';

import client from './client';

export function useAuthAPI() {
  const nonce = async (walletAddress: string) => {
    try {
      const { data } = await client.post<{
        nonce: string;
      }>('/nonce', {
        walletAddress,
      });

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return Promise.reject(error.response?.data);
      }
    }
  };

  const login = async (walletAddress: string, signature: string) => {
    try {
      const { data } = await client.post<{
        accessToken: string;
      }>('/auth', {
        walletAddress,
        signature,
      });

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return Promise.reject(error.response?.data);
      }
    }
  };

  const fetchProfile = async () => {
    try {
      const { data } = await client.get<Profile>('/profile');

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return Promise.reject(error.response?.data);
      }
    }
  };

  return { nonce, login, fetchProfile };
}

export function useNonce(walletAddress: string) {
  const { nonce } = useAuthAPI();

  const { data, error, status } = useQuery(
    ['nonce', walletAddress],
    () => nonce(walletAddress),
    {
      enabled: !!walletAddress,
      refetchOnWindowFocus: false,
    },
  );

  return { data, error, status };
}

export function useLogin(
  onSuccess: (accessToken: string) => void,
  onError: (error: ServerError) => void,
) {
  const { login } = useAuthAPI();

  const { mutate, isLoading, isSuccess } = useMutation(
    (params: { walletAddress: string; signature: string }) =>
      login(params.walletAddress, params.signature),
    {
      onError,
      onSuccess: (data) => {
        onSuccess(data?.accessToken || '');
      },
    },
  );

  return { mutate, isLoading, isSuccess };
}

export function useProfile() {
  const { fetchProfile } = useAuthAPI();

  const { data, error, status } = useQuery(['auth', 'profile'], fetchProfile, {
    refetchOnWindowFocus: false,
  });

  return { data, error, status };
}
