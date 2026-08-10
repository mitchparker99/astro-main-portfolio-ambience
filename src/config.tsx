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
    title: "DiceWill",
    description: (
      <div>
        <h4 class="font-bold">Co-Founder & COO · AI & Data Strategy</h4>
        <h6 class="text-neutral-500 text-sm mb-2">
          UAE / India · AI health platform — WhatsApp-first triage, records and
          medication management
        </h6>
        <ul class="list-disc list-inside">
          <li>
            Co-founded a platform serving a $12B MENA market of 600M+ patients,
            owning every function around the product while the technical
            co-founder owns product engineering.
          </li>
          <li>
            Owns AI & data strategy — data-collection architecture,
            anonymisation and retention policy, consent design, and the AI
            feedback loop that improves triage accuracy from live sessions.
          </li>
          <li>
            Built the compliance framework from scratch (DPDPA, DHA Dubai, GDPR
            principles) and the governance narrative repositioning DiceWill as
            an AI clinical-intelligence platform with a proprietary data asset.
          </li>
          <li>
            Leads operations, tooling and partnerships — 8 providers signed, 120
            waitlisted at MVP; running a $500K seed.
          </li>
        </ul>
        <h6 class="text-neutral-500 text-sm mt-2">
          React Native · Node.js · WhatsApp Business API · Supabase · Claude
        </h6>
      </div>
    ),
    startDate: "2025-01-01",
    onlyYear: true,
  },
  {
    title: "Mine Market",
    description: (
      <div>
        <h4 class="font-bold">Data Architect</h4>
        <h6 class="text-neutral-500 text-sm mb-2">Australia · minemarket.ai</h6>
        <ul class="list-disc list-inside">
          <li>
            Owns the data architecture — ingestion, warehouse modelling, and the
            BI layer leadership makes product and commercial decisions from.
          </li>
          <li>
            Data-quality and governance controls designed in from day one.
          </li>
        </ul>
        <h6 class="text-neutral-500 text-sm mt-2">
          PostgreSQL · Python · AWS · Power BI
        </h6>
      </div>
    ),
    startDate: "2024-01-01",
    onlyYear: true,
  },
  {
    title: "SAH Studios",
    description: (
      <div>
        <h4 class="font-bold">Founder</h4>
        <h6 class="text-neutral-500 text-sm mb-2">Japan / Australia</h6>
        <ul class="list-disc list-inside">
          <li>
            Founded and scaled an AI-automation agency to 100+ clients across
            e-commerce, hospitality and professional services — owning delivery,
            pricing, hiring and P&L.
          </li>
          <li>
            Productised outreach automation into reusable per-client modules;
            built Stripe billing and the sales-enablement stack.
          </li>
        </ul>
      </div>
    ),
    startDate: "2022-01-01",
    onlyYear: true,
  },
  {
    title: "Royal Melbourne Hospital",
    description: (
      <div>
        <h4 class="font-bold">Systems & Fleet Lead · Help Desk Analyst</h4>
        <h6 class="text-neutral-500 text-sm mb-2">Melbourne, VIC</h6>
        <ul class="list-disc list-inside">
          <li>
            Led implementation of a new fleet-management platform (LBM) across
            the hospital network — vendor coordination, configuration, data
            migration and real-time asset tracking.
          </li>
          <li>
            Ran system-improvement projects with senior management, translating
            operational goals into technical scope and delivery sequencing.
          </li>
          <li>
            Delivered frontline IT support while owning operational metrics and
            service standards in a 24/7 clinical environment.
          </li>
        </ul>
      </div>
    ),
    startDate: "2025-03-01",
    endDate: "2025-12-01",
    onlyYear: true,
  },
  {
    title: "Precision Analytics",
    description: (
      <div>
        <h4 class="font-bold">Data Analyst</h4>
        <h6 class="text-neutral-500 text-sm mb-2">Melbourne, VIC</h6>
        <ul class="list-disc list-inside">
          <li>
            Delivered client data-analysis engagements in Python, SQL and Excel;
            built Tableau dashboards for reporting and BI.
          </li>
          <li>
            Established the data-quality and governance frameworks that set
            consistent analysis standards across engagements.
          </li>
        </ul>
      </div>
    ),
    startDate: "2024-05-01",
    endDate: "2024-09-01",
    onlyYear: true,
  },
  {
    title: "Ramsay Healthcare",
    description: (
      <div>
        <h4 class="font-bold">Helpdesk Analyst</h4>
      </div>
    ),
    startDate: "2023-01-01",
    endDate: "2023-12-01",
    onlyYear: true,
  },
  {
    title: "QT Hotels",
    description: (
      <div>
        <h4 class="font-bold">Hotel Manager</h4>
        <h6 class="text-neutral-500 text-sm">Melbourne</h6>
      </div>
    ),
    startDate: "2023-01-01",
    endDate: "2024-12-01",
    onlyYear: true,
  },
  {
    title: "SAH Studios",
    description: (
      <div>
        <h4 class="font-bold">Lead Analyst & Marketing Manager</h4>
        <h6 class="text-neutral-500 text-sm mb-2">Australia</h6>
        <ul class="list-disc list-inside">
          <li>
            Led data-driven growth strategy for an e-commerce brand, merging
            analytics with commercial decision-making.
          </li>
          <li>
            Owned marketing operations and market-trend analysis, driving
            measurable gains in visibility and customer acquisition.
          </li>
        </ul>
      </div>
    ),
    startDate: "2022-09-01",
    endDate: "2024-01-01",
    onlyYear: true,
  },
  {
    title: "NZ Ski",
    description: (
      <div>
        <h4 class="font-bold">Hostel & Retail Manager</h4>
        <h6 class="text-neutral-500 text-sm">Queenstown, New Zealand</h6>
      </div>
    ),
    startDate: "2022-01-01",
    endDate: "2022-12-01",
    onlyYear: true,
  },
  {
    title: "St John Ambulance WA",
    description: (
      <div>
        <h4 class="font-bold">Helpdesk Analyst</h4>
      </div>
    ),
    startDate: "2021-01-01",
    endDate: "2023-12-01",
    onlyYear: true,
  },
  {
    title: "Australian Defence Force — Army",
    description: (
      <div>
        <h4 class="font-bold">Driver Specialist</h4>
      </div>
    ),
    startDate: "2018-01-01",
    endDate: "2023-12-01",
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
    title: "Parker AI",
    description: (
      <div>
        <h4 class="font-bold">Production Voice AI · In development</h4>
        <p class="mt-1">
          Conversational Japanese tutor chaining real-time speech recognition
          (Deepgram Nova-3) into LLM response generation (Claude), with
          pronunciation scoring, JLPT-aligned curriculum and spaced repetition.
          Production LLM engineering — latency budgets, evaluation sets and cost
          control.
        </p>
        <h6 class="text-neutral-500 text-sm mt-2">
          Next.js 15 · TypeScript · Deepgram · Claude API · Supabase · Vercel
        </h6>
      </div>
    ),
    startDate: "2026-01-01",
    endDate: "2026-12-01",
    onlyYear: true,
  },
  {
    title: "Horizon IT",
    description: (
      <div>
        <h4 class="font-bold">
          Enterprise Systems Integration · In development
        </h4>
        <p class="mt-1">
          Integration layer unifying Lightspeed POS, Deputy workforce management
          and NowBookIt bookings for a multi-site hospitality client — API
          contracts, sync orchestration and a single reporting schema across
          three vendors.
        </p>
        <h6 class="text-neutral-500 text-sm mt-2">
          Node.js · REST APIs · PostgreSQL · Next.js
        </h6>
      </div>
    ),
    startDate: "2025-01-01",
    endDate: "2026-12-01",
    onlyYear: true,
  },
  {
    title: "Tabiji",
    description: (
      <div>
        <h4 class="font-bold">Location Data Companion · Pre-launch</h4>
        <p class="mt-1">
          Location-aware trip planner that ingests Google Maps saved-place
          exports into a normalised itinerary model covering routes, filming
          locations, food logs and inventory.
        </p>
        <h6 class="text-neutral-500 text-sm mt-2">
          Next.js · Supabase · Google Maps API
        </h6>
      </div>
    ),
    startDate: "2025-01-01",
    endDate: "2025-12-01",
    onlyYear: true,
  },
  {
    title: "Orbis",
    description: (
      <div>
        <h4 class="font-bold">360° Video Platform · In development</h4>
        <p class="mt-1">
          Browser-based editor for spherical and 360° footage aimed at creators,
          real-estate and travel media — GPU rendering pipeline in WebGL /
          Three.js over a Python processing backend.
        </p>
        <h6 class="text-neutral-500 text-sm mt-2">
          React · WebGL · Three.js · Python
        </h6>
      </div>
    ),
    startDate: "2024-01-01",
    endDate: "2025-12-01",
    onlyYear: true,
  },
  {
    title: "Meridian",
    description: (
      <div>
        <h4 class="font-bold">
          Algorithmic Trading Engine · Live · Open source
        </h4>
        <p class="mt-1">
          Open-source execution engine bridging Crypto.com and Alpaca —
          configurable strategy parameters, automated order logic and risk
          limits across crypto and equities. Published for public review.
        </p>
        <h6 class="text-neutral-500 text-sm mt-2">
          Python · REST/WebSocket APIs · Crypto.com · Alpaca
        </h6>
      </div>
    ),
    startDate: "2023-01-01",
    endDate: "2024-12-01",
    onlyYear: true,
  },
  {
    title: "Chrome Furniture",
    description: (
      <div>
        <h4 class="font-bold">
          Commerce + Business Intelligence · Live
        </h4>
        <p class="mt-1">
          Premium storefront with supplier API integration and an automated
          image-processing pipeline. Built the order-management backend plus a
          Power BI revenue and expense model that became the business's
          reporting layer.
        </p>
        <h6 class="text-neutral-500 text-sm mt-2">
          Next.js · Supabase · Stripe · AliExpress API · Power BI
        </h6>
      </div>
    ),
    startDate: "2023-01-01",
    endDate: "2023-12-01",
    onlyYear: true,
  },
  {
    title: "Repeat Dance Records",
    description: (
      <div>
        <h4 class="font-bold">Vinyl E-Commerce · Live</h4>
        <p class="mt-1">
          First commercial platform: full-stack storefront on the Discogs API
          with 13-currency checkout, artist/category taxonomy, media embeds and
          a recommendation engine. Established the architecture pattern reused
          across every later commerce build.
        </p>
        <h6 class="text-neutral-500 text-sm mt-2">
          Next.js 15 · TypeScript · Supabase · Stripe · Discogs API
        </h6>
      </div>
    ),
    startDate: "2022-01-01",
    endDate: "2022-12-01",
    onlyYear: true,
  },
];

