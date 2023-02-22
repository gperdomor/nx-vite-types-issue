import { render } from '@testing-library/react';

import LibRollup from './lib-rollup';

describe('LibRollup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibRollup />);
    expect(baseElement).toBeTruthy();
  });
});
