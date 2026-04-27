// 游戏分类数据
const categories = [
  { id: 'all', name: '全部游戏' },
  { id: 'action', name: '动作游戏' },
  { id: 'adventure', name: '冒险游戏' },
  { id: 'puzzle', name: '益智游戏' },
  { id: 'sports', name: '体育游戏' },
  { id: 'strategy', name: '策略游戏' },
  { id: 'casual', name: '休闲游戏' }
];

// 游戏数据
const games = [
  {
    id: 1,
    title: '超级马里奥',
    category: 'action',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=super%20mario%20game%20cover%20cartoon%20style&image_size=square',
    description: '经典的动作冒险游戏，控制马里奥穿越各种关卡，收集金币，打败敌人。',
    rating: 4.8,
    plays: 1250000,
    favorites: 85000,
    rise: 12000
  },
  {
    id: 2,
    title: '愤怒的小鸟',
    category: 'puzzle',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=angry%20birds%20game%20cover%20cartoon%20style&image_size=square',
    description: '益智游戏，玩家需要用弹弓发射小鸟，摧毁猪的堡垒。',
    rating: 4.5,
    plays: 980000,
    favorites: 62000,
    rise: 8500
  },
  {
    id: 3,
    title: '植物大战僵尸',
    category: 'strategy',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plants%20vs%20zombies%20game%20cover%20cartoon%20style&image_size=square',
    description: '策略塔防游戏，种植各种植物来抵御僵尸的进攻。',
    rating: 4.7,
    plays: 1100000,
    favorites: 78000,
    rise: 9200
  },
  {
    id: 4,
    title: '篮球大灌篮',
    category: 'sports',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=basketball%20dunk%20game%20cover%20cartoon%20style&image_size=square',
    description: '体育游戏，控制球员进行扣篮比赛，获得高分。',
    rating: 4.3,
    plays: 750000,
    favorites: 45000,
    rise: 6800
  },
  {
    id: 5,
    title: '神庙逃亡',
    category: 'adventure',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=temple%20run%20game%20cover%20cartoon%20style&image_size=square',
    description: '冒险跑酷游戏，在神庙中奔跑，躲避障碍物，收集金币。',
    rating: 4.6,
    plays: 1050000,
    favorites: 72000,
    rise: 10500
  },
  {
    id: 6,
    title: '开心消消乐',
    category: 'casual',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=match%203%20game%20cover%20colorful%20cartoon%20style&image_size=square',
    description: '休闲消除游戏，通过匹配相同颜色的方块来获得分数。',
    rating: 4.4,
    plays: 890000,
    favorites: 58000,
    rise: 7500
  },
  {
    id: 7,
    title: '魂斗罗',
    category: 'action',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=contra%20game%20cover%20retro%20cartoon%20style&image_size=square',
    description: '经典动作射击游戏，控制角色消灭敌人，通关各种关卡。',
    rating: 4.9,
    plays: 1350000,
    favorites: 92000,
    rise: 15000
  },
  {
    id: 8,
    title: '俄罗斯方块',
    category: 'puzzle',
    cover: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=russian%20tetris%20game%20cover%20classic%20cartoon%20style&image_size=square',
    description: '经典益智游戏，控制不同形状的方块下落并排列整齐。',
    rating: 4.7,
    plays: 1150000,
    favorites: 80000,
    rise: 8800
  }
];

// 热门游戏（按播放量排序）
const hotGames = [...games].sort((a, b) => b.plays - a.plays).slice(0, 6);

// 排行榜数据
// 综合热门游玩榜（按播放量排序）
const hotRank = [...games].sort((a, b) => b.plays - a.plays);

// 今日飙升榜（按热度涨幅排序）
const riseRank = [...games].sort((a, b) => b.rise - a.rise);

// 好评评分榜（按评分排序）
const ratingRank = [...games].sort((a, b) => b.rating - a.rating);

// 收藏人气榜（按收藏数排序）
const favoriteRank = [...games].sort((a, b) => b.favorites - a.favorites);

// 各分类排行榜
const categoryRanks = {
  action: [...games].filter(game => game.category === 'action').sort((a, b) => b.plays - a.plays),
  adventure: [...games].filter(game => game.category === 'adventure').sort((a, b) => b.plays - a.plays),
  puzzle: [...games].filter(game => game.category === 'puzzle').sort((a, b) => b.plays - a.plays),
  sports: [...games].filter(game => game.category === 'sports').sort((a, b) => b.plays - a.plays),
  strategy: [...games].filter(game => game.category === 'strategy').sort((a, b) => b.plays - a.plays),
  casual: [...games].filter(game => game.category === 'casual').sort((a, b) => b.plays - a.plays)
};

// 导出数据
try {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
      categories, 
      games, 
      hotGames,
      hotRank,
      riseRank,
      ratingRank,
      favoriteRank,
      categoryRanks
    };
  }
} catch (e) {
  // 浏览器环境
}