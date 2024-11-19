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
  employer?:string;
  role: string;
  skillSet: SkillSet;
}