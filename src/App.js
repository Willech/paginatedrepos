import React from 'react';
import { RepoTable} from './components/RepoTable';
import { PageHeader } from './components/PageHeader';
import './App.css';

const PAGE_TITLE = 'Recent BTC prices';
const ITEMS_PER_PAGE = 20; 

export const App = () => {
  return (
    <div>
      <PageHeader title={PAGE_TITLE} />
      <RepoTable pageLimit={ITEMS_PER_PAGE} /> 
    </div>
  );
}

export default App;
