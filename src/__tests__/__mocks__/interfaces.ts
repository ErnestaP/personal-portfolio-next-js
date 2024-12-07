import { EducationCardProps } from '@/components/custom/educationCard';
import { EducationData } from '@/utils/interfaces';

export enum filenames {
  education = 'education.json',
  normalizedEducation = 'normalizedEducation.json',
}

export type JsonDataType = EducationCardProps | EducationData;