export const socials = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mitchparker99/",
  },
  {
    title: "GitHub",
    url: "https://github.com/mitchparker99",
  },
  {
    title: "X",
    url: "https://x.com/mitchparker99",
  },
];

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
    title: "Projects",
    slug: "/projects",
  },
  {
    title: "About",
    slug: "/about",
  },
  {
    title: "Now",
    slug: "/now",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
];

export const owner = "Mitchell Parker";
export const jobTitle = "Technology Executive · AI & Data Architecture";
export const location = "Japan / Australia";
export const availability = "Remote, available globally";

export const email = "mitchelljamesparker99@gmail.com";

// Keep in sync with `websiteUrl` in astro.config.mjs
export const websiteUrl = "https://portfolio-ambience.vercel.app";

export const aboutmeDescription = `Technology leader and startup co-founder who owns strategy, AI adoption and data architecture end-to-end — then stays close enough to the build to set the standard. Co-Founder & COO of DiceWill, an AI health platform targeting a $12B MENA market, owning AI & data strategy, governance and compliance. Data Architect at Mine Market; Founder of SAH Studios, an AI-automation agency with 100+ clients. Seven platforms shipped end-to-end. Healthcare depth across four Australian networks. Master of Information Technology — GPA 6.17, Executive Dean's Award; AWS Certified Solutions Architect.`;
