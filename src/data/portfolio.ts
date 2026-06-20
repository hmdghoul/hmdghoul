export interface Stat {
  value: string
  label: string
}

export interface ContactInfo {
  email: string
  linkedin: string
  website: string
  cv: string
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  responsibilities: string[]
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Project {
  name: string
  period: string
  company: string
  tags: string[]
}

export interface Education {
  degree: string
  institution: string
  location: string
  year: string
}

export interface Volunteer {
  org: string
  period: string
  activities: string[]
}

export const stats: Stat[] = [
  { value: '13+', label: 'Years Experience' },
  { value: '7', label: 'Companies' },
  { value: '8', label: 'Major Projects' },
  { value: '4', label: 'Countries' },
]

export const contact: ContactInfo = {
  email: 'dev@ahmadalghoul.com',
  linkedin: 'https://linkedin.com/in/ahmadalghoul',
  website: 'https://ahmadalghoul.com',
  cv: '/ahmad-alghoul-software-engineer-cv.pdf',
}

export const availability = 'Available for senior & lead roles'

export const experience: Experience[] = [
  {
    company: 'SITA',
    role: 'Software Engineer Team Lead',
    period: 'Apr 2021 – Present',
    location: 'Muscat, Oman',
    responsibilities: [
      'Led development and enhancement of the Border Management System for Oman Borders across multiple national checkpoints',
      'Designed and implemented real-time data visualisation tools and executive dashboards',
      'Developed remote management solutions for distributed workstations across the country',
      'Managed SQL Compact, SQLite, and Oracle databases',
    ],
  },
  {
    company: 'MAPLE TELECOMMUNICATIONS',
    role: 'Software Engineer Team Lead',
    period: 'Apr 2019 – Mar 2021',
    location: 'Amman, Jordan',
    responsibilities: [
      'Led design and development of an ERP system supporting maintenance and production operations for Al Behar Group',
      'Deployed and maintained applications on Microsoft Azure cloud infrastructure',
      'Implemented CI/CD pipelines to streamline deployment and release processes',
      'Managed SQL Server and MySQL databases',
    ],
  },
  {
    company: 'IOM — United Nations',
    role: 'Senior Software Engineer',
    period: 'Aug 2018 – Mar 2019',
    location: 'Niamey, Niger',
    responsibilities: [
      'Led development of a Border Management System for immigration tracking and biometric data processing',
      'Designed system features to improve monitoring and resource management',
      'Managed SQL Server and SQLite databases',
      'Supported system deployment and provided technical guidance to operational teams',
    ],
  },
  {
    company: 'BLACKSTONEEIT',
    role: 'Senior Software Engineer',
    period: 'Sep 2017 – Jul 2018',
    location: 'Amman, Jordan',
    responsibilities: [
      'Developed interactive Surface Hub dashboards for ADNOC executive teams',
      'Designed IoT-based Wi-Fi tracking solutions for real-time location monitoring',
      'Built AI-powered FAQ solutions integrated within enterprise HR systems',
      'Enhanced and maintained enterprise HR systems',
    ],
  },
  {
    company: 'KAIZEN PLUS',
    role: 'Senior Software Engineer',
    period: 'Aug 2016 – Aug 2017',
    location: 'Amman, Jordan',
    responsibilities: [
      'Contributed to the Operator Round system for GASCO equipment performance monitoring',
      'Designed and developed an iOS application integrated with HRMS APIs',
      'Managed SQL Server databases',
    ],
  },
  {
    company: 'CATEC',
    role: 'Software Engineer',
    period: 'Jul 2015 – Jul 2016',
    location: 'Amman, Jordan',
    responsibilities: [
      'Developed E-Correspondence (Barq ECS) and E-Agenda (Qarar) systems for government clients',
      'Designed modules for workflow automation and document management',
      'Customised reports using Crystal Reports',
    ],
  },
  {
    company: 'AXIS180',
    role: 'Software Engineer',
    period: 'Sep 2012 – Jun 2015',
    location: 'Amman, Jordan',
    responsibilities: [
      'Developed the Titanium ERP system for internal business operations',
      'Designed and implemented application modules based on business requirements',
      'Developed and maintained SSRS reporting solutions',
    ],
  },
]

export const skills: SkillCategory[] = [
  {
    name: 'Programming Languages',
    items: ['C#', 'Java', 'Python', 'C++', 'PHP', 'Go', 'Objective-C'],
  },
  {
    name: 'Backend Development',
    items: ['ASP.NET MVC', '.NET Core', 'ASP.NET Web Forms', 'Web Services', 'J2EE'],
  },
  {
    name: 'Databases',
    items: ['Oracle', 'MS SQL Server', 'MySQL', 'SQLite', 'SQL Compact', 'SSRS'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['Azure', 'Docker', 'AWS', 'Digital Ocean', 'CI/CD Pipelines'],
  },
  {
    name: 'Frontend & Mobile',
    items: ['Flutter', 'HTML/CSS', 'JavaScript', 'jQuery/AJAX', 'iOS/Obj-C', 'JSON/XML'],
  },
  {
    name: 'Tools & Platforms',
    items: ['Git', 'Visual Studio', 'VS Code', 'IntelliJ', 'Xcode', 'Windows Server', 'Linux/Unix'],
  },
]

export const projects: Project[] = [
  {
    name: 'Border Management System — Oman',
    period: '2021 – Present',
    company: 'SITA',
    tags: ['Government', 'Security'],
  },
  {
    name: 'ERP System — Al Behar Group',
    period: '2019 – 2021',
    company: 'Maple Telecommunications',
    tags: ['Enterprise', 'ERP'],
  },
  {
    name: 'Border Management System — Niger',
    period: '2018 – 2019',
    company: 'IOM — United Nations',
    tags: ['Government', 'UN'],
  },
  {
    name: 'Surface Hub Dashboards — ADNOC',
    period: '2017 – 2018',
    company: 'BLACKSTONEEIT',
    tags: ['Energy', 'Visualisation'],
  },
  {
    name: 'Operator Round System — GASCO',
    period: '2016 – 2017',
    company: 'KAIZEN PLUS',
    tags: ['Energy', 'Operations'],
  },
  {
    name: 'Qarar E-Agenda',
    period: '2015 – 2016',
    company: 'CATEC',
    tags: ['Government', 'Meetings'],
  },
  {
    name: 'Barq E-Correspondence System',
    period: '2015 – 2016',
    company: 'CATEC',
    tags: ['Government', 'Documents'],
  },
  {
    name: 'Titanium ERP',
    period: '2013 – 2015',
    company: 'AXIS180',
    tags: ['Enterprise', 'ERP'],
  },
]

export const education: Education = {
  degree: 'Bachelor of Computer Science',
  institution: 'Al-Zaytoonah Private University',
  location: 'Amman, Jordan',
  year: '2012',
}

export const volunteer: Volunteer = {
  org: 'Ambassadors of Charity',
  period: 'January 2012 – Present',
  activities: [
    'Support community initiatives focused on children and the elderly',
    'Assist in organising fundraising activities and resource distribution programs',
    'Participate in outreach efforts that promote well-being and social support',
  ],
}
