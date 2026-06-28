import type { Translation } from '@/data/types'

export const vi: Translation = {
  seo: {
    title: 'Portfolio Full-stack Developer',
    description:
      'Website portfolio hiện đại, đa ngôn ngữ, xây dựng bằng React, TypeScript và TailwindCSS.',
  },
  common: {
    language: 'Chọn ngôn ngữ',
    openProfile: 'Mở hồ sơ cá nhân',
    skipToContent: 'Chuyển đến nội dung chính',
  },
  navigation: {
    ariaLabel: 'Điều hướng chính',
    menuToggle: 'Mở hoặc đóng menu',
    items: {
      hero: 'Trang đầu',
      about: 'Giới thiệu',
      skills: 'Kỹ năng',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      certificates: 'Chứng chỉ',
      contact: 'Liên hệ',
    },
  },
  layout: {
    footerTagline: 'Xây dựng sản phẩm web hiện đại, dễ mở rộng và giàu trải nghiệm.',
    quickLinksTitle: 'Liên kết nhanh',
    socialTitle: 'Kết nối',
    copyright: 'Tất cả quyền được bảo lưu.',
    backToTop: 'Lên đầu trang',
  },
  hero: {
    greeting: 'Xin chào, tôi là',
    name: 'Full-stack Developer',
    role: 'React, TypeScript và hệ thống web hiện đại',
    description:
      'Nền tảng portfolio data-driven đã sẵn sàng để mở rộng thành các section Hero, About, Skills, Experience, Projects, Certificates và Contact.',
    downloadCv: 'Tải CV',
    contact: 'Liên hệ',
    avatarAlt: 'Ảnh đại diện portfolio',
  },
  about: {
    eyebrow: 'Giới thiệu',
    title: 'Tập trung vào sản phẩm, hiệu năng và trải nghiệm người dùng',
    description:
      'Tôi xây dựng giao diện và hệ thống web có cấu trúc rõ ràng, dễ bảo trì, dễ mở rộng và phù hợp với nhu cầu kinh doanh.',
    stats: [
      { value: '5+', label: 'Năm kinh nghiệm' },
      { value: '20+', label: 'Dự án hoàn thành' },
      { value: '3', label: 'Ngôn ngữ hỗ trợ' },
    ],
  },
  skills: {
    eyebrow: 'Kỹ năng',
    title: 'Bộ kỹ năng Full-stack hiện đại',
    description:
      'Kết hợp frontend, backend, kiến trúc dữ liệu và quy trình triển khai để tạo ra sản phẩm ổn định.',
    categories: [
      {
        title: 'Frontend',
        items: [
          {
            name: 'React',
            level: 92,
            summary: 'Component architecture, hooks và state management.',
          },
          {
            name: 'TypeScript',
            level: 90,
            summary: 'Strict typing, reusable contracts và DX tốt.',
          },
          {
            name: 'TailwindCSS',
            level: 88,
            summary: 'Design system, responsive UI và utility workflow.',
          },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Node.js', level: 84, summary: 'REST API, service layer và authentication.' },
          { name: 'Database', level: 80, summary: 'Schema design, queries và data modeling.' },
          { name: 'Cloud', level: 76, summary: 'Deployment, monitoring và CI/CD cơ bản.' },
        ],
      },
    ],
  },
  experience: {
    eyebrow: 'Kinh nghiệm',
    title: 'Hành trình xây dựng sản phẩm thực tế',
    description: 'Kinh nghiệm làm việc trên các sản phẩm web từ ý tưởng đến triển khai.',
    items: [
      {
        role: 'Full-stack Developer',
        company: 'Product Team',
        period: '2022 - Hiện tại',
        summary: 'Phát triển ứng dụng web, tối ưu hiệu năng và cải thiện trải nghiệm người dùng.',
        highlights: ['Thiết kế kiến trúc frontend', 'Xây dựng API', 'Tối ưu quy trình release'],
      },
      {
        role: 'Frontend Developer',
        company: 'Digital Studio',
        period: '2020 - 2022',
        summary: 'Xây dựng UI responsive, component library và animation tương tác.',
        highlights: [
          'Chuẩn hóa design system',
          'Cải thiện accessibility',
          'Tối ưu tốc độ tải trang',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Dự án',
    title: 'Sản phẩm nổi bật',
    description: 'Một số dự án đại diện cho cách tôi tổ chức UI, dữ liệu và trải nghiệm.',
    githubLabel: 'Mã nguồn',
    demoLabel: 'Xem demo',
    items: [
      {
        slug: 'portfolio',
        title: 'Portfolio đa ngôn ngữ',
        description: 'Website portfolio data-driven, hỗ trợ nhiều ngôn ngữ và cấu trúc dễ mở rộng.',
        tags: ['React', 'TypeScript', 'TailwindCSS'],
      },
      {
        slug: 'dashboard',
        title: 'Dashboard vận hành',
        description: 'Giao diện quản trị tập trung vào dữ liệu, trạng thái và thao tác lặp lại.',
        tags: ['React', 'Charts', 'API'],
      },
      {
        slug: 'commerce',
        title: 'Nền tảng thương mại',
        description: 'Luồng mua hàng responsive với quản lý sản phẩm, giỏ hàng và thanh toán.',
        tags: ['Full-stack', 'Auth', 'Database'],
      },
    ],
  },
  certificates: {
    eyebrow: 'Chứng chỉ',
    title: 'Năng lực được xác thực',
    description: 'Các chứng chỉ và khóa học hỗ trợ chuyên môn frontend, cloud và quy trình.',
    verifyLabel: 'Xác thực',
    items: [
      {
        slug: 'aws-foundations',
        title: 'Cloud Foundations',
        issuer: 'AWS',
        issuedAt: '2024',
        description: 'Kiến thức nền tảng về cloud, deployment và vận hành hạ tầng.',
      },
      {
        slug: 'react-advanced',
        title: 'Advanced React Patterns',
        issuer: 'Frontend Masters',
        issuedAt: '2023',
        description: 'Các pattern nâng cao cho component, state và performance.',
      },
      {
        slug: 'scrum-master',
        title: 'Scrum Master Fundamentals',
        issuer: 'Scrum Alliance',
        issuedAt: '2022',
        description: 'Quy trình agile, phối hợp nhóm và cải tiến liên tục.',
      },
    ],
  },
  contact: {
    eyebrow: 'Liên hệ',
    title: 'Hãy cùng xây dựng điều gì đó tốt hơn',
    description: 'Bạn có dự án, cơ hội hợp tác hoặc câu hỏi? Tôi luôn sẵn sàng trao đổi.',
    info: {
      email: 'Email',
      phone: 'Điện thoại',
      location: 'Địa điểm',
    },
    form: {
      name: 'Họ tên',
      email: 'Email',
      message: 'Nội dung',
      submit: 'Gửi tin nhắn',
    },
  },
}
