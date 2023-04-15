import Button from "@/src/components/Button";
import { NextPage } from "next";

interface WelcomeMessageProps {
  pageType: 'signup' | 'login'
}

const WelcomeMessage: NextPage<WelcomeMessageProps> = ({
  pageType
}) => {
  return (
    <div className={`w-full min-h-screen ${pageType === 'signup' ? 'bg-primary-300' : 'bg-primary-400'} flex justify-center items-center`}>
      <div className="w-[412px] h-[490px] flex flex-col gap-[112px]">
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-bold text-[32px] leading-[48px] text-center">
            {pageType === 'signup' && 'Sign up'}
            {pageType === 'login' && 'Login'}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-20">
          {
            pageType === 'signup' && (
              <span className="text-[20px] leading-[30px] font-medium text-[#F5F5F5] text-center">
                You&apos;ve signed up successfully. <br />
                Welcome to Jury DAO <span className="text-gradient-type-1">John Doe</span>!
              </span>
            )
          }
          {
            pageType === 'login' && (
              <span className="text-[20px] leading-[30px] font-medium text-[#F5F5F5] text-center">
                Welcome back <span className="text-gradient-type-1">John Doe</span>. <br />
                Good to see you again!
              </span>
            )
          }
          <div className="flex flex-col gap-6 justify-center items-center w-[412px]">
            <Button
              variant="primary"
              className="w-full h-[70px] flex justify-center text-[20px] leading-[30px] font-medium"
            >
              Prosecute
            </Button>
            <Button
              variant="primary"
              className="w-full h-[70px] flex justify-center text-[20px] leading-[30px] font-medium"
            >
              Go To Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeMessage;