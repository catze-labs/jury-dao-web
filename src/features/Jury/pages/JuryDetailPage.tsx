import { NextPage } from 'next';

import Layout from '@/src/components/Layout';

import Audience from '../components/detail/Audience';
import CaseDetail from '../components/detail/CaseDetail';
import VoteDetail from '../components/detail/VoteDetail';

const JuryDetailPage: NextPage = () => {
  return (
    <Layout mainClassName="bg-primary-400 min-h-content py-10 xl:py-20">
      <div className="container flex flex-col gap-5">
        <article>
          <CaseDetail />
        </article>
        <article>
          <VoteDetail />
        </article>
        <article>
          <Audience />
        </article>
      </div>
    </Layout>
  );
};

export default JuryDetailPage;
