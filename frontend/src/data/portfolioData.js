export const portfolioData = {
  profile: {
    name: "Vimal R K",
    role: "Computer Science Engineering Student | Aspiring Software Developer",
    location: "Madurai, Tamil Nadu, India",
    email: "vimalruppa06@gmail.com",
    phone: "+91-9842219948",
    github: "https://github.com/Vimal4567",
    linkedin: "https://linkedin.com/in/vimal-r-k",
    summary:
      "Computer Science Engineering student with practical knowledge of Python, AI, Machine Learning, JavaScript, HTML, CSS, Bootstrap, and MongoDB. Currently learning Java and OOP concepts to strengthen programming and problem-solving skills. Experienced in developing academic and personal projects using programming and web technologies. Seeking a Software Developer Internship to apply my skills and gain real-world experience."
  },
  skills: {
    programming: [
      { name: "Python", category: "Programming Languages" },
      { name: "Java", category: "Programming Languages" },
      { name: "C", category: "Programming Languages" }
    ],
    webDevelopment: [
      { name: "HTML5", category: "Web Development" },
      { name: "CSS3", category: "Web Development" },
      { name: "JavaScript", category: "Web Development" },
      { name: "Bootstrap 5", category: "Web Development" }
    ],
    database: [
      { name: "MongoDB", category: "Databases" }
    ],
    aiMl: [
      { name: "Machine Learning", category: "AI & Data Science" },
      { name: "Generative AI", category: "AI & Data Science" }
    ],
    libraries: [
      { name: "OpenCV", category: "Libraries & Toolkits" },
      { name: "NumPy", category: "Libraries & Toolkits" },
      { name: "Pandas", category: "Libraries & Toolkits" }
    ],
    tools: [
      { name: "Git", category: "Developer Tools" },
      { name: "GitHub", category: "Developer Tools" },
      { name: "Visual Studio", category: "Developer Tools" }
    ],
    currentlyLearning: [
      { name: "React.js", category: "Currently Learning" },
      { name: "C#", category: "Currently Learning" },
      { name: ".NET", category: "Currently Learning" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Face Recognition Attendance System",
      category: "Computer Vision & AI",
      description:
        "Developed an automated attendance system using Python and OpenCV for real-time face detection and recognition, replacing manual logbooks with secure computer vision validation.",
      features: [
        "Automated student registration with visual capture",
        "Face detection, feature extraction, and real-time model recognition",
        "Automated attendance records logged directly into CSV with timestamps",
        "Tkinter-based desktop interface for administrators and student tracking"
      ],
      technologies: ["Python", "OpenCV", "NumPy", "Pandas", "Tkinter", "Machine Learning"],
      githubUrl: "https://github.com/Vimal4567"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Full Stack Web Development",
      description:
        "Developed a modern e-commerce web application utilizing React.js, Node.js, Express.js, and MongoDB with a responsive user interface and modular REST APIs.",
      features: [
        "Product catalog browsing and live search filtering",
        "Client shopping cart state and checkout flow",
        "User authentication and order processing",
        "Decoupled REST API endpoints connecting frontend and backend"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      githubUrl: "https://github.com/Vimal4567"
    },
    {
      id: 3,
      title: "Train Booking System",
      category: "Core Software Engineering",
      description:
        "Created an Object-Oriented railway ticket booking and seat reservation engine in Java featuring modular classes, business calculation routines, and Collections.",
      features: [
        "Ticket booking, passenger record tracking, and seat availability",
        "Automated cancellation and dynamic fare calculation algorithms",
        "Clean OOP design leveraging inheritance, encapsulation, and polymorphism",
        "Java Collections Framework for structured data persistence"
      ],
      technologies: ["Java", "OOP Architecture", "Java Collections"],
      githubUrl: "https://github.com/Vimal4567"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Software Development Intern",
      company: "DigiTechzo",
      period: "26 August 2026 – 26 October 2026",
      duration: "2 Months",
      location: "On-site / Hybrid",
      highlights: [
        "Successfully completed a two-month software development internship focusing on practical engineering standards.",
        "Demonstrated a positive attitude, strong learning ability, and disciplined responsibility in assigned development tasks.",
        "Delivered steady, measurable progress across full lifecycle feature implementation and testing."
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Engineering (B.E.) in Computer Science and Engineering",
      institution: "K.L.N. College of Engineering, Tamil Nadu",
      period: "2023 – 2027",
      score: "CGPA: 7.84 / 10",
      details: "Focusing on core data structures, algorithms, object-oriented software engineering, and artificial intelligence."
    },
    {
      id: 2,
      degree: "Higher Secondary Education (12th Standard)",
      institution: "C.E.O.A. Matriculation Higher Secondary School, Madurai",
      period: "Completed 2023",
      score: "62.5%",
      details: "Completed higher secondary curriculum with emphasis on Mathematics, Physics, Chemistry, and Computer Science."
    },
    {
      id: 3,
      degree: "Secondary School Leaving Certificate (10th Standard)",
      institution: "C.E.O.A. Matriculation Higher Secondary School, Madurai",
      period: "Completed 2021",
      score: "80%",
      details: "Foundational academic training with distinction in science and mathematics."
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Python Programming",
      issuer: "Professional Technical Training",
      year: "2025",
      description: "Thorough training in Python syntax, standard libraries, Object-Oriented design, and algorithm development."
    },
    {
      id: 2,
      title: "Generative AI Project Bootcamp",
      issuer: "Raam Academy",
      year: "2025",
      description: "Hands-on project bootcamp covering contemporary generative AI architectures, prompt patterns, and application integrations."
    },
    {
      id: 3,
      title: "Cloud Computing Certification",
      issuer: "NPTEL Online Certification | IIT Kharagpur",
      year: "Jul – Oct 2025",
      description: "National-level academic certification in cloud computing architecture, hypervisors, storage paradigms, and cloud security."
    }
  ]
};
