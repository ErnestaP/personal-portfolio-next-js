export const groupColorMap: GroupColorMap = {
    "Programming and Development": "green",
    "Data and Workflow Automation": "blue",
    "Data Analysis and Visualization": "yellow",
    "System Support and Maintenance": "red",
    "Communication and Collaboration": "purple",
  };

  const skillToGroupMap: SkillToGroupMap = {
    Python: "Programming and Development",
    Django: "Programming and Development",
    FastApi: "Programming and Development",
    React: "Programming and Development",
    "Chakra UI": "Programming and Development",
    TypeScript: "Programming and Development",
    NextJS: "Programming and Development",
    VueJS: "Programming and Development",
    StyledComponents: "Programming and Development",
    AntDesign: "Programming and Development",
    "Apache Airflow": "Data and Workflow Automation",
    Docker: "Data and Workflow Automation",
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
  };


  export function getColorBySkill(skill: string): string | null {
    const group = skillToGroupMap[skill];
    return group ? groupColorMap[group] : null;
  }

  export const groupSkills: GroupSkills[] = [
    {
      group: "Programming and Development",
      color: "#4CAF50",
      skills: ["Python", "Django", "TypeScript", "NextJS", "StyledComponents", "AntDesign"],
    },
    {
      group: "Data and Workflow Automation",
      color: "#2196F3",
      skills: ["Apache Airflow", "Docker", "PostgreSQL", "Pytest"],
    },
    {
      group: "Data Analysis and Visualization",
      color: "#FFC107",
      skills: ["OpenSearch", "Apache Superset"],
    },
    {
      group: "System Support and Maintenance",
      color: "#F44336",
      skills: ["Debugging", "Problem Solving"],
    },
    {
      group: "Communication and Collaboration",
      color: "#9C27B0",
      skills: [
        "Requirements Analysis",
        "Critical Thinking",
        "Communication",
        "Active Listening",
        "Collaboration",
        "Presentation Skills",
      ],
    },
  ];
