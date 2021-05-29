import React from 'react';
import { Link } from 'gatsby';
import HeaderImage from '../components/common/HeaderImage';
import Layout from '../components/common/Layout';

const Error = props => {
  return (
    <Layout seoTitle='Error'>
      <HeaderImage title='Error' url={'/404'} />
      <h1
        style={{ textAlign: 'center', fontFamily: "'Nunito', sans-serif", marginBottom: '100px' }}>
        You seem lost! Go back to{' '}
        <Link to='/' style={{ color: '#f3c701' }}>
          Home
        </Link>{' '}
        maybe ?
      </h1>
    </Layout>
  );
};

export default Error;
