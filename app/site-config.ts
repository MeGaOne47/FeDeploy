import type { Metadata } from "next";

export type Language = "en" | "vi";

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
export const SITE_DESCRIPTION = "Portfolio cua Hung Nguyen, tap trung vao Next.js, React va cac du an frontend.";

export const ROOT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: { title: SITE_NAME, description: SITE_DESCRIPTION, type: "website", url: SITE_URL, images: [{ url: `${SITE_URL}/avatar_trang_1_cd729c335b.jpg`, width: 1200, height: 630, alt: `${SITE_NAME} portfolio cover` }] },
  icons: { icon: [{ url: `${SITE_URL}/avatar_trang_1_cd729c335b.jpg` }] },
  verification: { google: "nmnsgjnJTG_EFzE9fyE8eVRXVSMix03TWrG4UqMj95E" },
};

export const SHELLLESS_ROUTES = ["/Video", "/ImagePage"];

export const NAV_ITEMS = {
  en: [
    { href: "/", label: "Home" },
    { href: "/#GioiThieu", label: "About" },
    { href: "/#KyNang", label: "Skills" },
    { href: "/#KinhNghiem", label: "Experience" },
  ],
  vi: [
    { href: "/", label: "Trang chủ" },
    { href: "/#GioiThieu", label: "Giới thiệu" },
    { href: "/#KyNang", label: "Kỹ năng" },
    { href: "/#KinhNghiem", label: "Kinh nghiệm" },
  ],
} as const;

const SKILLS = [
  ["JavaScript", "TypeScript", "PHP"],
  ["React", "Next.js", "Tailwind CSS", "Ant Design", "SCSS"],
  ["Node.js", "NestJS", "Laravel"],
  ["MongoDB", "MySQL", "Git", "Figma", "Postman", "Vercel"],
  ["GSAP", "Framer Motion"],
  ["React Query", "Zustand", "Redux", "React Hook Form", "Custom Hooks"],
];

export const SKILL_GROUPS = {
  en: [
    { title: "Programming Languages", items: SKILLS[0] },
    { title: "Frontend", items: SKILLS[1] },
    { title: "Backend", items: SKILLS[2] },
    { title: "Database & Tools", items: SKILLS[3] },
    { title: "Animation & UI", items: SKILLS[4] },
    { title: "State & Forms", items: SKILLS[5] },
  ],
  vi: [
    { title: "Ngôn ngữ lập trình", items: SKILLS[0] },
    { title: "Front-end", items: SKILLS[1] },
    { title: "Back-end", items: SKILLS[2] },
    { title: "Cơ sở dữ liệu & công cụ", items: SKILLS[3] },
    { title: "Animation & UI", items: SKILLS[4] },
    { title: "Quản lý state & form", items: SKILLS[5] },
  ],
} as const;

