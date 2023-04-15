import { NextPage } from 'next';

import Layout from '@/src/components/Layout';

import Audience from '../components/detail/Audience';
import CaseDetail from '../components/detail/CaseDetail';
import VoteDetail from '../components/detail/VoteDetail';
import WIP from '@/src/components/WIP';

const JuryDetailPage: NextPage = () => {
  return (
    <Layout mainClassName="bg-primary-400 min-h-content pb-10 xl:pb-20 flex flex-col gap-5">
      <WIP />
      <div className="container flex flex-col gap-5">
        <article>
          <CaseDetail />
        </article>
        <article>
          <VoteDetail />
        </article>
        {/* <article>
          <Audience />
        </article> */}
      </div>
    </Layout>
  );
};

export default JuryDetailPage;
