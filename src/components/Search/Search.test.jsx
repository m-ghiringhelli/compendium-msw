import { screen, render, getByPlaceholderText, getByTestId } from '@testing-library/react'
import Search from './Search';

test('Should render search component', () => {
  render(<Search />)
  const container = screen.getByTestId('search');
  const search = screen.getByPlaceholderText(/find quotes/i);
  const button = screen.getByRole('button');
  
  expect(container).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(container).toContainElement(search);
  expect(container).toContainElement(button);

  screen.debug();
})