import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import App from '../client/src/Components/App.jsx';

describe('App', () => {
  it('show App text', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('div').children()).to.have.length(15);
  });
});