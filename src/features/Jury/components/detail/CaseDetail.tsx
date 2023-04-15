import CaseArea from "./CaseArea";
import CaseTimeline from "./CaseTimeline";

const CaseDetail: React.FC = () => {
  return (
    <div className="flex">
      <CaseArea />
      <CaseTimeline />
    </div>
  );
};

export default CaseDetail;
