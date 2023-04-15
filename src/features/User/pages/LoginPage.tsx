import { NextPage } from "next";
import ConnectWallet from "../components/ConnectWallet";
import SignError from "../components/SignError";
import ChainWarning from "../components/ChainWarning";
import Signing from "../components/Signing";
import WelcomeMessage from "../components/WelcomeMessage";

const LoginPage: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-primary-400 flex flex-col justify-center items-center">
      <h1 className="text-[32px] leading-[48px] font-bold text-white">Login</h1>
      <ConnectWallet />
      {/* <ChainWarning /> */}
      {/* <Signing /> */}
      {/* <SignError /> */}
    </div>
  );
};

export default LoginPage;