import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import Layout from "@/src/components/Layout";
import WIP from "@/src/components/WIP";
import { NextPage } from "next";
import Image from "next/image";

const JuryProsecutePage: NextPage = () => {
  return (
    <Layout
      className="w-full h-[130vh]"
      mainClassName="flex flex-col justify-center items-center bg-primary-300"
    >
      <WIP />
      <div className="flex flex-col gap-5 justify-center items-center my-[80px]">
        <h1 className="text-[32px] leading-[48px] font-bold text-[#F5F5F5]">Prosecute</h1>
        <div className="flex flex-col gap-10">
          <Input variant="form" label="Case Title*" placeholder="Enter case title" className="w-[420px]" />
          <div className="flex flex-col gap-[10px] w-[420px]">
            <div className="gap-[10px] items-end w-[420px] flex">
              <Input
                variant="form"
                label="Who is the defendant?*"
                placeholder="Enter wallet address of prosecutor"
                className="min-w-[291px]"
              />
              <Button
                variant="primary"
                className="flex gap-1 h-10 w-[120px]"
              >
                <span className="text-sm font-medium">Find User</span>
                <Image src="/assets/jury/search-icon.svg" alt="search-icon" width={12} height={12} />
              </Button>
            </div>
            <div className="py-[10px] flex justify-between items-center">
              <span className="text-[#1DC1A4] font-bold text-[20px] leading-[30px]">Username</span>
              <button
                className="px-4 py-2 gap-2.5 w-[63px] h-5 rounded-2xl flex items-center justify-center bg-gray-100 text-black hover:bg-gray-light"
              >
                <span className="text-[#545454] text-[10px] leading-[20px]">Select</span>
              </button>
            </div>
          </div>
          <label className="flex flex-col gap-[5px]">
            <span className="text-[#F5F5F5] font-medium text-sm">Please write your appeal*</span>
            <textarea
              className="placeholder-[#D9D9D9] p-5 rounded-[16px] bg-[#F5F5F5] w-[412px] min-h-[200px]"
              placeholder="Provide details of the incident"
            />
          </label>
          <div className="flex flex-col gap-[5px]">
            <span className="text-[#F5F5F5] font-medium text-sm">Reference links (optional)</span>
            <div className="flex gap-[10px]">
              <input
                placeholder="URL"
                className="w-[370px] h-[55px] rounded-[16px] bg-[#F5F5F5] px-5 py-2.5 placeholder-[#D9D9D9]"
              />
              <div className="flex items-center">
                {/* add button */}
                <Button className="w-10 h-10">+</Button>
                {/* delete button */}
                {/* <Button variant="secondary" className="w-10 h-10">-</Button> */}
              </div>
            </div>
          </div>
          <div className="p-[10px] flex justify-center items-center text-[#1DC1A4] text-center w-[420px]">
            To prosecute, you need to pay 10 BIT for collateral. <br />
            After successful payment, prosecution will be submitted.
          </div>
          <Button
            variant="primary"
            className="flex justify-between w-[420px] h-[70px] px-5 py-[10px] "
          >
            <div className="flex gap-5 items-center">
              <Image src="/assets/jury/mantle-coin.png" alt="mantle-coin" width={40} height={40} />
              <span className="">Pay Collateral</span>
            </div>
            <div className="text-[#092F5C] text-sm font-medium">10 BIT</div>
          </Button>
        </div>
      </div>
    </Layout >
  );
}

export default JuryProsecutePage;