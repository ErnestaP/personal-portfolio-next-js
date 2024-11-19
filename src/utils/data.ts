export const examplesProfessional: ProjectCardProps[] = [
  {
    title: "SCOAP3",
    role: "Full-Stack Engineer",
    employer: "CERN, RCS-SIS-TS",
    skillSet: {
      "Apache Airflow DAGs": {
        description:
          "Designed, developed, and maintained workflows for efficient data processing, integrating third-party APIs, and harvesting data from FTP and SFTP sources. Utilized Docker, contributed to GitHub workflows for CI/CD, and wrote unit and integration tests using pytest.",
        skills: ["Apache Airflow", "Python", "Pytest", "Docker"],
        gits: ["https://github.com/cern-sis/workflows"],
      },
      "Django Backend Development": {
        description:
          "Enhanced backend functionality by building features, creating REST APIs, and optimizing search performance using OpenSearch.",
        skills: ["Django", "OpenSearch", "PostgreSQL"],
        gits: ["https://github.com/SCOAP3/scoap3"],
      },
      "Frontend Development": {
        description:
          "Expanded full-stack skills by handling select frontend tasks, leveraging Next.js and Ant Design to improve user interfaces.",
        skills: ["NextJS", "AntDesign", "TypeScript"],
        gits: ["https://github.com/SCOAP3/scoap3"],
      },
    },
  },
  {
    title: "Team Inner Project: Data Monitoring",
    role: "Data Workflow Specialist & Stakeholder Partner",
    employer: "CERN, RCS-SIS-TS",
    skillSet: {
      "Apache Airflow DAGs": {
        description:
          "Streamlined data collection and processing workflows by designing and managing Airflow DAGs.",
        skills: ["Apache Airflow", "PostgreSQL", "Python", "Pytest", "Docker"],
        gits: ["https://github.com/cern-sis/bi-dags"],
      },
      "Stakeholder Collaboration & Data Visualization": {
        description:
          "Worked on a monitoring project, collaborating with stakeholders to gather requirements and create data visualizations using Apache Superset. Focused on clear communication, active listening, and effectively presenting ideas.",
        skills: [
          "Apache Superset",
          "Requirements Analysis",
          "Critical Thinking",
        ],
        gits: [],
      },
    },
  },
  {
    title: "DQM GUI",
    role: "Full-Stack Engineer",
    employer: "CERN, EP-CMG-CO",
    skillSet: {
      "Frontend Development": {
        description:
          "Redesigned and developed the CMS Data Quality Monitoring (DQM) GUI frontend using Next.js and JavaScript, enhancing user interaction and ensuring an intuitive experience for physicists monitoring particle collision data.",
        skills: ["NextJS", "AntDesign", "StyledComponents"],
        gits: [
          "https://github.com/cms-DQM/dqmgui_frontend",
          "https://github.com/cms-DQM/dqmgui",
        ],
      },
      "On-Call Support (DOC Role)": {
        description:
          "Served as the lead on-call support (DOC), troubleshooting and resolving issues across the CMS DQM system to minimize downtime and maintain smooth operations.",
        skills: ["Debugging", "Communication", "Problem Solving"],
        gits: [],
      },
    },
  },
];

export const examplesPersonal: ProjectCardProps[] = [
  {
    title: "Portfolio",
    role: "",
    skillSet: {
      "Frontend Development": {
        description: "Need to write one",
        skills: ["NextJS", "Chakra UI", "TypeScript"],
        gits: [],
      },
    },
  },
  {
    title: "Simple List",
    role: "",
    skillSet: {
      "FastApi Backend": {
        description: "Need to write one",
        skills: ["FastApi", "PostgreSQL", "Python", "Docker"],
        gits: [],
      },
      "Frontend Development": {
        description: "Need to write one",
        skills: ["React", "PostgreSQL", "Python", "Docker"],
        gits: [],
      },
    },
  },
  {
    title: "Game with VueJS",
    role: "",
    skillSet: {
      "Frontend Development": {
        description: "Need to write one",
        skills: ["VueJS"],
        gits: [],
      },
      "Backend Development": {
        description: "Need to write one",
        skills: ["FastApi"],
        gits: [],
      },
    },
  },
];
