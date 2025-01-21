import React from 'react';

import '@testing-library/jest-dom';
import 'core-js/stable/structured-clone';
import { render, screen } from '@/__tests__/__mocks__/utils';

import EducationCard from '@/components/custom/educationCard';
import { readFakeData } from '@/__tests__/__mocks__/fakeData';

// jest.mock('next/image', () => {
//   const NextImage = React.forwardRef<
//     HTMLImageElement,
//     React.ImgHTMLAttributes<HTMLImageElement>
//   >((props, ref) => <img ref={ref} {...props} />);
//   NextImage.displayName = 'NextImage';
//   return {
//     __esModule: true,
//     default: NextImage,
//   };
// });

test('Education card component displays correct education information', async () => {
  const { fakeNormalizedEducation } = await readFakeData();

  render(<EducationCard {...fakeNormalizedEducation[0]} />);
  const heading = screen.getByRole('heading', {
    name: /Northfield Institute of Technology/i,
  });
  expect(heading).toBeInTheDocument();

  const degree = await screen.findByText(/Bachelor of Applied Sciences/i);
  expect(degree).toBeInTheDocument();

  const field = await screen.findByText(/Robotics Engineering/i);
  expect(field).toBeInTheDocument();

  const image = screen.getByAltText(
    'Education image: Northfield Institute of Technology'
  );

  expect(image).toHaveAttribute(
    'src',
    'https://example.com/images/northfield-logo.png'
  );

  const description = await screen.findByText(
    /Studied advanced robotics, automation systems, and human-machine interaction. Participated in multiple research projects./i
  );
  expect(description).toBeInTheDocument();

  const date = await screen.findByText(/September 2015/i);
  expect(date).toBeInTheDocument();
});

test('Education card component displays the component, when the image url is missing', async () => {
  const { fakeNormalizedEducation } = await readFakeData();
  const data = fakeNormalizedEducation[1];
  data.image = '';
  render(<EducationCard {...data} />);
  const heading = screen.getByRole('heading', {
    name: /Westbridge University/i,
  });
  expect(heading).toBeInTheDocument();

  const degree = await screen.findByText(/Master of Computational Analysis/i);
  expect(degree).toBeInTheDocument();

  const field = await screen.findByText(/Cybersecurity/i);
  expect(field).toBeInTheDocument();

  const description = await screen.findByText(
    /Focused on network security, cryptography, and ethical hacking. Worked on a thesis about threat detection using AI./i
  );
  expect(description).toBeInTheDocument();

  const date = await screen.findByText(/June 2021/i);
  expect(date).toBeInTheDocument();

  const image = screen.queryByAltText('Education image: Westbridge University');
  expect(image).not.toBeInTheDocument();
});

test('Education card component displays the component, when all data fields are empty', async () => {
  const data = {
    title: '',
    degree: '',
    field: '',
    description: '',
    image: '',
    dateFrom: {
      seconds: '',
      nanoseconds: '',
    },
    dateTo: {
      seconds: '',
      nanoseconds: '',
    },
    date: '',
  };
  render(<EducationCard {...data} />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading.textContent).toBe('');
});
