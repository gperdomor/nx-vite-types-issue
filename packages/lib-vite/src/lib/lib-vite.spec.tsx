import { render } from '@testing-library/react';

import LibVite from './lib-vite';

describe('LibVite', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibVite />);
    expect(baseElement).toBeTruthy();
  });
});
