import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CheckboxInput, IToggleEntry } from '..';

const options: Array<IToggleEntry> = [
  { label: 'checkbox label 0', value: 'KEY_0' },
  { label: 'checkbox label 1', value: 'KEY_1', checked: true },
  { label: 'checkbox label 2', value: 'KEY_2', checked: false },
  { label: 'checkbox label 3', value: 'KEY_3', checked: undefined },
  { label: 'checkbox label 4', value: 'KEY_4', highlighted: true },
  { label: 'checkbox label 5', value: 'KEY_5' },
];

jest.mock('@fortawesome/react-fontawesome', () => {
  return {
    FontAwesomeIcon: (props: Record<string, string>) => {
      return <i className='fa' {...props} />;
    },
  };
});

describe('CheckboxInput Component', () => {
  it('CheckboxInput renders with input', async () => {
    const onChangeMock = jest.fn();

    const container = render(<CheckboxInput onChange={onChangeMock} options={options} />);
    expect(container).toMatchSnapshot();
    expect(onChangeMock).toBeCalledTimes(0);
  });

  it('CheckboxInput renders triggers onChange', async () => {
    const onChangeMock = jest.fn();

    const container = render(<CheckboxInput onChange={onChangeMock} options={options} />);

    const firstCheckbox = container.getByTestId(options[0].value);

    userEvent.click(firstCheckbox);
    expect(onChangeMock).toBeCalledTimes(1);
    expect(onChangeMock).toHaveBeenLastCalledWith([
      { label: 'checkbox label 0', value: 'KEY_0', checked: true },
      ...options.slice(1),
    ]);

    userEvent.click(firstCheckbox);
    expect(onChangeMock).toBeCalledTimes(2);
    expect(onChangeMock).toHaveBeenLastCalledWith([
      { label: 'checkbox label 0', value: 'KEY_0', checked: false },
      ...options.slice(1),
    ]);
  });

  it('CheckboxInput renders does not trigger onChange when disabled', async () => {
    const onChangeMock = jest.fn();

    const container = render(<CheckboxInput onChange={onChangeMock} disabled options={options} />);

    const firstCheckbox = container.getByTestId(options[0].value);

    userEvent.click(firstCheckbox);
    expect(onChangeMock).toBeCalledTimes(0);

    userEvent.click(firstCheckbox);
    expect(onChangeMock).toBeCalledTimes(0);
  });

  it('CheckboxInput renders does not trigger onChange when readOnly', async () => {
    const onChangeMock = jest.fn();

    const container = render(<CheckboxInput onChange={onChangeMock} readOnly options={options} />);

    const firstCheckbox = container.getByTestId(options[0].value);

    userEvent.click(firstCheckbox);
    expect(onChangeMock).toBeCalledTimes(0);

    userEvent.click(firstCheckbox);
    expect(onChangeMock).toBeCalledTimes(0);
  });

  it('CheckboxInput renders highlighted', async () => {
    const onChangeMock = jest.fn();

    const container = render(<CheckboxInput onChange={onChangeMock} readOnly highlighted options={options} />);
    expect(container).toMatchSnapshot();
    expect(onChangeMock).toBeCalledTimes(0);
  });

  it('CheckboxInput renders with no options', async () => {
    const onChangeMock = jest.fn();

    const container = render(<CheckboxInput onChange={onChangeMock} readOnly highlighted options={[]} />);
    expect(container).toMatchSnapshot();
    expect(onChangeMock).toBeCalledTimes(0);
  });
});
