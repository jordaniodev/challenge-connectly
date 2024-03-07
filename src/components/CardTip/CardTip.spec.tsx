import { render, fireEvent } from '@testing-library/react';
import { CardTip } from '.';


describe('CardTip Component', () => {
  const title = 'Test Title';
  const description = 'Test Description';
  const urlAction = 'https://example.com';

  test('renders card tip with title and description', () => {
    const { getByText } = render(<CardTip title={title} description={description} />);
    const titleElement = getByText(title);
    const descriptionElement = getByText(description);
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  });

  test('renders card tip with learn more link', () => {
    const { getByText } = render(<CardTip title={title} description={description} urlAction={urlAction} />);
    const learnMoreElement = getByText('Learn More');
    expect(learnMoreElement.getAttribute('href')).toBe(urlAction);
  });

  test('hides card tip when close icon is clicked', () => {
    const { queryByText, getByAltText } = render(<CardTip title={title} description={description} />);
    const closeIcon = getByAltText('close-icon');
    fireEvent.click(closeIcon);
    const titleElement = queryByText(title);
    const descriptionElement = queryByText(description);
    expect(titleElement).toBeNull();
    expect(descriptionElement).toBeNull();
  });
});
