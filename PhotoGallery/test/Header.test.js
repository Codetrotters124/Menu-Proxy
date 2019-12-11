import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../client/src/components/Header';

configure({adapter: new Adapter()});

describe('<Header />', () => {
  it('show <Header/> render', () => {
    const component = shallow(<Header/>);
    expect(component).toHaveLength(1);
  });

  it('show header element exist', () => {
    const component = shallow(<Header/>);
    expect(component.find('header')).toHaveLength(1);
  })

  it('show header element exist', () => {
    const component = shallow(<Header/>);
    expect(component.find('div').children()).to.have.length(15);
  })
})