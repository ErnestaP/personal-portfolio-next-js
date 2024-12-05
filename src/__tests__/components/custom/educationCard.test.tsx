import React from 'react';

import '@testing-library/jest-dom';
import 'core-js/stable/structured-clone';
import { render, screen  } from '@/__tests__/__mocks__/utils';

import EducationCard from '@/components/custom/educationCard';
import { readFakeData } from '@/__tests__/__mocks__/fakeData';


test('Education card component displays correct education information', async () => {
  const { fakeEducation } = await readFakeData();

  render(<EducationCard {...fakeEducation[0]} />);

  const heading = screen.getByRole('heading', {
    name: /Northfield Institute of Technology/i,
  });
  expect(heading).toBeInTheDocument();
});
