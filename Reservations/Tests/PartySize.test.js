import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import PartySize from '../client/src/Components/PartySize.jsx';

describe('PartySize', () => {
  it('renders partySize array', () => {
    const wrapper = shallow(<PartySize />);
    expect(wrapper.find('span').text()).equal('Party Size ');
  });
});