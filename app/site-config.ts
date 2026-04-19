import type { Metadata } from "next";

type Experience = {
  highlights: string[];
  link?: string;
  period: string;
  role: string;
  stack: string[];
  subtitle: string;
  summary: string;
  title: string;
};

export const SITE_NAME = "Hung Nguyen";
export const SITE_ROLE = "Frontend Developer";
export const SITE_URL = "https://be-deploy.vercel.app";
export const SITE_DESCRIPTION =
  "Portfolio cua Hung Nguyen, tap trung vao Next.js, React va cac du an frontend.";
export const SERVER_DOMAIN =
  process.env.NEXT_PUBLIC_SERVER_DOMAIN?.replace(/\/$/, "") ?? SITE_URL;

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/avatar_trang_1_cd729c335b.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} portfolio cover`,
      },
    ],
  },
  icons: {
    icon: [{ url: `${SITE_URL}/avatar_trang_1_cd729c335b.jpg` }],
  },
  verification: {
    google: "nmnsgjnJTG_EFzE9fyE8eVRXVSMix03TWrG4UqMj95E",
  },
};

export const SHELLLESS_ROUTES = [
  "/ContestReport",
  "/PDFView",
  "/Video",
  "/ImagePage",
];

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/#GioiThieu", label: "About" },
  { href: "/#KyNang", label: "Skills" },
  { href: "/#KinhNghiem", label: "Experience" },
];

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Ant Design", "SCSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Laravel"],
  },
  {
    title: "Database & Tools",
    items: ["MongoDB", "MySQL", "Git", "Figma", "Postman", "Vercel"],
  },
  {
    title: "Animation & UI",
    items: ["GSAP", "Framer Motion"],
  },
  {
    title: "State & Forms",
    items: [
      "React Query",
      "Zustand",
      "Redux",
      "React Hook Form",
      "Custom Hooks",
    ],
  },
] as const;

export const EXPERIENCES: Experience[] = [
  {
    title: "SANTNS",
    subtitle: "E-commerce Platform",
    role: "Front-End Developer",
    period: "11/2024 - 05/2025",
    summary:
      "Built and refined a responsive ecommerce experience focused on product discovery and smoother customer journeys.",
    highlights: [
      "Built responsive shopping flows with Next.js and Ant Design.",
      "Integrated APIs to show real-time product data.",
      "Fixed UI issues and improved page responsiveness.",
      "Worked closely with backend and design teammates for release quality.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Ant Design", "MongoDB", "Node.js"],
    link: "https://santns.com/vi",
  },
  {
    title: "Gao Huu Co TNS",
    subtitle: "Organic Rice Showcase",
    role: "Front-End Developer",
    period: "10/2023 - 02/2024",
    summary:
      "Created a product showcase site that helps users browse organic rice products and dealer information with ease.",
    highlights: [
      "Developed product and dealer showcase pages.",
      "Implemented product search and detail experiences.",
      "Built responsive layouts for catalog and contact content.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "Ant Design", "Node.js", "MongoDB"],
    link: "https://gaohuucotaynam.com/vi",
  },
  {
    title: "Sekatsuku",
    subtitle: "Business Matching Platform",
    role: "Front-End Developer",
    period: "06/2024 - 09/2024",
    summary:
      "Delivered interface work for a platform that connects partners in Vietnam and Japan across multiple industries.",
    highlights: [
      "Designed UI for call management and call list views.",
      "Integrated API data for reminders, history, and role management.",
      "Supported responsive behavior across dashboard surfaces.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "NextUI", "MySQL"],
  },
  {
    title: "Viet Japan Connect",
    subtitle: "Telesales & Business Connectivity",
    role: "Front-End Developer",
    period: "03/2024 - 06/2024",
    summary:
      "Worked on a telesales-focused platform that helps teams manage large calling workflows and business connections.",
    highlights: [
      "Designed article and directory UI for partner discovery.",
      "Integrated APIs to connect business data with the frontend.",
      "Implemented multilingual form support for smoother data entry.",
    ],
    stack: ["React", "Next.js", "SCSS", "Ant Design", "Node.js", "MySQL"],
    link: "https://vjp-connect.com/vi",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100028399301933",
  },
  {
    label: "GitHub",
    href: "https://github.com/MeGaOne47",
  },
] as const;

export const CONTEST_DOCUMENTS = [
  { file: "1.pdf", label: "Bao cao du an", variant: "primary" },
  { file: "2.pdf", label: "Ke hoach nghien cuu", variant: "primary" },
  { file: "3.pdf", label: "Ban thuyet trinh", variant: "primary" },
  { href: "/ImagePage", label: "Hinh anh", variant: "secondary" },
  { href: "/Video", label: "Video", variant: "success" },
] as const;

export const GALLERY_ITEMS = [
  {
    id: "h1",
    src: "/h1.jpg",
    title: "Tam pin nang luong mat troi va bo nap pin",
  },
  {
    id: "h2",
    src: "/h2.jpg",
    title: "Than thap da hoan thien",
  },
  {
    id: "h3",
    src: "/h3.jpg",
    title: "Goc chup thi cong so 1",
  },
  {
    id: "h4",
    src: "/h4.jpg",
    title: "Goc chup thi cong so 2",
  },
  {
    id: "h5",
    src: "/h5.jpg",
    title: "Goc chup thi cong so 3",
  },
  {
    id: "h6",
    src: "/h6.jpg",
    title: "Thap trong qua trinh thu nghiem",
  },
  {
    id: "h7",
    src: "/h7.jpg",
    title: "Chi tiet bo phan lap dat",
  },
  {
    id: "h8",
    src: "/h8.jpg",
    title: "Thap hoan thien voi tam pin va than tru",
  },
] as const;

export const VIDEO_ITEMS = [
  {
    id: "video-1",
    src: "/6140204523240.mp4",
    title: "Video thu nghiem 1",
    description: "Mo phong muc do canh bao tai song den trong bai thu nghiem.",
  },
  {
    id: "video-2",
    src: "/6140211306917.mp4",
    title: "Video thu nghiem 2",
    description: "Ghi lai giai doan van hanh cua mo hinh canh bao lu.",
  },
  {
    id: "video-3",
    src: "/6140808921635.mp4",
    title: "Video thu nghiem 3",
    description: "Tong hop them mot lan thu nghiem ngoai thuc te.",
  },
] as const;

export function buildServerAssetUrl(pathname: string) {
  return `${SERVER_DOMAIN}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function buildGoogleViewerUrl(file: string) {
  return `https://docs.google.com/gview?url=${encodeURIComponent(
    buildServerAssetUrl(`/view/${file}`),
  )}&embedded=true`;
}
