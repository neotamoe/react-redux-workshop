import React from 'react';
import Navigation from './Navigation';
import { mount } from 'enzyme';

import {BrowserRouter} from 'react-router-dom';

describe('Navigation Component: ', function () {

  it('implement me', function () {
    expect(true).toBe(true);
  });

  let nav;

  beforeEach(() =>{
    nav = mount(<BrowserRouter><Navigation /></BrowserRouter>);
  });

  it('should instantiate the Navigation Component', function () {
    expect(nav).toHaveLength(1);
  });

});
