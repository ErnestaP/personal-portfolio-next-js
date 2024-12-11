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

export type Data = EducationData | ExperienceData | ProjectsData | Hobbies;

export interface HasDateFromDateTo {
  dateFrom: TimeStampProps;
  dateTo: TimeStampProps;
}

export interface HasDate {
  date: string;
}
