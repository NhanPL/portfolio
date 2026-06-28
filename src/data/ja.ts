import type { Translation } from '@/data/types'

export const ja: Translation = {
  seo: {
    title: 'フルスタック開発者ポートフォリオ',
    description: 'React、TypeScript、TailwindCSSで構築したモダンな多言語ポートフォリオサイトです。',
  },
  common: {
    language: '言語を選択',
    openProfile: 'プロフィールを開く',
    skipToContent: 'メインコンテンツへ移動',
  },
  navigation: {
    ariaLabel: 'メインナビゲーション',
    menuToggle: 'メニューを開閉',
    items: {
      hero: 'ホーム',
      about: '紹介',
      skills: 'スキル',
      experience: '経験',
      projects: 'プロジェクト',
      certificates: '資格',
      contact: '連絡先',
    },
  },
  layout: {
    footerTagline: 'モダンで拡張しやすく、丁寧なWeb体験を構築します。',
    quickLinksTitle: 'クイックリンク',
    socialTitle: 'つながる',
    copyright: 'All rights reserved.',
    backToTop: 'ページ上部へ',
  },
  hero: {
    greeting: 'こんにちは、私は',
    name: 'フルスタック開発者',
    role: 'React、TypeScript、モダンなWebシステム',
    description:
      'Hero、About、Skills、Experience、Projects、Certificates、Contactへ拡張できるデータ駆動型ポートフォリオの基盤です。',
    downloadCv: 'CVをダウンロード',
    contact: 'お問い合わせ',
    avatarAlt: 'ポートフォリオのアバター',
  },
  about: {
    eyebrow: '紹介',
    title: '品質、パフォーマンス、ユーザー体験に集中します',
    description:
      '明確な構造、保守しやすいコード、ビジネスに合わせて拡張できるWebインターフェースとシステムを構築します。',
    stats: [
      { value: '5+', label: '経験年数' },
      { value: '20+', label: '完了プロジェクト' },
      { value: '3', label: '対応言語' },
    ],
  },
  skills: {
    eyebrow: 'スキル',
    title: 'モダンなフルスタックの技術セット',
    description:
      'Frontend、Backend、データ設計、デリバリーの知識を組み合わせて安定した製品を届けます。',
    categories: [
      {
        title: 'Frontend',
        items: [
          { name: 'React', level: 92, summary: 'コンポーネント設計、hooks、状態管理。' },
          { name: 'TypeScript', level: 90, summary: '厳密な型、再利用可能な契約、良い開発体験。' },
          {
            name: 'TailwindCSS',
            level: 88,
            summary: 'デザインシステム、レスポンシブUI、ユーティリティワークフロー。',
          },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Node.js', level: 84, summary: 'REST API、サービス層、認証。' },
          { name: 'Database', level: 80, summary: 'スキーマ設計、クエリ、データモデリング。' },
          { name: 'Cloud', level: 76, summary: 'デプロイ、監視、基本的なCI/CD。' },
        ],
      },
    ],
  },
  experience: {
    eyebrow: '経験',
    title: '実際のプロダクトを作ってきた経験',
    description: '初期アイデアから本番リリースまで、Webプロダクトに関わってきました。',
    items: [
      {
        role: 'Full-stack Developer',
        company: 'Product Team',
        period: '2022 - 現在',
        summary: 'Webアプリを開発し、パフォーマンスとユーザー体験を改善しました。',
        highlights: ['Frontendアーキテクチャ設計', 'API構築', 'リリースフロー改善'],
      },
      {
        role: 'Frontend Developer',
        company: 'Digital Studio',
        period: '2020 - 2022',
        summary:
          'レスポンシブUI、コンポーネントライブラリ、インタラクティブなアニメーションを構築しました。',
        highlights: ['デザインシステム標準化', 'アクセシビリティ改善', 'ページ速度最適化'],
      },
    ],
  },
  projects: {
    eyebrow: 'プロジェクト',
    title: '代表的な制作物',
    description: 'UI、データ、プロダクト体験の整理方法を示すプロジェクトです。',
    githubLabel: 'ソースコード',
    demoLabel: 'デモを見る',
    items: [
      {
        slug: 'portfolio',
        title: '多言語ポートフォリオ',
        description: '多言語対応と拡張しやすい構造を備えたデータ駆動型ポートフォリオです。',
        tags: ['React', 'TypeScript', 'TailwindCSS'],
      },
      {
        slug: 'dashboard',
        title: '運用ダッシュボード',
        description: 'データ、状態、繰り返し操作に集中した管理画面です。',
        tags: ['React', 'Charts', 'API'],
      },
      {
        slug: 'commerce',
        title: 'コマースプラットフォーム',
        description: '商品管理、カート、決済を含むレスポンシブな購入フローです。',
        tags: ['Full-stack', 'Auth', 'Database'],
      },
    ],
  },
  certificates: {
    eyebrow: '資格',
    title: '検証されたスキル',
    description: 'Frontend、Cloud、開発プロセスを支える資格と学習実績です。',
    verifyLabel: '確認する',
    items: [
      {
        slug: 'aws-foundations',
        title: 'Cloud Foundations',
        issuer: 'AWS',
        issuedAt: '2024',
        description: 'クラウド、デプロイ、インフラ運用の基礎知識。',
      },
      {
        slug: 'react-advanced',
        title: 'Advanced React Patterns',
        issuer: 'Frontend Masters',
        issuedAt: '2023',
        description: 'コンポーネント、状態、パフォーマンスの高度なパターン。',
      },
      {
        slug: 'scrum-master',
        title: 'Scrum Master Fundamentals',
        issuer: 'Scrum Alliance',
        issuedAt: '2022',
        description: 'アジャイルプロセス、チーム連携、継続的改善。',
      },
    ],
  },
  contact: {
    eyebrow: '連絡先',
    title: 'より良いものを一緒に作りましょう',
    description: 'プロジェクト、協業、質問があれば、ぜひご連絡ください。',
    info: {
      email: 'メール',
      phone: '電話',
      location: '所在地',
    },
    form: {
      name: '名前',
      email: 'メール',
      message: 'メッセージ',
      submit: '送信',
    },
  },
}
