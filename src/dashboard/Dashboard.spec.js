import React from 'react';
// * includes render from @testing-lib/react
import * as rtl from '@testing-library/react';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import { get } from 'https';
afterEach(rtl.cleanup);

test("Dashboard renders correctly", () =>{
const wrapper = rtl.render(<Dashboard/>);
expect(wrapper.baseElement).toMatchSnapshot();
});

//tests that Display component rendered and defaults to open and unlocked
test("Display component rendered, defaults open and unlocked", () => {
    const { getByText } = rtl.render(<Dashboard/>);
    expect(getByText(/unlocked/i));
    expect(getByText(/open/i));
});

test("Controls component is rendered", () => {
const { getAllByText } = rtl.render(<Dashboard/>);
expect(getAllByText(/gate/i)).toHaveLength(2);
});
