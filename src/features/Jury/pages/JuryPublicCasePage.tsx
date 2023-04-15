import { NextPage } from 'next';

import Layout from '@/src/components/Layout';

import ListHeader from '../components/list/ListHeadet';
import MyCaseList from '../components/list/MyCaseList';
import WIP from '@/src/components/WIP';

const JuryPublicCasePage: NextPage = () => {
  return (
    <Layout mainClassName="bg-primary-400">
      <WIP />
      <div className="py-14">
        <ListHeader isPublic />
        <MyCaseList />
      </div>
    </Layout>
  );
};

export default JuryPublicCasePage;
