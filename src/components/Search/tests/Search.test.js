import React from 'react';
import { fireEvent, screen, render } from '@testing-library/react';

import Search from '../Search';

describe('Input value', () => {
  render(<Search />);
  const searchInput = screen.getByRole('searchbox');

  test('renders search box', () => {
    expect(searchInput).toBeInTheDocument();
  });

  test('update input value on change', () => {
    fireEvent.change(searchInput, { target: { value: 'Game of Thrones' } });
    expect(searchInput.value).toBe('Game of Thrones');
  });
});
