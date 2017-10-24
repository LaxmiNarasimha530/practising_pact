import React from 'react';
import test from 'blue-tape';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button } from './';

configure({ adapter: new Adapter() });

test('Button should render correct text', (t) => {
  const wrapper = shallow(<Button label="Boo" onclick={() => {}} />);
  const expectedText = 'Boo';
  t.ok(wrapper.text() === expectedText, 'Button renders correct value');
  t.end();
});
