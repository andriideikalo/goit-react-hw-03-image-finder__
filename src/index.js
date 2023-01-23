import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';
import './components/Styles/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
