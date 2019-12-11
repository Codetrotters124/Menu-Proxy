import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FindTable from '../client/src/Components/FindTable.jsx';

describe('FindTable', () => {
  it('should have a button', () => {
    // const onButtonClick = sinon.spy();
    const wrapper = shallow(<FindTable />);
    // wrapper.find('button').simulate('click');
    // expect(onButtonClick).to.have.property('callCount', 1);
    expect( wrapper.find('button').text()).equal('Find Table');
  });
});