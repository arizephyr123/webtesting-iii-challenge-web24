import React from 'react';
// * includes render from @testing-lib/react
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
afterEach(rtl.cleanup);

test("Dashboard renders correctly", () =>{
const wrapper = rtl.render(<Dashboard/>);
expect(wrapper.baseElement).toMatchSnapshot();
});

