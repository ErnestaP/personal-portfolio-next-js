interface GroupColorMap {
  [group: string]: string;
}

interface SkillToGroupMap {
  [skill: string]: string;
}

interface SkillMetadata {
  skill: string;
  group: string;
  color: string;
}

interface GroupSkills {
  group: string;
  color: string;
  skills: string[];
}

interface SkillDetail {
  description: string;
  skills: string[];
  gits: string[];
}

interface SkillSet {
  [key: string]: SkillDetail;
}

interface ProjectCardProps {
  title: string;
  employer?: string;
  role: string;
  skillSet: SkillSet;
}

interface EducationCardProps {
  university: string;
  degree: string;
  field: string;
  description: string;
  image: string;
  date: string;
}

interface SideMenuButtonsProps {
  label: string;
  href: string;
}

interface SideMenuProps {
  title: string;
  buttons: SideMenuButtonsProps[];
}

interface SideMenuConfigProps {
  [key: string]: SideMenuProps;
}

interface ExperienceCardProps {
  employer: string;
  team?: string,
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  skills: string[];
}