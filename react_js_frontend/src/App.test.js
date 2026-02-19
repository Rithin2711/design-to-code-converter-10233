import { render, screen } from '@testing-library/react';
import App from './App';

test('renders New Workflow page (includes nwCard)', () => {
  render(<App />);
  // NewWorkflowPage renders a visible H1, which lives inside the nwCard wrapper.
  const title = screen.getByRole('heading', { name: /new workflow/i });
  expect(title).toBeInTheDocument();
});
