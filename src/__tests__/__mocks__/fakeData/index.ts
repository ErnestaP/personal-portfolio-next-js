import path from 'path';
import { promises as fs } from 'fs';

import type { EducationCardProps } from '@/components/custom/educationCard';
import { filenames, JsonDataType } from '../interfaces';
import {
  EducationData,
  ExperienceData,
  ProjectsData,
} from '@/utils/interfaces';
import { ExperienceCardProps } from '@/components/custom/workExperienceCard';

export async function getJSONfromFile<ItemType extends JsonDataType>(
  filename: filenames,
  dbPath: string
): Promise<ItemType[]> {
  const filePath = path.join(dbPath, filename);
  const data = await fs.readFile(filePath);
  return JSON.parse(data.toString());
}

const JSON_FILEPATH = path.join(__dirname, 'json');

export const readFakeData = async () => {
  const [
    fakeEducation,
    fakeNormalizedEducation,
    fakeEducationSameDateFrom,
    fakeExperienceData,
    fakeNormalizedExperienceData,
    fakeProjectsData,
  ] = await Promise.all([
    getJSONfromFile(filenames.education, JSON_FILEPATH),
    getJSONfromFile(filenames.normalizedEducation, JSON_FILEPATH),
    getJSONfromFile(filenames.educationSameDateFrom, JSON_FILEPATH),
    getJSONfromFile(filenames.experienceData, JSON_FILEPATH),
    getJSONfromFile(filenames.normalizedExperienceData, JSON_FILEPATH),
    getJSONfromFile(filenames.projectsData, JSON_FILEPATH),
  ]);

  return {
    fakeEducation: fakeEducation as Array<EducationData>,
    fakeNormalizedEducation:
      fakeNormalizedEducation as Array<EducationCardProps>,
    fakeEducationSameDateFrom:
      fakeEducationSameDateFrom as Array<EducationData>,
    fakeExperienceData: fakeExperienceData as Array<ExperienceData>,
    fakeNormalizedExperienceData:
      fakeNormalizedExperienceData as Array<ExperienceCardProps>,
    fakeProjectsData: fakeProjectsData as Array<ProjectsData>,
  };
};
