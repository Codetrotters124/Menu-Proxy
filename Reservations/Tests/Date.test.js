import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Date from '../client/src/Components/Date.jsx';

describe('Date', () => {
  it('show date text', () => {
    const wrapper = shallow(<Date />);
    expect(wrapper.find('span').text()).equal('Date ');
  });
});