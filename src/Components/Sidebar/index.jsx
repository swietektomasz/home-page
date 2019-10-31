import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div>
      <ul className="list">
        <li className="item">
          <a
            className="link"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Youtube
          </a>
        </li>
        <li className="item">
          <a
            className="link"
            href="https://mail.google.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Gmail
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
