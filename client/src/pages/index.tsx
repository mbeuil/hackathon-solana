import * as React from 'react';
import { Column } from 'react-table';
import type { NextPage } from 'next';

import { PageContainer } from '@/components/PageContainer';
import { Table } from '@/components/Table/Table';

interface StatementData {
  col1: string;
  col2: string;
}

const data = [
  {
    col1: 'Hello',
    col2: 'World',
  },
  {
    col1: 'react-table',
    col2: 'rocks',
  },
  {
    col1: 'whatever',
    col2: 'you want',
  },
];

const columns = [
  {
    Header: 'Column 1',
    accessor: 'col1',
  },
  {
    Header: 'Column 2',
    accessor: 'col2',
  },
] as Column<StatementData>[];

const Home: NextPage = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl text-primary">Hello World</h1>
      <p className="text-secondary">bla bla bla</p>
      <Table columns={columns} data={data} />
    </PageContainer>
  );
};

export default Home;
