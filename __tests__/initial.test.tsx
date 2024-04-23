import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelloWorld } from '@root/src/components/HelloWorld';

describe('HelloWorld component tests', () => {
  it('should render without crashing', () => {
    render(<HelloWorld message={'foo'} />);

    const element = screen.getByTestId('HelloWorld');

    expect(element).toBeInTheDocument();
  });
});
