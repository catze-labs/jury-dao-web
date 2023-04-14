import { NextPage } from 'next';

import Layout from '@/src/components/Layout';
import DashboardVisual from '@/src/features/Landing/components/inDashboard/DashboardVisual';
import Button from '@/src/components/Button';
import CaseSummary from '../components/CaseSummary';
import RecentJuries from '../components/RecentJuries';
import LandingArea from '../../Landing/components/layout/LandingArea';

const DashboardPage: NextPage = () => {
  return (
    <Layout
      className="bg-primary-white"
      mainClassName="container py-6 overflow-hidden"
    >
      <LandingArea />
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="basis-80 h-[300px] lg:basis-[410px] lg:h-[700px]">
          <DashboardVisual />
        </div>
        <div className="flex-grow flex flex-col gap-10">
          <CaseSummary />
          <RecentJuries />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
