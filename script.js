// 页面加载完成后执行
 document.addEventListener('DOMContentLoaded', function() {
  // 初始化页面
  initPage();
});

// 初始化页面
function initPage() {
  // 检查当前页面
  const currentPage = window.location.pathname;
  
  if (currentPage.includes('index.html') || currentPage === '/') {
    initHomePage();
  } else if (currentPage.includes('category.html')) {
    initCategoryPage();
  } else if (currentPage.includes('game.html')) {
    initGamePage();
  }
  
  // 初始化搜索功能
  initSearch();
}

// 初始化首页
function initHomePage() {
  // 渲染热门游戏
  renderHotGames();
  // 渲染所有游戏
  renderAllGames();
}

// 初始化分类页
function initCategoryPage() {
  // 获取URL参数中的分类ID
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('id') || 'all';
  
  // 高亮当前分类
  highlightCategory(categoryId);
  
  // 渲染对应分类的游戏
  renderGamesByCategory(categoryId);
}

// 初始化游戏详情页
function initGamePage() {
  // 获取URL参数中的游戏ID
  const urlParams = new URLSearchParams(window.location.search);
  const gameId = parseInt(urlParams.get('id')) || 1;
  
  // 渲染游戏详情
  renderGameDetail(gameId);
  
  // 渲染相关游戏
  renderRelatedGames(gameId);
}

// 初始化搜索功能
function initSearch() {
  const searchBox = document.querySelector('.search-box');
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchBox && searchBtn) {
    searchBtn.addEventListener('click', function() {
      const searchTerm = searchBox.value.trim();
      if (searchTerm) {
        searchGames(searchTerm);
      }
    });
    
    searchBox.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const searchTerm = searchBox.value.trim();
        if (searchTerm) {
          searchGames(searchTerm);
        }
      }
    });
  }
}

// 搜索游戏
function searchGames(term) {
  // 简单实现：跳转到分类页并显示搜索结果
  // 实际项目中可以实现更复杂的搜索逻辑
  alert(`搜索: ${term}\n此功能在实际项目中可以实现更复杂的搜索逻辑`);
}

// 渲染热门游戏
function renderHotGames() {
  const hotGamesContainer = document.querySelector('.hot-games .game-grid');
  if (hotGamesContainer) {
    hotGamesContainer.innerHTML = '';
    
    hotGames.forEach(game => {
      const gameCard = createGameCard(game);
      hotGamesContainer.appendChild(gameCard);
    });
  }
}

// 渲染所有游戏
function renderAllGames() {
  const allGamesContainer = document.querySelector('.all-games .game-grid');
  if (allGamesContainer) {
    allGamesContainer.innerHTML = '';
    
    games.forEach(game => {
      const gameCard = createGameCard(game);
      allGamesContainer.appendChild(gameCard);
    });
  }
}

// 按分类渲染游戏
function renderGamesByCategory(categoryId) {
  const gamesContainer = document.querySelector('.category-games .game-grid');
  if (gamesContainer) {
    gamesContainer.innerHTML = '';
    
    const filteredGames = categoryId === 'all' ? games : games.filter(game => game.category === categoryId);
    
    if (filteredGames.length === 0) {
      gamesContainer.innerHTML = '<p>该分类下暂无游戏</p>';
      return;
    }
    
    filteredGames.forEach(game => {
      const gameCard = createGameCard(game);
      gamesContainer.appendChild(gameCard);
    });
  }
}

// 创建游戏卡片
function createGameCard(game) {
  const card = document.createElement('div');
  card.className = 'game-card';
  
  // 获取分类名称
  const category = categories.find(cat => cat.id === game.category);
  const categoryName = category ? category.name : '未知分类';
  
  card.innerHTML = `
    <img src="${game.cover}" alt="${game.title}" class="game-cover">
    <div class="game-info">
      <a href="game.html?id=${game.id}" class="game-title">${game.title}</a>
      <span class="game-category">${categoryName}</span>
      <div class="game-stats">
        <span>评分: ${game.rating}</span>
        <span>游玩: ${formatNumber(game.plays)}</span>
      </div>
    </div>
  `;
  
  return card;
}

// 高亮当前分类
function highlightCategory(categoryId) {
  const categoryLinks = document.querySelectorAll('.category-link');
  categoryLinks.forEach(link => {
    if (link.getAttribute('data-category') === categoryId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// 渲染游戏详情
function renderGameDetail(gameId) {
  const game = games.find(g => g.id === gameId);
  if (!game) return;
  
  const gameHeader = document.querySelector('.game-header');
  if (gameHeader) {
    // 获取分类名称
    const category = categories.find(cat => cat.id === game.category);
    const categoryName = category ? category.name : '未知分类';
    
    gameHeader.innerHTML = `
      <img src="${game.cover}" alt="${game.title}" class="game-detail-cover">
      <div class="game-detail-info">
        <h1 class="game-detail-title">${game.title}</h1>
        <div class="game-detail-meta">
          <span>分类: ${categoryName}</span>
          <span>评分: ${game.rating}</span>
          <span>游玩次数: ${formatNumber(game.plays)}</span>
        </div>
        <p class="game-detail-description">${game.description}</p>
        <button class="play-btn" onclick="startGame(${game.id})">开始游戏</button>
      </div>
    `;
  }
}

// 渲染相关游戏
function renderRelatedGames(gameId) {
  const currentGame = games.find(g => g.id === gameId);
  if (!currentGame) return;
  
  const relatedGamesContainer = document.querySelector('.related-games .game-grid');
  if (relatedGamesContainer) {
    // 找出同分类的其他游戏
    const relatedGames = games.filter(game => 
      game.category === currentGame.category && game.id !== gameId
    ).slice(0, 4);
    
    relatedGamesContainer.innerHTML = '';
    relatedGames.forEach(game => {
      const gameCard = createGameCard(game);
      relatedGamesContainer.appendChild(gameCard);
    });
  }
}

// 开始游戏
function startGame(gameId) {
  // 实际项目中这里会加载游戏内容
  // 这里只是模拟游戏加载
  const gameIframe = document.querySelector('.game-iframe');
  if (gameIframe) {
    gameIframe.innerHTML = `<h3>游戏加载中...</h3><p>游戏ID: ${gameId}</p><p>在实际项目中，这里会嵌入真实的游戏内容</p>`;
  }
}

// 格式化数字
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num;
}

// 分类切换
function switchCategory(categoryId) {
  window.location.href = `category.html?id=${categoryId}`;
}