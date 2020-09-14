import React from 'react';
import ReactDOM from 'react-dom';
import DriverManagement from './DriverManagement';
import { shallow } from 'enzyme'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DriverManagement />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<DriverManagement />);
});
