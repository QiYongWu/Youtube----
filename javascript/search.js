
function performSearch() {
    const searchInput = document.getElementById('header-input');
    const query = searchInput.value.trim();
    if (!query) {
      alert('请输入搜索内容');
    }
    else{
      // 示例 1：跳转到搜索结果页面（假设存在 search.html 页面）
      // 将搜索到的关键字存储到 sessionStorage
      sessionStorage.setItem('searchQuery', query);
      window.location.href = 'http://127.0.0.1:5500/html/search.html?query=' + encodeURIComponent(query);
    }
  }
  // 给搜索按钮添加点击事件
  document.getElementById('header-search-button').addEventListener('click', function(){
    performSearch();
    isClickedSearchButton=true;
});
  document.getElementById('header-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      performSearch();
      isClickedSearchButton=true;
    }
  });





