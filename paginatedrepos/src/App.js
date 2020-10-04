import React from 'react';
import { RepoTable} from './components/RepoTable';
import { PageHeader } from './components/PageHeader';
import './App.css';

export const App = () => {
  return (
    <div>
      <PageHeader />
      <RepoTable /> 
    </div>
  );
}

export default App;
