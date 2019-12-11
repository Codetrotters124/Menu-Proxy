import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Time from '../client/src/Components/Time.jsx';

describe('Time', () => {
  it('show Time text', () => {
    const wrapper = shallow(<Time />);
    expect(wrapper.find('span').text()).equal('Time ');
  });
});