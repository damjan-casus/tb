import { render, screen } from '@testing-library/react';
import App from './App';

test('renders taskbox list header', () => {
  render(<App />);
  const headerElement = screen.getByText(/taskbox/i);
  expect(headerElement).toBeInTheDocument();
});
