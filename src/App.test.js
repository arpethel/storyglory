import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StoryGlory link', () => {
  render(<App />);
  const linkElement = screen.getByText(/StoryGlory/i);
  expect(linkElement).toBeInTheDocument();
});
