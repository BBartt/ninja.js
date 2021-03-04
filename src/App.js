import React from 'react';
import DataTable from './DataTable';

import { dummyData } from './dummyData/dummyData';

import './scss/app.scss';

function App() {
  return (
    <div className="container mt-3">
      <DataTable data={dummyData} rowsPerPage={5} />
    </div>
  );
}

export default App;
