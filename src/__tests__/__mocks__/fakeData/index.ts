import path from 'path';

import type { EducationCardProps } from '@/components/custom/educationCard';
import { getJSONfromFile } from '../utils';
import { filenames } from '../interfaces';


const JSON_FILEPATH = path.join(__dirname, 'json');

export const readFakeData = async () => {
  const [fakeEducation] = await Promise.all([
    getJSONfromFile(filenames.education, JSON_FILEPATH),
  ]);

  return {
    fakeEducation: fakeEducation as Array<EducationCardProps>,
  };
};
