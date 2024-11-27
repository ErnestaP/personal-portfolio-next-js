import { GroupColorMap, SkillToGroupMap } from "./interfaces";

export const groupColorMap: GroupColorMap = {
  "Programming and Development": "green",
  "Data and Workflow Automation": "blue",
  "Data Analysis and Visualization": "yellow",
  "System Support and Maintenance": "red",
  "Communication and Collaboration": "purple",
};

const skillToGroupMap: SkillToGroupMap = {
  Python: "Programming and Development",
  SQLAlchemy: "Programming and Development",
  Pydantic: "Programming and Development",
  Django: "Programming and Development",
  FastAPI: "Programming and Development",
  React: "Programming and Development",
  JavaScript: "Programming and Development",
  Redux: "Programming and Development",
  Jest: "Programming and Development",
  "Chakra UI": "Programming and Development",
  TypeScript: "Programming and Development",
  "Next.js": "Programming and Development",
  "Vue.js": "Programming and Development",
  StyledComponents: "Programming and Development",
  AntDesign: "Programming and Development",
  Firestore: "Programming and Development",
  "Firebase Storage": "Programming and Development",
  CSS: "Programming and Development",
  "Responsive Design": "Programming and Development",
  "Apache Airflow": "Data and Workflow Automation",
  Docker: "Data and Workflow Automation",
  "Docker Compose": "Data and Workflow Automation",
  Traefik: "Data and Workflow Automation",
  PostgreSQL: "Programming and Development",
  Firebase: "Programming and Development",
  Pytest: "Data and Workflow Automation",
  OpenSearch: "Data Analysis and Visualization",
  "Apache Superset": "Data Analysis and Visualization",
  Debugging: "System Support and Maintenance",
  "Problem Solving": "System Support and Maintenance",
  "Requirements Analysis": "Communication and Collaboration",
  "Critical Thinking": "Communication and Collaboration",
  Communication: "Communication and Collaboration",
  "Active Listening": "Communication and Collaboration",
  Collaboration: "Communication and Collaboration",
  "Presentation Skills": "Communication and Collaboration",
  "Team Work": "Communication and Collaboration",
};

export function getColorBySkill(skill: string): string | null {
  const group = skillToGroupMap[skill];
  return group ? groupColorMap[group] : null;
}
