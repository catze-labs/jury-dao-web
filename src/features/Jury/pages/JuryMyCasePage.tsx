import { NextPage } from 'next';

import Layout from '@/src/components/Layout';

import ListHeader from '../components/list/ListHeadet';
import MyCaseList from '../components/list/MyCaseList';

const JuryMyCasePage: NextPage = () => {
  return (
    <Layout mainClassName="bg-primary-400">
      <div className="py-14">
        <ListHeader />
        <MyCaseList />
      </div>
    </Layout>
  );
};

export default JuryMyCasePage;
