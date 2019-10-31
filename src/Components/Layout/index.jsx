import React from 'react';
import Sidebar from '../Sidebar';
import './layout.css';

function Layout() {
  return (
    <div className="layout">
      <div className="content">This will be the main content</div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default Layout;
