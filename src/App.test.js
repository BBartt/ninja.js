import React from 'react';

import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

import { dummyData } from './dummyData/dummyData';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App rows={[]} rowsPerPage={5} />);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<App rows={[]} rowsPerPage={5} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders 5 rows', () => {
    const wrapper = mount(<App rows={dummyData} rowsPerPage={5} />);

    expect(wrapper.find('tr').length).toBe(5);
  });

  it('filters rows based on input', () => {
    const wrapper = mount(<App rows={dummyData} rowsPerPage={5} />);

    wrapper.find('input').simulate('change', { target: { value: '.us' } });

    expect(wrapper.find('tr').length).toBe(1);
  });

  it('display "no data" row when no record', () => {
    const wrapper = mount(<App rows={dummyData} rowsPerPage={5} />);

    wrapper
      .find('input')
      .simulate('change', { target: { value: 'lorem ipsum dolor' } });

    expect(wrapper.find('td').text()).toContain('No data');
    expect(wrapper.find('tr').length).toBe(1);
  });
});
