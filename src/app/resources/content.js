import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Wahyu',
    lastName:  'Ardian',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Web Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta',       
    languages: ['English', 'Bahasa'] 
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/WahyuArd1401',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/wahyuardian/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mohammadwahyu.ardian@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Unifying Aesthetics and Technology</>,
    subline: <>I'm Wahyu, a <InlineCode>web developer</InlineCode> who blends design and functionality to craft seamless digital experiences. From code to creation, I bring ideas to life online.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Wahyu is a web developer focused on simplifying complex challenges into intuitive and effective web solutions. His expertise includes developing digital interfaces, creating interactive experiences, and blending design with technology for optimal results.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Experience',
        experiences: [
            {
                company: 'Lab Law',
                timeframe: 'February 2024 - July 2024',
                role: 'Head of Web Development',
                achievements: [
                    <>Led a team of 2 internship employees</>,
                    <>Identified and outlined website requirements based on the director's guidance</>,
                    <>Organized the timeline for website development</>,
                    <>Conducted website development using the Laravel, Inertia.js, and React.js frameworks</>,
                    <>Designed 19 website pages in Figma</>,
                    <>Sliced 8 pages and ensured responsive design for user views</>,
                    <>Provided 5 monthly progress repor,ts to the director and founder</>,
                    <>Awarded Best Head in May and June</>,
                    <>Managed domain and hosting service purchases</>,
                    <>Supervised website deployment using Domainesia</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/lablaw/Certificate of Appreciation.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                company: 'Core Initiative x Rakamin Academy',
                timeframe: 'January 2024 - February 2024',
                role: 'Frontend Developer',
                achievements: [
                    <>Successfully deployed the project in local environment using Docker Desktop and cloud environment using Firebase</>,
                    <>Included in the Ordinary Student category by completing 4 assignments and getting an average score of 78.5</>,
                    <>Slicing the final project UI with 90% similarity to the predetermined design using the Vue.js framework</>,
                    <>Successfully obtained and displayed 20 data from the Fakestore API using the Axios library</>,
                ],
                images: [ ]
            },
            {
                company: 'Bangkit Academy 2023 Batch 1',
                timeframe: 'February 2023 - July 2023',
                role: 'Cloud Computing Cohort',
                achievements: [
                    <>Conducted self-study and obtained 5 certificates from Dicoding and Coursera courses, along with 24 completion badges from Google Skill Boost.</>,
                    <>Participated in 17 Instructor Led Training (ILT) sessions covering soft skills, hard skills, and English language proficiency.</>,
                    <>Enhanced understanding of concepts and technologies related to cloud computing through exploration of the Google Cloud Platform.</>,
                    <>Experienced in integrating cloud services in the development of the Sawit-Hub application project</>,
                ],
                images: [ ]
            },
            {
                company: 'CV. Interlink Indonesia Network',
                timeframe: 'April 2023 - July 2023',
                role: 'Mobile Developer',
                achievements: [
                    <>Designed 34 wireframes in Figma</>,
                    <>Translated 34 layouts into Flutter components for the IndeKost application</>,
                    <>Developed and implemented API fetching functionality</>,
                ],
                images: [ ]
            }, 
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Brawijaya University',
                description: <>Informatics engineering.</>,
            },
            {
                name: 'SMA Negeri 1 Bangil',
                description: <>Nature Science</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <></>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'vertikal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertikal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };