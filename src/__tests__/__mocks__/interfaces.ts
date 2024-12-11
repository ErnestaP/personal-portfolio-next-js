import { EducationCardProps } from '@/components/custom/educationCard';
import { ExperienceCardProps } from '@/components/custom/workExperienceCard';
import { EducationData, ExperienceData } from '@/utils/interfaces';

export enum filenames {
  education = 'education.json',
  normalizedEducation = 'normalizedEducation.json',
  educationSameDateFrom = 'educationSameDateFrom.json',
  experienceData = 'experience.json',
  normalizedExperienceData = 'normalizedExperience.json',
}

export type JsonDataType =
  | EducationCardProps
  | EducationData
  | ExperienceData
  | ExperienceCardProps;