export const EXPERIENCES: Record<Language, Experience[]> = {
  en: [
    { title: "SANTNS", subtitle: "E-commerce Platform", role: "Front-End Developer", period: "11/2024 - 05/2025", summary: "Built and refined a responsive ecommerce experience focused on product discovery and smoother customer journeys.", highlights: ["Built responsive shopping flows with Next.js and Ant Design.", "Integrated APIs to show real-time product data.", "Fixed UI issues and improved page responsiveness.", "Worked closely with backend and design teammates for release quality."], stack: ["React", "Next.js", "Tailwind CSS", "Ant Design", "MongoDB", "Node.js"], link: "https://santns.com/vi" },
    { title: "Gao Huu Co TNS", subtitle: "Organic Rice Showcase", role: "Front-End Developer", period: "10/2023 - 02/2024", summary: "Created a product showcase site that helps users browse organic rice products and dealer information with ease.", highlights: ["Developed product and dealer showcase pages.", "Implemented product search and detail experiences.", "Built responsive layouts for catalog and contact content."], stack: ["React", "Next.js", "Tailwind CSS", "Ant Design", "Node.js", "MongoDB"], link: "https://gaohuucotaynam.com/vi" },
    { title: "Sekatsuku", subtitle: "Business Matching Platform", role: "Front-End Developer", period: "06/2024 - 09/2024", summary: "Delivered interface work for a platform that connects partners in Vietnam and Japan across multiple industries.", highlights: ["Designed UI for call management and call list views.", "Integrated API data for reminders, history, and role management.", "Supported responsive behavior across dashboard surfaces."], stack: ["React", "Next.js", "Tailwind CSS", "NextUI", "MySQL"] },
    { title: "Viet Japan Connect", subtitle: "Telesales & Business Connectivity", role: "Front-End Developer", period: "03/2024 - 06/2024", summary: "Worked on a telesales-focused platform that helps teams manage large calling workflows and business connections.", highlights: ["Designed article and directory UI for partner discovery.", "Integrated APIs to connect business data with the frontend.", "Implemented multilingual form support for smoother data entry."], stack: ["React", "Next.js", "SCSS", "Ant Design", "Node.js", "MySQL"], link: "https://vjp-connect.com/vi" },
  ],
  vi: [
    { title: "SANTNS", subtitle: "Nền tảng thương mại điện tử", role: "Lập trình viên Front-end", period: "11/2024 - 05/2025", summary: "Xây dựng và hoàn thiện trải nghiệm mua sắm responsive, hỗ trợ khám phá sản phẩm và hành trình khách hàng mượt mà hơn.", highlights: ["Xây dựng luồng mua sắm responsive với Next.js và Ant Design.", "Tích hợp API để hiển thị dữ liệu sản phẩm theo thời gian thực.", "Khắc phục lỗi UI và cải thiện khả năng hiển thị trên nhiều kích thước màn hình.", "Phối hợp cùng backend và design để đảm bảo chất lượng phát hành."], stack: ["React", "Next.js", "Tailwind CSS", "Ant Design", "MongoDB", "Node.js"], link: "https://santns.com/vi" },
    { title: "Gạo Hữu Cơ TNS", subtitle: "Website giới thiệu gạo hữu cơ", role: "Lập trình viên Front-end", period: "10/2023 - 02/2024", summary: "Xây dựng website giới thiệu sản phẩm, giúp người dùng dễ dàng tìm hiểu gạo hữu cơ và thông tin đại lý.", highlights: ["Phát triển các trang giới thiệu sản phẩm và đại lý.", "Triển khai trải nghiệm tìm kiếm và xem chi tiết sản phẩm.", "Xây dựng bố cục responsive cho catalog và nội dung liên hệ."], stack: ["React", "Next.js", "Tailwind CSS", "Ant Design", "Node.js", "MongoDB"], link: "https://gaohuucotaynam.com/vi" },
    { title: "Sekatsuku", subtitle: "Nền tảng kết nối doanh nghiệp", role: "Lập trình viên Front-end", period: "06/2024 - 09/2024", summary: "Phát triển giao diện cho nền tảng kết nối đối tác Việt Nam và Nhật Bản thuộc nhiều ngành nghề.", highlights: ["Thiết kế UI cho quản lý cuộc gọi và danh sách cuộc gọi.", "Tích hợp dữ liệu API cho nhắc việc, lịch sử và phân quyền.", "Hỗ trợ responsive trên các màn hình dashboard."], stack: ["React", "Next.js", "Tailwind CSS", "NextUI", "MySQL"] },
    { title: "Viet Japan Connect", subtitle: "Telesales & kết nối doanh nghiệp", role: "Lập trình viên Front-end", period: "03/2024 - 06/2024", summary: "Tham gia phát triển nền tảng telesales, hỗ trợ quản lý quy trình gọi và kết nối doanh nghiệp.", highlights: ["Thiết kế giao diện bài viết và danh bạ đối tác.", "Tích hợp API kết nối dữ liệu doanh nghiệp với giao diện.", "Triển khai biểu mẫu đa ngôn ngữ giúp nhập liệu thuận tiện hơn."], stack: ["React", "Next.js", "SCSS", "Ant Design", "Node.js", "MySQL"], link: "https://vjp-connect.com/vi" },
  ],
};

export const CONTENT = {
  en: { heroKicker: "Portfolio", heroTitle: "Frontend Developer focused on building maintainable and polished web experiences.", heroDescription: "I like turning product ideas into fast interfaces, improving user journeys, and shipping frontend work that stays clean as projects grow.", viewExperience: "View Experience", aboutKicker: "About Me", aboutTitle: "Frontend-focused developer with a product mindset", aboutDescription: "I enjoy building clean interfaces, integrating real APIs, and improving user flows so products feel faster, clearer, and easier to use.", skillsKicker: "Skills", skillsTitle: "Core tools and technologies", experienceKicker: "Experience", experienceTitle: "Selected work and product experience", visitProject: "Visit project", footerRights: "All rights reserved.", languageLabel: "Switch language" },
  vi: { heroKicker: "Portfolio", heroTitle: "Lập trình viên Front-end tập trung xây dựng sản phẩm web chỉn chu và dễ mở rộng.", heroDescription: "Tôi phát triển giao diện nhanh, rõ ràng; cải thiện hành trình người dùng và duy trì mã nguồn sạch khi sản phẩm phát triển.", viewExperience: "Xem kinh nghiệm", aboutKicker: "Giới thiệu", aboutTitle: "Lập trình viên Front-end với tư duy sản phẩm", aboutDescription: "Tôi xây dựng giao diện dễ sử dụng, tích hợp API thực tế và cải thiện luồng thao tác để sản phẩm nhanh, rõ ràng hơn.", skillsKicker: "Kỹ năng", skillsTitle: "Công nghệ và công cụ chính", experienceKicker: "Kinh nghiệm", experienceTitle: "Dự án và kinh nghiệm nổi bật", visitProject: "Xem dự án", footerRights: "Bảo lưu mọi quyền.", languageLabel: "Chuyển ngôn ngữ" },
} as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100028399301933" },
  { label: "GitHub", href: "https://github.com/MeGaOne47" },
] as const;

