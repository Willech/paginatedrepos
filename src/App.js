import React from 'react';
import { RepoTable} from './components/RepoTable';
import { PageHeader } from './components/PageHeader';
import './App.css';

export const App = () => {
  return (
    <div>
      <PageHeader />
      <RepoTable pageLimit={20}/> 
    </div>
  );
}

export default App;
