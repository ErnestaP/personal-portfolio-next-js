import React from 'react';

import 'core-js/stable/structured-clone';
import '@testing-library/jest-dom';

import { render, screen, within } from '@/__tests__/__mocks__/utils';
import ProjectsCard from '@/components/custom/projectCard';
import { readFakeData } from '@/__tests__/__mocks__/fakeData';
import { ProjectsData } from '@/utils/interfaces';

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

describe('ProjectsCard Component', () => {
  let fakeProjectsData: ProjectsData[];

  beforeAll(async () => {
    const data = await readFakeData();
    fakeProjectsData = data.fakeProjectsData;
  });

  test('displays the correct number of skills in the first skillSet', () => {
    render(<ProjectsCard {...fakeProjectsData[0]} />);
    const skillSet = screen.getByTestId('skill-set-0');
    const skills = within(skillSet).getAllByTestId('skill-item');
    expect(skills).toHaveLength(fakeProjectsData[0].skillSet[0].skills.length);
  });

  test('displays the correct number of Git links in the first skillSet', () => {
    render(<ProjectsCard {...fakeProjectsData[0]} />);
    const skillSet = screen.getByTestId('skill-set-0');
    const gitLinks = within(skillSet).getAllByTestId('git-item');
    expect(gitLinks).toHaveLength(fakeProjectsData[0].skillSet[0].gits.length);
  });

  test('displays all skillSet titles and descriptions for a project', () => {
    render(<ProjectsCard {...fakeProjectsData[0]} />);
    const skillSets = fakeProjectsData[0].skillSet;

    skillSets.forEach((set, index) => {
      const skillSet = screen.getByTestId(`skill-set-${index}`);
      expect(
        within(skillSet).getByText(new RegExp(set.title, 'i'))
      ).toBeInTheDocument();
      expect(
        within(skillSet).getByText(new RegExp(set.description, 'i'))
      ).toBeInTheDocument();
    });
  });

  test('displays all skillSet titles and descriptions for a project', () => {
    render(<ProjectsCard {...fakeProjectsData[0]} />);
    const skillSet = fakeProjectsData[0].skillSet;

    skillSet.forEach((set) => {
      expect(screen.getByText(new RegExp(set.title, 'i'))).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(set.description, 'i'))
      ).toBeInTheDocument();
    });
  });

  test('renders the correct number of projects when mapped', () => {
    render(
      <>
        {fakeProjectsData.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </>
    );
    const projectCards = screen.getAllByTestId('projects-card');
    expect(projectCards).toHaveLength(fakeProjectsData.length);
  });

  test('handles optional fields like employer and role gracefully', () => {
    const projectWithoutEmployerAndRole = {
      ...fakeProjectsData[0],
      employer: undefined,
      role: undefined,
    } as any;

    render(<ProjectsCard {...projectWithoutEmployerAndRole} />);

    expect(screen.queryByText(/employer/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/role/i)).not.toBeInTheDocument();
  });

  test('renders without crashing for empty data', () => {
    const emptyData = {
      id: '',
      title: '',
      employer: '',
      role: '',
      skillSet: [],
    } as any;

    render(<ProjectsCard {...emptyData} />);
    expect(screen.getByTestId('projects-card')).toBeInTheDocument();
  });
});
