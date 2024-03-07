import { render, fireEvent } from '@testing-library/react';
import { MessagePreviewProvider, useMessagePreview } from './useMessagePreview';

describe('MessagePreviewProvider', () => {
  test('sets image header correctly', () => {
    const TestComponent = () => {
      const { setImageHeader } = useMessagePreview();

      const handleImageChange = () => {
        setImageHeader('testImageBase64');
      };

      return (
        <button onClick={handleImageChange}>Change Image</button>
      );
    };

    const { getByText } = render(
      <MessagePreviewProvider>
        <TestComponent />
      </MessagePreviewProvider>
    );

    const changeImageButton = getByText('Change Image');
    fireEvent.click(changeImageButton);
  });
});