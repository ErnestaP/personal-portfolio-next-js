import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from '@/components/ui/provider';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
