import { render, fireEvent } from '@testing-library/react';
import { Button } from '.';

describe('Button Component', () => {
  test('renders button with children', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeTruthy();
  });

  test('renders button with default category', () => {
    const { container } = render(<Button>Default Button</Button>);
    const buttonElement = container.querySelector('.filled.btn');
    expect(buttonElement).toBeTruthy();
  });

  test('renders button with specified category', () => {
    const { container } = render(<Button category="outlined">Outlined Button</Button>);
    const buttonElement = container.querySelector('.outlined.btn');
    expect(buttonElement).toBeTruthy();
  });

  test('calls onClick callback when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click Me</Button>);
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});