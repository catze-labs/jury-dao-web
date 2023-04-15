interface Profile {
  id: number;
  createdAt: string;
  updatedAt: string;
  walletAddress: string;
  name: string;
  email: string;
  twitterHandle: string;
}

interface AuthSignupPayload {
  walletAddress: string;
  signature: string;
  name: string;
  email: string;
  twitterHandle: string;
}

namespace Auth {
  type SignupPayload = AuthSignupPayload;
}
