import Button from "@/src/components/Button";
import { NextPage } from "next";

const CaseAreaContent: NextPage = () => {
  return (
    <div className="flex gap-[10px] justify-center">
      {/* Plaintiff */}
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

      {/* Defendant */}
      <div className="w-[360px] min-h-[734px] rounded-2xl p-5 bg-primary-200 flex flex-col gap-6">
        <div className="flex gap-[10px]">
          <div className="rounded-lg w-[130px] h-10 bg-primary-300 flex justify-center items-center">
            <span className="text-[#F5F5F5] text-[20px] leading-[30px] font-bold">Defendant</span>
          </div>
          <div className="flex flex-col justify-start items-start w-[180px]">
            <span className="text-[#F5F5F5] text-sm font-bold break-all">0x860488D4a93944868252a00a57dE241c0D69fbd8</span>
            <span className="text-[#F5F5F5] text-sm font-medium">Not registered</span>
          </div>
        </div>
        <div className="rounded-2xl p-5 bg-[#F5F5F5]">
          <div className="flex flex-col justify-center items-center min-h-[490px] gap-5">
            <div className="min-h-[30px] text-[20px] leading-[30px] font-medium text-[#313131]">No Response</div>
            <div className="text-sm font-medium text-[#8D8D8D] text-center">
              Share this trial so the defendant <br /> can be notified.
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button
              variant="secondary"
            >
              <a
                href={`https://twitter.com/intent/tweet?url=https://jury-dao-web.vercel.app/case/${1}/&hashtags=EthTokyo2023,JuryDAO,AttendNow`}
                target="_blank"
                rel="noreferrer"
              >
                Share this trial on twitter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseAreaContent;