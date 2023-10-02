const logotext = "RDP";
const meta = {
    title: "Ryan Pfister",
    description: "I'm Ryan Pfister, a technologist and cybersecurity enthuist.",
};

const introdata = {
    title: "Hi, I'm Ryan Pfister",
    animated: {
        first: "Technologist",
        second: "Visionary",
        third: "Ethical Hacker",
        fourth: "Programmer",
        fifth: "Malware Developer",
        sixth: "Analyst",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital world.",
    your_img_url: "https://i.ibb.co/ZHqTrWf/IMG-3684.jpg",
};

const dataabout = {
    title: "Who am I?",
    aboutme: "My name is Ryan, I am a college student attending SUNY Farmingdale studying cybersecurity. I love technology, and I love serving my community.",
};
const worktimeline = [{
        jobtitle: "Owner",
        where: "RDP Consulting",
        description: "Founded, and currently own and operate my own technology consulting firm. This firm provides me with the opportunity to apply my knowledge while assisting others with their technology needs. My dedication to cybersecurity and my drive to continually update my skills make me a reliable and competent consultant.",
        date: "2022-Present",
    },
    {
        jobtitle: "POS Systems Consultant",
        where: "SectionXI, NYSPHSA",
        description: "Responsible for designing and deploying a state-of-the-art point-of-sale ticket system at all Long Island public high schools for playoff games. Currently responsible for maintenance and upkeep of POS ticket system.",
        date: "2022-Present",
    },
    {
        jobtitle: "Firefighter",
        where: "Middle Island Fire Department",
        description: "Volunteer Probationary Firefighter, Eagle Company 1. Certifications: New York State Firefighter I, ICS 100, NIMS 700",
        date: "Oct 2022 - Present",
    },
    {
        jobtitle: "STEAM Counselor",
        where: "Longwood Summer Recreation Program",
        description: "A dedicated and highly motivated STEM Counselor with strong technological and communication skills, a passion for teaching youth, and expertise in designing activities and programs that promote STEM inquiry and exploration. Experience creating classroom materials and leading experiments that engage students of all learning levels and backgrounds. Excellent time management and organizational skills and a commitment to the success of each student. While an employee I was tasked with developing a website to display Longwood Central School District Athletic history on the website. The website can be found at www.longwoodboosterclub.org",
        date: "2023",
    },
    {
        jobtitle: "Manager",
        where: "Longwood Sport Booster Club, Inc.",
        description: "Highly organized and detail-oriented manager with proven ability to lead teams of employees to ensure seamless delivery of service and customer satisfaction. Experienced in establishing effective systems to guarantee proper stock management, food safety, and security. Track record of developing successful marketing strategies to boost profits. Adept in leveraging latest technology to streamline operations. Capable of fostering a team environment to inspire staff motivation and performance.",
        date: "2019-2023",
    },
    {
        jobtitle: "Area Director - Camp Counselor",
        where: "Suffolk County Council, Boy Scouts of America",
        description: "Managed several staff members under me, in-charge of running merit badge classes, and providing Scouts with an amazing summer camp experience. Also served as a camp lifeguard responsible for the safety of campers while swimming or boating.",
        date: "2020-2022",
    },
];

const skills = [{
        name: "JavaScript",
    },
    
    {
        name: "HTML",
    },
    
    {
        name: "Reverse Engineering",
    },
    
    {
        name: "Python",
    },

    {
        name: "Powershell",
    },

    {
        name: "Web-Exploitation",
    },

    {
        name: "Network Exploitation",
    },
];

const dataportfolio = [{
        img: "https://pbs.twimg.com/media/D54KjONWkAIAh8f.png",
        description: "Longwood Booster Club Webiste",
        link: "https://www.longwoodboosterclub.org",
    },
    {
        img: "https://www.sbpli-lifirst.org/sites/all/themes/at_panels_everywhere/images/FIRST-Regional-LONG_ISLAND-h.png",
        description: "FIRST Long Island Volunteer, responsible for all technical aspects of competitions.",
        link: "https://firstlongisland.org",
    },
];

const contactConfig = {
    YOUR_EMAIL: "ryanp@rdpfister.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_cjsoa5n",
    YOUR_TEMPLATE_ID: "template_ylph1ek",
    YOUR_USER_ID: "7TiYYnPXll4ZzXQO7",
};

const socialprofils = {
    github: "https://github.com/ryanpfister",
    linkedin: "https://www.linkedin.com/in/rdpfister/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};