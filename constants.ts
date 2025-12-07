import { CaseStudy, GalleryItem } from './types';

// ==========================================
// 个人信息 (PERSONAL INFO)
// ==========================================
export const PERSONAL_INFO = {
  name: "王菁瑶",
  enName: "Wang Jingyao",
  title: "艺术与视觉设计",
  email: "wangjingyao@example.com",
  intro: "融汇古典美学与严谨逻辑。探索视觉感知、文化传承与现代交互的交汇点，致力于在优雅与理性之间寻求平衡。",
  education: "视觉传达设计硕士化",
};

// ==========================================
// 项目展示 (CASE STUDIES)
// ==========================================
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "project-1",
    title: "轻盈 · 瘦身保健品品牌视觉全案",
    subtitle: "Brand Visual Identity for Slimming Health Products",
    tags: ["品牌识别", "包装设计", "视觉系统"],
    description: "本项目旨在重塑针对年轻群体的保健品品牌形象。超越单纯的包装设计，传达“轻盈”的哲学。通过流动的线条与负空间解构视觉重量，消除与膳食补充剂相关的心理负担。",
    phases: {
      inspiration: {
        title: "01 灵感",
        description: "源于自然的有机曲线——风拂过丝绸的动态与植物生长的韵律。这些元素象征着生命的代谢节奏。",
        // 修改了这里：将网络图片 URL 换成了本地路径 /images/test-image.jpg
        images: [{ src: "https://i.imgs.ovh/2025/12/07/CPgrw1.jpeg", alt: "自然灵感" }]
      },
      brainstorm: {
        title: "02 构思",
        description: "探索“纯净”、“流动”、“焕新”的抽象概念。从具象符号迭代至最终的流体抽象形态，推导过程注重形态的呼吸感。",
        images: [{ src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", alt: "草图与思维导图" }]
      },
      research: {
        title: "03 调研",
        description: "市场分析显示竞品多采用高饱和度的医美风格。我们采取差异化策略，运用莫兰迪色系（鼠尾草绿、米白、淡粉）营造高端健康感而非临床治疗感。",
        images: [{ src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop", alt: "色彩分析" }]
      },
      experiments: {
        title: "04 实验",
        description: "字体实验对比了古典衬线体与现代无衬线体的张力。材质研究专注于包装表面的触感体验，寻找类肤质感的纸张。",
        images: [{ src: "https://images.unsplash.com/photo-1507643179173-617d67456adb?q=80&w=1000&auto=format&fit=crop", alt: "视觉实验" }]
      },
      application: {
        title: "05 应用",
        description: "最终的识别系统应用于包装、数字媒体及周边物料。建立了一套静谧而权威的视觉语言，在货架上形成独特的视觉安宁。",
        images: [
          { src: "https://images.unsplash.com/photo-1632515949504-245362df5f4a?q=80&w=1000&auto=format&fit=crop", alt: "包装设计" },
          { src: "https://images.unsplash.com/photo-1563969562-b7e3f8981329?q=80&w=1000&auto=format&fit=crop", alt: "品牌物料" }
        ]
      }
    }
  },
  {
    id: "project-2",
    title: "墨韵霓裳 · 国画汉服换装游戏UI",
    subtitle: "UI Design for Traditional Chinese Painting Style Game",
    tags: ["UI/UX", "游戏界面", "文化遗产"],
    description: "致力于传统服饰文化的数字化交互体验。挑战在于将工笔画的细腻笔触转化为功能性的现代游戏界面，同时不破坏沉浸感。",
    phases: {
      inspiration: {
        title: "01 灵感",
        description: "研习宋画（如《韩熙载夜宴图》）的构图与设色。从古代建筑构件与传统器物中提取UI组件的形态。",
        images: [{ src: "https://i.imgs.ovh/2025/12/07/CPgfJb.png", alt: "历史参考" }]
      },
      brainstorm: {
        title: "02 构思",
        description: "重定义交互隐喻：选择即“妆点”，导航即“展卷”。UI动效模拟展卷阅览与研磨颜料的物理动作，赋予操作以仪式感。",
        images: [{ src: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?q=80&w=1000&auto=format&fit=crop", alt: "交互草图" }]
      },
      research: {
        title: "03 调研",
        description: "分析竞品的“视觉噪点”。确立“留白”为核心UI原则，减少装饰性干扰，以突显服饰本身的精美细节。",
        images: [{ src: "https://images.unsplash.com/photo-1518544866385-b59c77e43697?q=80&w=1000&auto=format&fit=crop", alt: "布局分析" }]
      },
      experiments: {
        title: "04 实验",
        description: "测试宣纸纹理在屏幕上的数字渲染效果。优化按钮状态，使其交互反馈类似墨迹晕染而非机械点击。",
        images: [{ src: "https://images.unsplash.com/photo-1582201385419-4564532b6e1f?q=80&w=1000&auto=format&fit=crop", alt: "纹理测试" }]
      },
      application: {
        title: "05 应用",
        description: "最终UI实现包含衣橱系统、剧情对话及图标设计。构建了一套连接古今、雅俗共赏的交互界面。",
        images: [
          { src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop", alt: "主界面" },
          { src: "https://images.unsplash.com/photo-1596464716127-f9a865e0e193?q=80&w=1000&auto=format&fit=crop", alt: "细节展示" }
        ]
      }
    }
  }
];

// ==========================================
// 国画作品 (CHINESE PAINTING)
// ==========================================
export const CHINESE_PAINTINGS: GalleryItem[] = [
  {
    id: "cp-1",
    title: "四季花卉条屏",
    category: "纸本水墨",
    medium: "传统国画",
    images: [
      { src: "https://images.unsplash.com/photo-1526494631346-635293414088?q=80&w=600&auto=format&fit=crop", alt: "春兰" },
      { src: "https://images.unsplash.com/photo-1628151225852-7e040c57173e?q=80&w=600&auto=format&fit=crop", alt: "夏荷" },
      { src: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=600&auto=format&fit=crop", alt: "秋菊" },
      { src: "https://images.unsplash.com/photo-1663183574883-93d39029d5d2?q=80&w=600&auto=format&fit=crop", alt: "冬梅" }
    ]
  },
  {
    id: "cp-2",
    title: "幽兰图",
    category: "写意",
    medium: "水墨",
    images: [{ src: "https://images.unsplash.com/photo-1669837262453-e380e2277d34?q=80&w=800&auto=format&fit=crop", alt: "兰花" }]
  },
  {
    id: "cp-3",
    title: "枝头翠鸟",
    category: "工笔",
    medium: "花鸟画",
    images: [{ src: "https://images.unsplash.com/photo-1616744983058-29367469a84b?q=80&w=800&auto=format&fit=crop", alt: "花鸟工笔" }]
  },
  {
    id: "cp-4",
    title: "文人雅集",
    category: "人物画",
    medium: "水墨",
    images: [{ src: "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?q=80&w=800&auto=format&fit=crop", alt: "人物" }]
  },
  {
    id: "cp-5",
    title: "山水清音",
    category: "山水画",
    medium: "写意山水",
    images: [
      { src: "https://images.unsplash.com/photo-1495573428282-e56598c7dc4a?q=80&w=1000&auto=format&fit=crop", alt: "山水一" },
      { src: "https://images.unsplash.com/photo-1533202974917-a0656a877cb0?q=80&w=1000&auto=format&fit=crop", alt: "山水二" }
    ]
  }
];

// ==========================================
// 素描作品 (SKETCHES)
// ==========================================
export const SKETCHES: GalleryItem[] = [
  {
    id: "sk-1",
    title: "静物习作",
    category: "素描",
    medium: "炭笔/铅笔",
    images: [{ src: "https://images.unsplash.com/photo-1608691535783-501b2a953503?q=80&w=800&auto=format&fit=crop", alt: "静物" }]
  },
  {
    id: "sk-2",
    title: "人物肖像",
    category: "素描",
    medium: "铅笔",
    images: [{ src: "https://images.unsplash.com/photo-1596707328678-b649d264f331?q=80&w=800&auto=format&fit=crop", alt: "肖像" }]
  },
  {
    id: "sk-3",
    title: "人物速写",
    category: "速写",
    medium: "综合材料",
    images: [
      { src: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=800&auto=format&fit=crop", alt: "速写一" },
      { src: "https://images.unsplash.com/photo-1595168393582-89518d6bf961?q=80&w=800&auto=format&fit=crop", alt: "速写二" },
      { src: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=800&auto=format&fit=crop", alt: "速写三" }
    ]
  }
];

// ==========================================
// 设计作品 (DESIGN WORKS)
// ==========================================
export const DESIGN_WORKS: GalleryItem[] = [
  {
    id: "des-1",
    title: "草莓饮品品牌设计",
    category: "平面设计",
    medium: "品牌形象",
    description: "一套充满活力与自然气息的有机饮品视觉系统。",
    images: [
      { src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop", alt: "包装展示" },
      { src: "https://images.unsplash.com/photo-1632515949504-245362df5f4a?q=80&w=800&auto=format&fit=crop", alt: "周边设计" }
    ]
  },
  {
    id: "des-2",
    title: "企业周年插画",
    category: "商业插画",
    medium: "海报设计",
    description: "记录企业发展里程碑的叙事性视觉设计系列。",
    images: [
      { src: "https://images.unsplash.com/photo-1572059002124-e23414738961?q=80&w=800&auto=format&fit=crop", alt: "海报一" },
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop", alt: "海报二" }
    ]
  }
];