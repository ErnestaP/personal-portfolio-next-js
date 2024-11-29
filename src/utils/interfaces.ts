export interface GroupColorMap {
  [group: string]: string;
}

export interface SkillToGroupMap {
  [skill: string]: string;
}

export interface SkillMetadata {
  skill: string;
  group: string;
  color: string;
}

export interface EducationData {
  title: string;
  degree: string;
  field: string;
  description: string;
  image: string;
  dateFrom: TimeStampProps;
  dateTo: TimeStampProps;
}

export interface EducationNormalizedData extends EducationData {
  date: string;
}

export interface EducationCardProps {
  title: string;
  degree: string;
  field: string;
  description: string;
  image: string;
  date: string;
}

export interface SideMenuButtonsProps {
  label: string;
  href: string;
}

export interface SideMenuProps {
  title: string;
  buttons: SideMenuButtonsProps[];
  colorMap?: boolean;
}

export interface SideMenuConfigProps {
  [key: string]: SideMenuProps;
}

export interface ExperienceData {
  id: string;
  title: string;
  team: string;
  location: string;
  employer: string;
  description: string;
  skills: string[];
  dateFrom: TimeStampProps;
  dateTo: TimeStampProps;
}
export interface ExperienceNormalizedData extends ExperienceData {
  date: string;
}

export interface ExperienceCardProps {
  employer: string;
  team?: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  skills: string[];
}

export interface TimeStampProps {
  seconds: number;
  nanoseconds: number;
}

export interface ImagesMappingProps {
  [title: string]: string;
}

export interface SkillSet {
  title: string;
  description: string;
  skills: string[];
  gits: string[];
}

export interface ProjectsData {
  id: string;
  title: string;
  employer?: string;
  role?: string;
  skillSet: SkillSet[];
}

export interface Hobbies {
  description: string;
  title: string;
}

export interface FilterProps {
  base: string;
  _dark: string;
}

export type Data = EducationData & ExperienceData & ProjectsData;
export type NormalizedData = EducationNormalizedData & ExperienceNormalizedData;

export interface DataForSorting {
  dateFrom: TimeStampProps;
  dateTo: TimeStampProps;
  [key: string]: any;
}
