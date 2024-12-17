import React from 'react';

import { promises as fs } from 'fs';
import path from 'path';

import { render } from '@testing-library/react';
import { Provider } from '@/components/ui/provider';
import { filenames, JsonDataType } from './interfaces';

export async function getJSONfromFile<ItemType extends JsonDataType>(
  filename: filenames,
  dbPath: string
): Promise<ItemType[]> {
  const filePath = path.join(dbPath, filename);
  const data = await fs.readFile(filePath);
  return JSON.parse(data.toString());
}

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
