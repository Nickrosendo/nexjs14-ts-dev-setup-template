/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelloWorld } from '@root/components/HelloWorld';

describe('HelloWorld component tests', () => {
  it('should render without crashing', () => {
    render(<HelloWorld message={'foo'} />);

    const element = screen.getByTestId('HelloWorld');

    expect(element).toBeInTheDocument();
  });
});
