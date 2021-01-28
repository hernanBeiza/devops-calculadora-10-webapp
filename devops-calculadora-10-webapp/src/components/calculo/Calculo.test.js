import { render, screen } from '@testing-library/react';
import Calculo from './Calculo';

test('renders learn react link', () => {
  render(<Calculo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
