import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Layout from './Components/Layout';

function App() {
  return (
    <Layout />
  );
}

const DocumentNode = document.getElementById('app');
ReactDOM.render(<App />, DocumentNode);
