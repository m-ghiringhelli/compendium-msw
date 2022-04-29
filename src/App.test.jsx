import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { act } from 'react-dom/test-utils';

describe('App', () => {
  it('renders a list of characters/quotes that are filterable', async () => {
    act(() => {
      render(<App />);
    });
    screen.getByText(/loading/i);
    await screen.findAllByText(/simpson/i);
    const search = screen.getByRole('textbox');
    userEvent.type(search, 'homer');
    const result = await screen.findAllByAltText(/homer/i);
    expect(result.length).toEqual(2);
  })
})