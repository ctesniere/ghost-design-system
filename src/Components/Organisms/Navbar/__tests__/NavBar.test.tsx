import React from 'react';
import { render } from '@testing-library/react';

import NavBar from '../Navbar';

describe('NavBar Component', () => {
  it('NavBar renders', () => {
    const onSearchMock = jest.fn();

    const { container } = render(
      <NavBar
        brand={{ logoSource: 'logoSource', redirection: 'redirection', alt: 'alt' }}
        navButtons={[{ label: 'button' }]}
        navIcons={[{ label: 'button', icon: ['fal', 'icons'] }]}
        searchBar={{ onSearch: onSearchMock, placeholder: 'placeholder' }}
      />,
    );

    expect(container).toMatchSnapshot();
    expect(onSearchMock).not.toBeCalled();
  });

  it('NavBar renders without buttons or icons', () => {
    const onSearchMock = jest.fn();

    const { container } = render(
      <NavBar brand={{ logoSource: 'logoSource', redirection: 'redirection', alt: 'alt' }} />,
    );

    expect(container).toMatchSnapshot();
    expect(onSearchMock).not.toBeCalled();
  });

  it('NavBar renders with variations', () => {
    const onSearchMock = jest.fn();

    const { container } = render(
      <NavBar
        brand={{ logoSource: 'logosource' }}
        navButtons={[{ label: 'button', icon: ['fal', 'icons'] }]}
        navIcons={[{ label: 'button' }]}
      />,
    );

    expect(container).toMatchSnapshot();
    expect(onSearchMock).not.toBeCalled();
  });
});
