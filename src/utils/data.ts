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

export const examplesUniversity = [
  {
    university: "Vilnius University",
    degree: "Bachelor's degree",
    field: "Bioinformatics",
    description:
      "The Bachelor of Science in Bioinformatics program at Vilnius University provided a strong foundation in computer science, with a focus on programming and data analysis. Core courses included Algorithms and Data Structures, Object-Oriented Programming in Java, and Database Management Systems, along with experience in Python and Perl, giving me the key skills required for software development. The program also emphasized practical skills through IT Project Management, Web Programming, and Computer Networks.",
    image: "/education_two_people.png",
    date: "January 2023 - June 2024"
  },
  {
    university: "Oulu University of Applied Science",
    degree: "Master of Business Administration",
    field: "Modern Software and Computing Solutions",
    description:
      "This program covers a wide range of topics for modern IT and software management. Key areas of study include Data Engineering, Data Analysis and Visualization, and Data-Driven Decision Making. It also includes advanced subjects such as Machine Learning, Blockchain Technologies, and Supercomputing. The curriculum consists of foundational courses in Programming, Mathematics, and Research Methods, along with practical training in Data Structures, Algorithms, Microservices, and Containers.",
    image: "/education_one_person.png",
    date: "September 2016 - July 2020"
  },
];

export const examplesExperience = [
  {
    employer: "Dekbera",
    location: "Vilnius, Lithuania",
    title: "Frontend Engineer",
    date: "February 2019 – May 2020",
    description:
      "At Dekbera, I had my first professional experience as a front-end developer, where I played a crucial role in developing applications for emergency services. One notable project was the ambulance forms application, designed to be used by emergency responders upon their arrival at a scene. This position was incredibly educational, and I greatly benefited from the guidance of a truly supportive and professional supervisor.",
    image: "/heart_woman.png",

    skills: ["React", "Redux", "JavaScript", "Jest", "Team Work"],
  },

  {
    employer: "CERN",
    team: "EP-CMG-CO",
    location: "Meyrin, Geneva, Switzerland",
    title: "Intern",
    date: "February 2020 – April 2020",
    description:
      "My journey at CERN began as an intern, where I was tasked with creating and designing the user interface for the Data Quality and Monitoring GUI for the CMS experiment. This role allowed me to delve into the intricacies of user experience and interface design in a high-impact scientific environment.",
    image: "/CMS_Detector_Transparent.png",

    skills: ["NextJS", "AntDesign", "TypeScript", "Python", "Team Work"],
  },
  {
    employer: "CERN",
    team: "EP-CMG-CO",
    location: "Meyrin, Geneva, Switzerland",
    title: "Fullstack Engineer",
    date: "May 2020 – September 2021",
    description:
      "Contributing to the CMS Data Quality and monitoring systems has taught me how to effectively manage multiple projects at the same time and how to perform well as the only developer in a team. This role not only involved development and maintenance tasks but also provided support during online operations, where I had the critical role of the main detector on-call (DOC). This position enhanced my ability to communicate ideas clearly and collaborate effectively, further deepening my skills in a dynamic, operational environment.",
    image: "/CMS_Detector_Transparent.png",

    skills: ["NextJS", "AntDesign", "TypeScript", "Python"],
  },
  {
    employer: "CERN",
    team: "RCS-SIS-TS",
    location: "Meyrin, Geneva, Switzerland",
    title: "Fullstack Engineer",
    date: "September 2021 – August 2024",
    description:
      "As a Fullstack Developer for the SCOAP3 repository project, my main role involves maintaining existing systems and developing new one, constructing data harvesting workflows using Python and Apache Airflow. I also contribute to the Django backend and the React frontend. This role offers an incredible opportunity to support an open access initiative that benefits the scientific community, making it both a professionally enriching and personally rewarding experience.",
    image: "/CMS_Detector_Transparent.png",
    skills: [
      "Python",
      "Pytest",
      "Apache Airflow",
      "Docker",
      "PostgreSQL",
      "Django",
      "OpenSearch",
      "NextJS",
      "AntDesign",
      "JavaScript",
      "Team Work",
    ],
  },
];
