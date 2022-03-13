import * as React from 'react';
import type { NextPage } from 'next';

import { PageContainer } from '@/components/PageContainer';

const Home: NextPage = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl text-primary">Hello World</h1>
      <p className="text-secondary">bla bla bla</p>
    </PageContainer>
  );
};

export default Home;
