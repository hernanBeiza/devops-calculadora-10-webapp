import { render, screen } from '@testing-library/react';
import Resultado from './Resultado';

test('renders learn react link', () => {
  render(<Resultado />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
