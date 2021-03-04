import React from 'react';

import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Pagination from './';

import { dummyData } from '../../dummyData/dummyData';

describe('<Pagination />', () => {
  it('renders without crashing', () => {
    shallow(
      <Pagination
        currentPageNumber={1}
        totalNumberOfPages={10}
        onClick={() => {}}
      />
    );
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Pagination
          currentPageNumber={1}
          totalNumberOfPages={10}
          onClick={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders 10 PaginationPageNumbers', () => {
    const wrapper = mount(
      <Pagination
        currentPageNumber={1}
        totalNumberOfPages={10}
        onClick={() => {}}
      />
    );

    expect(wrapper.find('li.page-item').length).toBe(10);
  });
});
