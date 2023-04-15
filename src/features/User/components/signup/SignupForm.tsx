import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import { NextPage } from "next";

const SignupForm: NextPage = () => {
  return (
    <div className="flex flex-col gap-[38px] mt-[38px] justify-center">
      <h1 className="text-[20px] leading-[30px] font-medium text-[#F5F5F5] text-center">Join Jury DAO</h1>
      <div className="flex flex-col gap-[29px]">
        <div className="flex flex-col gap-[15px]">
          <Input variant="form" label="Name" placeholder="Full Name" />
          <Input variant="form" label="Email (Optional)" placeholder="Email" />
          <Input variant="form" label="Twitter Handle (Optional)" placeholder="@ Twitter Handle" />
        </div>
        <Button
          variant="primary"
          className="flex justify-center h-[70px]"
        >
          <span className="text-[20px] leading-[30px]">Sign Me Up</span>
        </Button>
      </div>
    </div>

  );
}

export default SignupForm;