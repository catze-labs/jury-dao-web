import Button from "@/src/components/Button";
import Layout from "@/src/components/Layout";
import { NextPage } from "next";
import Image from "next/image";

const JuryDefendantPage: NextPage = () => {
  return (
    <Layout className="bg-primary-300" mainClassName="my-[80px] h-[180vh]">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-[50px]">
          <h1 className="text-[#F5F5F5] text-[32px] leading-[48px] font-bold text-center">Defense</h1>
          <div className="w-[360px] min-h-[734px] rounded-2xl p-5 bg-primary-200 flex flex-col gap-5">
            <div className="flex gap-[10px]">
              <div className="rounded-lg w-[130px] h-10 bg-primary-300 flex justify-center items-center">
                <span className="text-[#F5F5F5] text-[20px] leading-[30px] font-bold">Plaintiff</span>
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="text-[#F5F5F5] text-sm font-bold">Aiiiden</span>
                <span className="text-[#F5F5F5] text-sm font-medium">@aiiiden0</span>
              </div>
            </div>
            <div className="rounded-lg p-5 bg-[#F5F5F5] text-sm font-medium text-[#313131]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique sagittis urna, ut semper sapien luctus eu. Maecenas maximus dui quis tellus cursus, non rhoncus massa lobortis. Vestibulum ullamcorper aliquam mauris, in volutpat lorem accumsan eu. Praesent pretium maximus justo a molestie. Vestibulum vulputate tincidunt ipsum non tempus. Phasellus a nibh vel dolor venenatis iaculis. Fusce vehicula egestas est, vitae euismod sem. Cras tortor dui, vestibulum quis consectetur vel, auctor sit amet sem. Praesent nec lacus id nisl mattis porttitor et eget velit. Nulla nibh lorem, ultrices feugiat auctor id, ornare tempus diam. Integer in dui et lectus semper lobortis. Quisque non pretium felis, vitae dictum libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce suscipit porta nisi ac molestie.
            </div>
            <div className="rounded-lg p-5 bg-[#F5F5F5] flex flex-col gap-[10px]">
              <h1 className="text-[#313131] text-sm font-bold">Reference Links</h1>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#313131] font-medium">
                  #1:&nbsp;
                  <a href="https://www.google.com" target="_blank" rel="noreferrer" className="text-[#006AE5]">
                    https://www.google.com
                  </a>
                </span>
                <span className="text-sm text-[#313131] font-medium">
                  #2:&nbsp;
                  <a href="https://www.google.com" target="_blank" rel="noreferrer" className="text-[#006AE5]">
                    https://www.google.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <label className="flex flex-col gap-[5px]">
            <span className="text-[#F5F5F5] font-medium text-sm">Please write your defense*</span>
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
    </Layout>
  );
}

export default JuryDefendantPage;