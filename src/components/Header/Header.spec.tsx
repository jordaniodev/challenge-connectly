import { render } from '@testing-library/react';
import { Header } from '.';


describe('Header Component', () => {
  test('renders header with title', () => {
    const title = 'Test Title';
    const { getByText } = render(<Header title={title} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeTruthy();
  });

  test('renders header with close icon', () => {
    const title = 'Test Title';
    const { container } = render(<Header title={title} />);
    const closeIconElement = container.querySelector('.closeIcon');
    expect(closeIconElement).toBeTruthy();
  });
});