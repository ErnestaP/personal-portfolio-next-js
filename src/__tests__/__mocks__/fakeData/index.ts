import path from 'path';

import type { EducationCardProps } from '@/components/custom/educationCard';
import { getJSONfromFile } from '../utils';
import { filenames } from '../interfaces';
import { EducationData } from '@/utils/interfaces';

const JSON_FILEPATH = path.join(__dirname, 'json');

export const readFakeData = async () => {
  const [fakeEducation, fakeNormalizedEducation, fakeEducationSameDateFrom] =
    await Promise.all([
      getJSONfromFile(filenames.education, JSON_FILEPATH),
      getJSONfromFile(filenames.normalizedEducation, JSON_FILEPATH),
      getJSONfromFile(filenames.educationSameDateFrom, JSON_FILEPATH),
    ]);

  return {
    fakeEducation: fakeEducation as Array<EducationData>,
    fakeNormalizedEducation:
      fakeNormalizedEducation as Array<EducationCardProps>,
    fakeEducationSameDateFrom:
      fakeEducationSameDateFrom as Array<EducationData>,
  };
};
