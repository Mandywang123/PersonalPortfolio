
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
          { id: "cp-x-1", title: "梅花图", year: "2023", category: "写意", image: "https://i.imgs.ovh/2025/12/20/ClU0TH.jpeg", description: "笔墨恣意横斜，通过干湿浓淡的强烈对比展现梅花凌寒傲骨的生命力，探索传统水墨在现代视觉下的构成感。" },
          { id: "cp-x-2", title: "意笔花卉", year: "2022", category: "写意", image: "https://i.imgs.ovh/2025/12/20/ClU7QU.jpeg", description: "简练的线条勾勒出花卉的生机，利用宣纸的渗润效果营造烟雨朦胧的意蕴。" },
          { id: "cp-x-3", title: "国画写生", year: "2024", category: "写意", image: "https://i.imgs.ovh/2025/12/20/ClzunA.png", description: "深入自然山川进行实地考察，将写生的写实触感与传统文人画的虚实处理相结合，记录植物风景。" },
          { id: "cp-x-4", title: "墨菊图", year: "2023", category: "写意", image: "https://i.imgs.ovh/2025/12/20/ClUOfQ.jpeg", description: "以浓淡相宜的水墨表现菊花的清高脱俗，泼墨技法下展现出独特的生命韵味。" },
        ]
      },
      {
        groupTitle: "工笔 · Meticulous",
        artworks: [
          { id: "cp-g-1", title: "墨古石榴", year: "2022", category: "工笔", image: "https://i.imgs.ovh/2025/12/20/ClRGmN.png", description: "没骨的技法展示石榴果实色彩层层叠加，晶莹剔透，在极致细腻的刻画中寄托繁荣与丰盈的美好寓意。" },
          { id: "cp-g-2", title: "花蝶小品", year: "2023", category: "工笔", image: "https://i.imgs.ovh/2025/12/20/ClTtJx.png", description: "精准勾勒花卉与蝴蝶的形态，设色雅致清新，捕捉自然界中细微而动人的和谐瞬间。" },
        ]
      },
      {
        groupTitle: "书法 · Calligraphy",
        artworks: [
          { id: "cp-s-1", title: "隶书习作1", year: "2020", category: "书法", image: "https://i.imgs.ovh/2025/12/20/ClTwyC.jpeg", description: "" },
          { id: "cp-s-2", title: "隶书习作2", year: "2018", category: "书法", image: "https://i.imgs.ovh/2025/12/20/ClTBtq.jpeg", description: "" },
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
          { id: "ill-p-1", title: "金发少女", year: "2021", category: "人物", image: "https://i.imgs.ovh/2025/12/20/ClTlRL.jpeg", description: "细腻的肤色处理与眼神中的叙事感交织的少女肖像。" },
          { id: "ill-p-2", title: "紫发少女", year: "2021", category: "人物", image: "https://i.imgs.ovh/2025/12/20/ClTQ1O.jpeg", description: "细腻的肤色处理与眼神中的叙事感交织的少女肖像。" },
        ]
      },
      {
        groupTitle: "静物 · Still Life",
        artworks: [
          { id: "ill-sl-1", title: "逆光花卉", year: "2020", category: "静物", image: "https://i.imgs.ovh/2025/12/20/ClT4l1.png", description: "记录光线穿透窗户、洒落在居家器物上的瞬间，光影层次丰富且温暖，赋予平凡日常以神圣的仪式感。" },
          { id: "ill-sl-2", title: "郁金香习作", year: "2020", category: "静物", image: "https://i.imgs.ovh/2025/12/20/ClTYcY.jpeg", description: "直面生命衰落的过程，通过干枯细节与暗色调的精准刻画，呈现出一种凄美而庄重的静态美学，感悟时间流逝。" },
          { id: "ill-sl-3", title: "清晨的花束", year: "2020", category: "静物", image: "https://i.imgs.ovh/2025/12/20/ClTHm0.jpeg", description: "色调明快温馨，食物纹理细腻诱人，通过物件的组合勾勒出充满生活温情的早晨记忆，唤起感官的共鸣。" },
          { id: "ill-sl-4", title: "美食插画", year: "2020", category: "静物", image: "https://i.imgs.ovh/2025/12/20/ClTnLd.jpeg", description: "将静物进行抽象化块面拆解，探索色彩、形状与重力在平面上的动态平衡，体现了对构成主义设计语言的实验。" },
        ]
      },
      {
        groupTitle: "场景 · Environments",
        artworks: [
          { id: "ill-sc-1", title: "逆光码头", year: "2021", category: "场景", image: "https://i.imgs.ovh/2025/12/20/ClT2Pg.jpeg", description: "强烈的背光效果将码头转化为深邃的剪影，光在水面跳跃的质感与远景的朦胧感建立了广阔的空间深度。" },
          { id: "ill-sc-2", title: "场景习作 - 森林", year: "2019", category: "场景", image: "https://i.imgs.ovh/2025/12/20/ClTdCn.jpeg", description: "多层次的绿色调叠涂出大自然的秘境感，斑驳的光点穿透树冠，营造出一种让人沉浸的、静谧的森林氛围。" },
          { id: "ill-sc-3", title: "场景习作 - 荒野", year: "2019", category: "场景", image: "https://i.imgs.ovh/2025/12/20/ClTo8b.jpeg", description: "广阔的地平线与孤独的建筑交错，色彩冷暖对比增强了荒野的荒凉感，探索宏大叙事下的环境氛围营造。" },
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
          { id: "sk-1", title: "青年女性", year: "2019", category: "长期素描", image: "https://i.imgs.ovh/2025/12/20/ClTN1N.jpeg", description: "严谨的人体解剖结构研究，通过扎实的排线建立肌肉与骨骼的体积感，追求古典学院派的理性与写实之美。" },
          { id: "sk-2", title: "石膏头像", year: "2019", category: "长期素描", image: "https://i.imgs.ovh/2025/12/20/ClzxxN.png", description: "针对石膏像的极佳光影研究，通过五大调子的精准控制塑造出坚实的纪念碑感，是基本功与观察力的双重体现。" },
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
          { id: "des-z-1", title: "宣传折页 - 品牌形象", year: "2024", category: "折页", image: "https://i.imgs.ovh/2025/12/20/ClTITr.png", description: "现代极简的设计风格，利用网格系统对品牌信息进行层级化梳理，色彩分区明确，实现了美观与功能性的高度平衡。" },
          { id: "des-z-2", title: "宣传折页 - 内部预览", year: "2024", category: "折页", image: "https://i.imgs.ovh/2025/12/20/ClTK1M.png", description: "展示了折页的展开效果与信息流向设计，通过视觉引导引导读者顺畅地获取关键资讯，提升了用户阅读体验。" },
        ]
      },
      {
        groupTitle: "手册 · Brand Identity",
        artworks: [
          { id: "des-s-1", title: "入校手册 - 封面设计", year: "2025", category: "手册", image: "https://i.imgs.ovh/2025/12/20/ClABz1.png", description: "充满趣味性的视觉叙事，结合手绘元素与活泼的版式编排，为新生建立了轻松且富有亲和力的第一印象。" },
          { id: "des-s-2", title: "入校手册 - 章节内页", year: "2025", category: "手册", image: "https://i.imgs.ovh/2025/12/20/ClAx7b.png", description: "通过跨页大图与精致的小插画结合，将繁杂的规则转化为生动的视觉故事，增加了手册的收藏价值与传播力。" },
          { id: "des-s-3", title: "入校手册 - 地图指引", year: "2025", category: "手册", image: "https://i.imgs.ovh/2025/12/20/ClANMM.png", description: "扁平化的插画风格地图，通过色彩识别系统优化了校园空间的导视功能，集艺术美感与实用导航于一体。" },
          { id: "des-s-4", title: "入校手册 - 详情页", year: "2025", category: "手册", image: "https://i.imgs.ovh/2025/12/20/ClThPh.png", description: "细节处见匠心，文字排版疏密有致，利用负空间提升了阅读的节奏感，展现了扎实的商业排版功底。" },
        ]
      },
      {
        groupTitle: "导览 · Posters",
        artworks: [
          { id: "des-p-1", title: "活动海报 - 动态视角", year: "2025", category: "导览海报", image: "https://i.imgs.ovh/2025/12/20/ClTufa.png", description: "打破传统海报的平面限制，通过错位的几何图形与大胆的撞色设计建立视觉张力，传达出活动现场的活力。" },
          { id: "des-p-2", title: "活动海报 - 细节呈现", year: "2025", category: "导览海报", image: "https://i.imgs.ovh/2025/12/20/ClTx8t.png", description: "运用具有现代感的图形语言重构传统元素，信息展示清晰直观，在街头环境中具有极强的视觉捕捉力。" },
          { id: "des-p-3", title: "活动海报 - 完整展示", year: "2025", category: "导览海报", image: "https://i.imgs.ovh/2025/12/20/Clz7QM.png", description: "品牌色调的贯穿应用增强了视觉识别的一致性，通过创新的版式设计建立了独特的品牌叙事风格。" },
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
          { id: "3d-1", title: "人物头部 - 数字建模", year: "2023", category: "人物建模", image: "https://i.imgs.ovh/2025/12/20/ClbN3L.png", description: "探索PBR材质渲染，细腻的皮肤纹理与漫反射效果展现了对写实数字肖像的把控力，建模布线规范且精细。" },
          { id: "3d-2", title: "机械形象 - 概念设计", year: "2024", category: "硬表面建模", image: "https://i.imgs.ovh/2025/12/20/Clz0Tx.png", description: "机械金属零件的精密契合，模拟蒸汽朋克风格下的动力美学，细致的磨损材质表达赋予了虚拟模型时间的沉淀感。" },
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
