import React from 'react';
import Layout from '../components/common/Layout';
import Feedback from '../components/About/Feedback';

export default function Home() {
  return (
    <Layout seoTitle='Home'>
      <div>This is home page</div>
      <Feedback />
    </Layout>
  );
}
