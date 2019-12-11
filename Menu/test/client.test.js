import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/src/App.jsx';

const Hello = () => (
  <div>hello</div>
)

describe('<MyComponent />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find(div)).to.have.lengthOf(0);
  });

});