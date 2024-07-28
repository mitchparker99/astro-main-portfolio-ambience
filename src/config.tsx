import type { JSX } from "solid-js";

export type Work = {
  title: string;
  description: string | JSX.Element;
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  onlyYear?: boolean;
};

export const works: Work[] = [
  {
    title: "Epworth Freemasons",
    description: (
      <div>
        <h4 class="font-bold">Theatre Technician</h4>
      </div>
    ),
    startDate: "2024-07-01",
    onlyYear: true,
  },
  {
    title: "SAH Studios",
    description: (
      <div>
        <h4 class="font-bold">Director of Marketing</h4>
      </div>
    ),
    startDate: "2023-07-01",
    endDate: "2024-02-01",
    onlyYear: true,
  },
  {
    title: "Ramsay Health",
    description: (
      <div>
        <h4 class="font-bold">T&D / Adminstrator</h4>
      </div>
    ),
    startDate: "2023-07-01",
    endDate: "2024-02-01",
    onlyYear: true,
  },
  {
    title: "Fiona Stanley Hospital",
    description: (
      <div>
        <h4 class="font-bold">Administrator</h4>
      </div>
    ),
    startDate: "2021-09-01",
    endDate: "2023-05-01",
    onlyYear: true,
  },
  {
    title: "Defence Force: Army",
    description: (
      <div>
        <h4 class="font-bold">Driver Specialist</h4>
      </div>
    ),
    startDate: "2019-04-01",
    endDate: "2021-01-01",
    onlyYear: true,
  },
  {
    title: "Company name",
    description: (
      <div>
        <h2>Job Title: Marketing Specialist</h2>
        <h4>Job Description:</h4>
        <p>
          ABC Corporation is seeking a highly motivated and creative Marketing
          Specialist to join our dynamic marketing team.
        </p>
        <br />
        <h4 class="font-bold">Responsibilities:</h4>
        <ul class="list-disc list-inside">
          <li>
            Develop and execute integrated marketing campaigns across various
            channels
          </li>
          <li>Conduct market research and competitor analysis</li>
          <li>Create engaging content for marketing materials</li>
          <li>Manage and optimize digital advertising campaigns</li>
          <li>Monitor and analyze marketing metrics</li>
        </ul>
      </div>
    ),
    startDate: "2023-01-01",
    onlyYear: true,
  },
];

export type Project = {
  title: string;
  description: string | JSX.Element;
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  onlyYear?: boolean;
};

export const projects: Project[] = [
  {
    title: "Epworth Freemasons",
    description: (
      <div>
        <h4 class="font-bold">Theatre Technician</h4>
      </div>
    ),
    startDate: "2024-07-01",
    onlyYear: true,
  },
  {
    title: "Company name",
    description: (
      <div>
        <h2>Job Title: Marketing Specialist</h2>
        <h4>Job Description:</h4>
        <p>
          ABC Corporation is seeking a highly motivated and creative Marketing
          Specialist to join our dynamic marketing team.
        </p>
        <br />
        <h4 class="font-bold">Responsibilities:</h4>
        <ul class="list-disc list-inside">
          <li>
            Develop and execute integrated marketing campaigns across various
            channels
          </li>
          <li>Conduct market research and competitor analysis</li>
          <li>Create engaging content for marketing materials</li>
          <li>Manage and optimize digital advertising campaigns</li>
          <li>Monitor and analyze marketing metrics</li>
        </ul>
      </div>
    ),
    startDate: "2023-01-01",
    onlyYear: true,
  },
];

export const socials = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/mitchparker99/",
  },
  {
    title: "Github",
    url: "https://github.com/mitchparker99",
  },
  {
    title: "Medium",
    url: "https://medium.com/@mitchparker99",
  },
];

export const blogInfo = {
  title: "Blog",
  description: "All taken from my Medium blog",
};

export const routes = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Work",
    slug: "/work",
  },
  {
    title: "Blog",
    slug: "/blog",
  },
  {
    title: "About",
    slug: "/about",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
  {
    title: "Now",
    slug: "/now",
  },
];

export const email = "mitchelljamesparker99@gmail.com";
export const websiteUrl = "https://astro-personal-portfolio.netlify.app";

export const aboutmeDescription = `I am a dedicated and ambitious individual currently residing in Melbourne, actively seeking opportunities as an Intern or Junior Data Scientist/Analyst. I have recently completed my Graduate Certificate in Data Science and am on track to finish my Master's in Data Science by February next year. My academic journey has equipped me with a strong foundation in data analysis, machine learning, and visualization. I am eager to apply these skills in and to contribute to data-driven decision-making and innovation.
`;

export const rssUrl = `${websiteUrl}/rss.xml`