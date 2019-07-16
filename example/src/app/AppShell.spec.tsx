import React from 'react';
import ReactDOM from 'react-dom';

import { AppShell } from './AppShell';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppShell />, div);
  ReactDOM.unmountComponentAtNode(div);
});
