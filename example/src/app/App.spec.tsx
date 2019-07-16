import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import { App } from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const AppWithRouter = withRouter(App);
  ReactDOM.render(<AppWithRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
