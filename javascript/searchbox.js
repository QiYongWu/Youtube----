// 获取输入框和按钮的元素
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// 为搜索按钮添加点击事件
searchButton.addEventListener("click", () => {
  // 获取输入框中的内容
  const query = searchInput.value.trim();

  // 检查是否输入了内容
  if (query) {
    // 执行搜索逻辑
    console.log(`Searching for: ${query}`);
    
    // 模拟跳转到搜索结果页面（替换为实际搜索功能）
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  } else {
    alert("Please enter a search term!");
  }
});
