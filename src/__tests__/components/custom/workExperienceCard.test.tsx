import React from 'react';

import 'core-js/stable/structured-clone';
import '@testing-library/jest-dom';

import { render, screen } from '@/__tests__/__mocks__/utils';
import ExperienceCard, {
  ExperienceCardProps,
} from '@/components/custom/workExperienceCard';
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

describe('ExperienceCard Component', () => {
  let fakeNormalizedExperienceData: ExperienceCardProps[];

  beforeAll(async () => {
    const data = await readFakeData();
    fakeNormalizedExperienceData = data.fakeNormalizedExperienceData;
  });

  test('displays the correct number of skills', () => {
    render(<ExperienceCard {...fakeNormalizedExperienceData[0]} />);
    const skills = screen.getAllByTestId('skill-item');
    expect(skills).toHaveLength(4);
  });

  test('displays the correct amount of cards when mapped', () => {
    render(
      <>
        {fakeNormalizedExperienceData.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </>
    );
    const cards = screen.getAllByTestId('experience-card');
    expect(cards).toHaveLength(fakeNormalizedExperienceData.length);
  });

  test('displays all expected fields for each experience', () => {
    render(<ExperienceCard {...fakeNormalizedExperienceData[0]} />);

    const heading = screen.getByRole('heading', {
      name: /TechCorp/i,
    });
    expect(heading).toBeInTheDocument();

    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend Development/i)).toBeInTheDocument();
    expect(screen.getByText(/San Francisco, CA/i)).toBeInTheDocument();
    expect(screen.getByText(/June 2021/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Developed scalable backend systems and APIs for e-commerce platforms./i
      )
    ).toBeInTheDocument();
  });

  test('renders with missing optional fields gracefully', () => {
    const dataWithMissingFields = {
      ...fakeNormalizedExperienceData[0],
      skills: [],
      location: undefined,
    } as any;
    render(<ExperienceCard {...dataWithMissingFields} />);

    expect(screen.queryByText(/San Francisco, CA/i)).not.toBeInTheDocument();
    expect(screen.queryAllByTestId('skill-item')).toHaveLength(0);
  });

  test('renders without crashing for empty data', () => {
    const emptyData = {
      id: '',
      title: '',
      team: '',
      location: '',
      employer: '',
      description: '',
      skills: [],
      dateFrom: { seconds: 0, nanoseconds: 0 },
      dateTo: { seconds: 0, nanoseconds: 0 },
    } as any;
    render(<ExperienceCard {...emptyData} />);
    expect(screen.getByTestId('experience-card')).toBeInTheDocument();
  });
});
