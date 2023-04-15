import CaseCard from './CaseCard';

const PublicCaseList: React.FC = () => {
  return (
    <div className="container min-h-content py-8 px-4">
      <ul className="flex flex-col gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}>
            <CaseCard />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicCaseList;
