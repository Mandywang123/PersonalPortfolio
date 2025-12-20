
import { PortfolioModule } from './types';

export const PORTFOLIO_DATA: PortfolioModule[] = [
  {
    id: "module-chinese-painting",
    moduleTitle: "国画",
    moduleEnTitle: "Chinese Painting",
    groups: [
      {
        groupTitle: "写意 · Ink Wash",
        artworks: [
          { id: "cp-x-1", title: "山水清音", year: "2023", category: "写意", image: "https://i.imgs.ovh/2025/12/20/ClUOfQ.jpeg", description: "笔墨恣意，以湿墨表现江南烟雨的朦胧感，探索传统水墨在宣纸上的随机渗出，构建一种极简的意象空间。" },
          { id: "cp-x-2", title: "疏影横斜", year: "2022", category: "写意", image: "https://i.imgs.ovh/2025/12/20/ClU0TH.jpeg", description: "以枯笔勾勒梅枝，强调骨法用笔。留白处不仅是空间，更是呼吸。在似与不似之间寻找万物的内在神韵。" },
          { id: "cp-x-3", title: "林间归客", year: "2024", category: "写意", image: "https://images.unsplash.com/photo-1495573428282-e56598c7dc4a?q=80&w=1200", description: "层层积墨，表现山体之厚重。画面追求苍润兼济，体现出对古典文人生活状态的向往与精神归宿的艺术化处理。" },
          { id: "cp-x-4", title: "幽壑听泉", year: "2023", category: "写意", image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&w=1200", description: "运用泼墨技法，云雾穿插于奇峰之间。虚实结合的构图，旨在引发观者对自然无尽奥秘的深层审美联想与共鸣。" },
        ]
      },
      {
        groupTitle: "工笔 · Meticulous",
        artworks: [
          { id: "cp-g-1", title: "牡丹富贵", year: "2022", category: "工笔", image: "https://i.imgs.ovh/2025/12/20/ClT3YA.jpeg", description: "三矾九染，色不碍墨，墨不碍色。极力刻画花瓣的丝滑质感，在极致的细腻中展现大自然繁华盛开的生命张力。" },
          { id: "cp-g-2", title: "锦绣山禽", year: "2023", category: "工笔", image: "https://images.unsplash.com/photo-1616744983058-29367469a84b?q=80&w=1200", description: "精准的铁线描勾勒禽鸟羽毛，敷色明艳而雅致。通过显微镜式的观察，将自然物象转化为高度秩序化的艺术语言。" },
        ]
      },
      {
        groupTitle: "书法 · Calligraphy",
        artworks: [
          { id: "cp-s-1", title: "兰亭序研究", year: "2024", category: "书法", image: "https://images.unsplash.com/photo-1669837262453-e380e2277d34?q=80&w=1200", description: "临习王羲之行书，体悟笔尖在纸上的行走韵律。起承转合间，是对魏晋风骨的视觉复刻与当代书法精神的解读。" },
          { id: "cp-s-2", title: "草书意向", year: "2023", category: "书法", image: "https://images.unsplash.com/photo-1628151225852-7e040c57173e?q=80&w=1200", description: "狂草连绵，线条粗细对比剧烈。如交响乐般的节奏变化，表达了艺术家纯粹的情绪释放，打破汉字的具象束缚。" },
        ]
      }
    ]
  },
  {
    id: "module-illustration",
    moduleTitle: "插画",
    moduleEnTitle: "Illustration",
    groups: [
      {
        groupTitle: "人物 · Portraits",
        artworks: [
          { id: "ill-p-1", title: "面孔 · 忧郁", year: "2023", category: "人物", image: "https://images.unsplash.com/photo-1596707328678-b649d264f331?q=80&w=1200", description: "通过低饱和度的冷色调，刻画现代都市人内心的孤寂。眼神的刻画是视觉核心，传递出一种无声的对白。" },
          { id: "ill-p-2", title: "市井众生", year: "2022", category: "人物", image: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?q=80&w=1200", description: "运用速写式的线条配合平涂色彩，捕捉街头小贩的动作瞬间。人物姿态虽然卑微，却洋溢着鲜活的生命美感。" },
        ]
      },
      {
        groupTitle: "静物 · Still Life",
        artworks: [
          { id: "ill-sl-1", title: "午后阳光", year: "2023", category: "静物", image: "https://images.unsplash.com/photo-1608691535783-501b2a953503?q=80&w=1200", description: "研究光线在陶瓷与玻璃表面的反射规律。通过细微的明暗变化，赋予平凡器物以神圣感，静谧中带有哲思。" },
          { id: "ill-sl-2", title: "残花", year: "2022", category: "静物", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200", description: "凋零的花朵也是美的载体。通过对枯萎形态的精细刻画，引发观者对时间流逝与生命周期的感悟，凄美而动人。" },
          { id: "ill-sl-3", title: "早餐记忆", year: "2024", category: "静物", image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1200", description: "色彩温暖且丰富，强调食物的纹理质感。画面充满生活气息，通过物件的堆叠重构出一幅温馨的家庭早晨图景。" },
          { id: "ill-sl-4", title: "几何重组", year: "2023", category: "静物", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200", description: "将静物进行立体主义式的拆解，重新组合。利用高饱和色块建立视觉张力，探索形状与空间在二维平面上的平衡。" },
        ]
      },
      {
        groupTitle: "场景 · Environments",
        artworks: [
          { id: "ill-sc-1", title: "赛博北京", year: "2024", category: "场景", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200", description: "将传统古建筑与霓虹灯、飞行器结合。在古老文明与未来科技的冲撞中，建立一套充满东方韵味的科幻视觉语言。" },
          { id: "ill-sc-2", title: "森林深处", year: "2023", category: "场景", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200", description: "追求如梦境般的氛围，光影斑驳。绿色调的层级变化极大地丰富了画面深度，营造出一种让人沉浸的自然秘境。" },
          { id: "ill-sc-3", title: "荒野列车站", year: "2022", category: "场景", image: "https://images.unsplash.com/photo-1518544866385-b59c77e43697?q=80&w=1200", description: "空旷的荒漠中矗立着破旧的站台。地平线的透视感增强了孤独感，通过宏大的场景衬托出渺小个体在时空中的漂泊感。" },
        ]
      }
    ]
  },
  {
    id: "module-sketch",
    moduleTitle: "素描",
    moduleEnTitle: "Sketches",
    groups: [
      {
        groupTitle: "长期习作 · Academy",
        artworks: [
          { id: "sk-1", title: "解剖研究", year: "2022", category: "长期素描", image: "https://images.unsplash.com/photo-1595168393582-89518d6bf961?q=80&w=1200", description: "严谨的解剖学观察，准确还原骨骼与肌肉的联动关系。在理性的排线中，寻找人体形态最本质的艺术美感。" },
          { id: "sk-2", title: "光影习作", year: "2021", category: "长期素描", image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=1200", description: "针对石膏像的复杂光影研究。通过五大调子的精准控制，塑造出极强的体积感，展示了扎实的古典写实功底。" },
        ]
      }
    ]
  },
  {
    id: "module-design",
    moduleTitle: "设计",
    moduleEnTitle: "Graphic Design",
    groups: [
      {
        groupTitle: "折页 · Layouts",
        artworks: [
          { id: "des-z-1", title: "折页艺术", year: "2023", category: "折页", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200", description: "探索纸张折叠带来的空间叙事。利用特种纸张的触感与巧妙的模切设计，让信息在翻阅过程中逐步展开。" },
          { id: "des-z-2", title: "自然之语", year: "2023", category: "折页", image: "https://images.unsplash.com/photo-1632515949504-245362df5f4a?q=80&w=1200", description: "为环保机构设计的品牌折页。以极简的图形语言与环保油墨，传达人与自然和谐共生的品牌核心价值。" },
        ]
      },
      {
        groupTitle: "手册 · Brand Identity",
        artworks: [
          { id: "des-s-1", title: "VI 手册 01", year: "2024", category: "手册", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200", description: "完整的品牌识别系统手册，包含标志应用规范、标准字及色彩体系。体现了严谨的设计逻辑与极高的商业落地性。" },
          { id: "des-s-2", title: "VI 手册 02", year: "2023", category: "手册", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200", description: "针对数字科技企业的动态VI设计。强调品牌在不同屏幕终端的自适应性与品牌调性的高度一致化。" },
          { id: "des-s-3", title: "企业年报", year: "2023", category: "手册", image: "https://images.unsplash.com/photo-1572059002124-e23414738961?q=80&w=1200", description: "将繁杂的数据可视化处理。利用大面积的留白与精致的版式编排，让原本枯燥的年度报告变成一种视觉享受。" },
          { id: "des-s-4", title: "品牌故事书", year: "2024", category: "手册", image: "https://images.unsplash.com/photo-1507643179173-617d67456adb?q=80&w=1200", description: "通过精美的插画与排版，讲述品牌从创立至今的感人历程。在叙事中建立品牌温度，增强用户的情感链接。" },
        ]
      },
      {
        groupTitle: "导览 · Posters",
        artworks: [
          { id: "des-p-1", title: "城市漫步海报", year: "2023", category: "导览海报", image: "https://images.unsplash.com/photo-1563969562-b7e3f8981329?q=80&w=1200", description: "打破传统海报的平面限制，通过折叠方式转变为便携式地图。兼具美学欣赏价值与实用的向导功能。" },
          { id: "des-p-2", title: "艺术季海报", year: "2022", category: "导览海报", image: "https://images.unsplash.com/photo-1518544866385-b59c77e43697?q=80&w=1200", description: "色彩明快，线条灵动。通过图形的错位重叠，传达出艺术节的多元与包容，在街头形成极强的视觉吸引力。" },
          { id: "des-p-3", title: "博物馆折叠卡", year: "2024", category: "导览海报", image: "https://images.unsplash.com/photo-1508261301902-69a455b71932?q=80&w=1200", description: "为古典美术馆设计的导览系统。模仿古代卷轴的开启方式，在现代印刷工艺中复现那种庄重的艺术仪式感。" },
        ]
      }
    ]
  },
  {
    id: "module-3d",
    moduleTitle: "3D项目",
    moduleEnTitle: "3D Projects",
    groups: [
      {
        groupTitle: "虚拟建模 · Modeling",
        artworks: [
          { id: "3d-1", title: "未来居住空间", year: "2024", category: "场景建模", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200", description: "运用C4D与Octane渲染器，研究光影在不同材质表面的物理反射。在虚拟空间中构建一个充满禅意的未来起居室。" },
          { id: "3d-2", title: "机械心脏", year: "2023", category: "硬表面建模", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1200", description: "极其复杂的金属零件拼接，模拟工业时代的蒸汽动力美学。精细的划痕与磨损纹理，赋予了虚拟模型以时间的沉淀感。" },
        ]
      }
    ]
  }
];

export const PERSONAL_INFO = {
  name: "王菁瑶",
  enName: "Wang Jingyao",
  title: "艺术教育者 / 跨界美术作品集",
  email: "wangjingyao@example.com",
  intro: "深耕国画领域，兼修素描造型、平面设计、插画创作、 3D 建模和摄影，引导学生感知传统美学与现代艺术的交融之美，激发跨文化艺术表达力。",
  education: "苏州大学 中国画专业 · 学士",
  portfolioTitle: "Portfolio Selection",
  year: "2024 - 2025",
};
