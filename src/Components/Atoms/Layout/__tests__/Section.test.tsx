import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Section from '../Section';

describe('Section Component', () => {
  it('Section renders', () => {
    const { container } = render(
      <Section collapsable={true} openInitially={true} title='TITLE' dataTestId='DATA-TEST-ID'>
        <div id='CHILD1' />
        <div id='CHILD2' />
      </Section>,
    );

    expect(container).toMatchSnapshot();

    const item = screen.getByTestId('DATA-TEST-ID');

    userEvent.click(item);

    expect(container).toMatchSnapshot();

    userEvent.click(item);

    expect(container).toMatchSnapshot();
  });

  it('Section renders collapsable closed by default', () => {
    const { container } = render(
      <Section collapsable={true} openInitially={false} title='TITLE' dataTestId='DATA-TEST-ID'>
        <div id='CHILD1' />
        <div id='CHILD2' />
      </Section>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Section renders not collapsable', () => {
    const { container } = render(
      <Section collapsable={false} openInitially={true} title='TITLE' dataTestId='DATA-TEST-ID'>
        <div id='CHILD1' />
        <div id='CHILD2' />
      </Section>,
    );

    expect(container).toMatchSnapshot();

    const item = screen.getByTestId('DATA-TEST-ID');

    userEvent.click(item);

    expect(container).toMatchSnapshot();
  });

  it('Section renders not collapsable', () => {
    const { container } = render(
      <Section collapsable={false} openInitially={false} title='TITLE' dataTestId='DATA-TEST-ID'>
        <div id='CHILD1' />
        <div id='CHILD2' />
      </Section>,
    );

    expect(container).toMatchSnapshot();
  });
});
