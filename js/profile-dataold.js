/*==================================================================
   File Header
--------------------------------------------------------------------

/*==================================================================
    PROFILE-DATA.JS
--------------------------------------------------------------------
Project : Legend of Sarbajit Portfolio

Author  : Sarbajit Senapati

Purpose :
Stores all professional role information for the
Player Profile.

This file acts as a mini database.

No UI updates.

No DOM Manipulation.

Only Data.
==================================================================*/
/*==============================================================
   STEP 2 — Create the Main Object
   Immediately below the header
==============================================================*/
/*==============================================================
    PLAYER ROLE DATABASE
==============================================================*/

const roles = {
	
/*==============================================================	
STEP 3 — First Role
Now we'll create the Trainer Object.
==============================================================*/
/*=======================================*/
/* ICT Trainer details*/
/*=======================================*/
	
	ictTrainer:{

    title:
    "Master Trainer & Block Coordinator",

    organization:
    "ICT @ School (e-Vidyalaya Project), Government of Odisha",

    vendor:
    "IL&FS Education & Technology Services Ltd.",

    duration:
    "2014 - 2017",

    location:
    "Odisha",

    description:
    "Worked as Master Trainer and Block Coordinator under the ICT @ School (e-Vidyalaya) Project, providing ICT-based education and teacher capacity building across government high schools.",

    responsibilities:[

        "Training 300+ students on ICT-enabled education",

        "Training 30+ High School teachers on digital teaching methodologies",

        "Conducting ICT Lab orientation",

        "Supporting 6+ Block Level Teacher Training Programs",

        "Coordinating with the Block Education Officer",

        "Maintaining ICT laboratories",

        "Providing technical support to 19+ schools Under Cuttack District",

        "Monitoring implementation of ICT infrastructure"

    ],

    technologies:[

        "KYAN",

        "Interactive White Board",

        "Windows Server 2012",

        "Linux LTS 14.0",

        "Microsoft Office 2013",

        "Email Communication",

        "ICT Lab Management"

    ],

    achievements:[

        "Successfully trained students and teachers",

        "Supported Government ICT implementation",

        "Coordinated Block Level Training Programs",

        "Improved ICT adoption in schools"

    ]

}

    /*==========================================================
        COMPUTER  TRAINER
    ==========================================================*/

    digitrainer:{

        title:" Digital Course Trainer",

        company:"Nootech Computer Centre",

        duration:"2018 - Present",

        location:"Athgarh, Cuttack, Odisha",

        level:"99",

        xp:"9500 / 10000",

        description:
        "Passionate IT Trainer with more than a decade of experience in Computer Education, Programming, Artificial Intelligence, Web Development, Tally Prime, Advanced Excel and Digital Literacy.",

        responsibilities:[

            "Computer Fundamentals Training",
			
			"NIELIT Courses CCC,ECC etc Training",
			
			"OS-CIT Training",

            "Programming Training",

            "Tally Prime Trainig",

            "Artificial Intelligence",

            "Advanced Excel",

            "Career Guidance",

            "Student Mentoring",

            "Project Based Learning"

        ],

        achievements:[

            "1500+ Students Trained",

            "Government Skill Development Projects",

            "Professional Career Mentorship",

            "Successfully Running Nootech Computer Centre"

        ],

        technologies:[

            "LMS"
			
			"XML"
			
			"HTML5",

            "CSS3",

            "JavaScript",

            "Python",

            "C",

            "C++",

            "Java",

            "Advanced Excel",

            "Tally Prime",

            "MS Office"

        ]

    },


/*=======================================*/
/* +2 IT Trainer details*/
/*=======================================*/
guestTrainer:{

    title:
    "Guest Trainer (Information Technology)",

    organization:
    "Private College (CHSE Odisha)",

    duration:
    "2021 - Present",

    location:
    "Odisha",

    description:
    "Working as a Guest Trainer to deliver Information Technology education to +2 CHSE students. Responsible for completing the prescribed syllabus using real-world examples, practical demonstrations, assignments, and examination-oriented teaching methodologies.",

    responsibilities:[

        "Teaching CHSE Information Technology syllabus",

        "Explaining concepts using real-world examples",

        "Completing syllabus within academic schedule",

        "Conducting practical demonstrations",

        "Preparing students for final board examinations",

        "Creating assignments and practical exercises",

        "Generating model question papers",

        "Evaluating theory and practical performance",

        "Providing career guidance"

    ],

    technologies:[

        "Java",

        "HTML5",

        "XML",

        "Python",

        "MySQL",

        "Internet of Things (IoT)",

        "E-Business",

        "Microsoft Office"

    ],

    achievements:[

        "Successfully prepared 250+ students for CHSE Board Examinations",

        "Improved practical understanding through hands-on sessions",

        "Developed examination-oriented study materials",

        "Enhanced student confidence through continuous evaluation"

    ]

},

technicalSupport:{

    title:
    "Senior Technical Support Executive",

    organization:
    "Greet Technologies Pvt. Ltd.",

    duration:
    "2020 - 2022",

    location:
    "Bengaluru, Karnataka",

    employmentType:
    "Full-Time",

    description:
    "Worked as a Senior Technical Support Executive, delivering remote and on-site technical support for Tally ERP/TallyPrime, accounting software, GST compliance, data migration, and business applications. Assisted Chartered Accountants, business partners, and enterprise customers in resolving critical technical issues while ensuring business continuity.",

    responsibilities:[

        "Providing remote technical support",

        "Troubleshooting software and hardware issues",

        "Tally ERP & TallyPrime support",

        "GST compliance assistance",

        "Data migration and company data splitting",

        "Backup and disaster recovery",

        "Customer issue resolution",

        "Maintaining service quality",

        "Supporting Chartered Accountants",

        "Providing installation and configuration support"

    ],

    technologies:[

        "Tally ERP",

        "TallyPrime",

        "GST",

        "Windows",

        "Remote Desktop",

        "MS Office",

        "Networking",

        "Database Backup"

    ],

    achievements:[

        "Successfully resolved hundreds of customer issues",

        "Maintained high customer satisfaction",

        "Supported enterprise business partners",

        "Improved issue resolution efficiency"

    ]

},

graphicDesigner:{

    title:
    "Graphic Designer",

    organization:
    "Keva Kaipo Industries",

    duration:
    "2017 - Present",

    location:
    "Remote",

    employmentType:
    "Freelance",

    description:
    "Working as a freelance Graphic Designer, creating professional branding materials, marketing campaigns, promotional advertisements, banners, posters, social media creatives, product packaging, and promotional videos for multiple business products.",

    responsibilities:[

        "Banner Designing",

        "Poster Designing",

        "Product Advertisement Design",

        "Social Media Creative Design",

        "Logo Designing",

        "Marketing Campaign Design",

        "Video Editing",

        "Brand Identity Development",

        "Client Requirement Analysis"

    ],

    technologies:[

        "Adobe Photoshop",

        "CorelDRAW",

        "Canva",

        "Filmora",

        "Adobe Premiere",

        "Illustration",

        "Brand Design"

    ],

    achievements:[

        "Designed hundreds of marketing creatives",

        "Successfully handled long-term freelance projects",

        "Improved brand visibility",

        "Created promotional campaigns for multiple products"

    ]

},
misExecutive:{

    title:
    "MIS Executive",

    organization:
    "ASDC & Hero MotoCorp",

    project:
    "Automotive Showroom Hostess",

    duration:
    "February 2025 - May 2025",

    location:
    "Odisha",

    employmentType:
    "Project Based",

    description:
    "Worked as a Management Information System (MIS) Executive under the Automotive Showroom Hostess Project, maintaining project records, attendance, reports, trainee databases, performance monitoring, and management documentation while supporting OJT and CRT based training activities.",

    responsibilities:[

        "Daily MIS Reporting",

        "Student Database Management",

        "Attendance Management",

        "Performance Tracking",

        "Preparing Monthly Reports",

        "Documentation",

        "OJT Monitoring",

        "CRT Training Coordination",

        "Excel Automation"

    ],

    technologies:[

        "Advanced Excel",

        "MS Office",

        "Google Sheets",

        "Data Analysis",

        "Reporting",

        "Documentation"

    ],

    achievements:[

        "Maintained accurate trainee records",

        "Automated reporting process",

        "Supported successful project implementation",

        "Improved reporting efficiency"

    ]

},
trainerMIS:{

    title:
    "Trainer cum MIS Report Executive",

    organization:
    "OSDA, Government of Odisha",

    project:
    "Solar Power Panel PV Installer Technician (Suryamitra 4.0)",

    duration:
    "July 2025 - November 2025",

    location:
    "Odisha",

    employmentType:
    "Government Project",

    description:
    "Worked as Trainer cum MIS Report Executive under the Suryamitra 4.0 project, providing technical training to Solar Power Panel PV Installer Technician candidates while simultaneously managing MIS reports, attendance, documentation, and project data for successful implementation.",

    responsibilities:[

        "Technical Training",

        "Practical Demonstrations",

        "MIS Report Preparation",

        "Attendance Management",

        "Student Assessment",

        "Practical Evaluation",

        "Project Documentation",

        "Government Reporting",

        "Daily Progress Monitoring",

        "Training Coordination"

    ],

    technologies:[

        "Advanced Excel",

        "MS Office",

        "Solar PV Systems",

        "Google Workspace",

        "Reporting Tools",

        "Project Documentation"

    ],

    achievements:[

        "Successfully trained Suryamitra candidates",

        "Prepared project MIS reports",

        "Maintained project documentation",

        "Supported Government Skill Development Mission"

    ]

},