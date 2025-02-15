    const container = document.getElementById('searchResultsContainer');
    container.innerHTML = '';
    // 获取 sessionStorage 中存储的 'searchQuery'
    const query = sessionStorage.getItem('searchQuery');
    let results =[];//用于储存搜索后得到的所有数据
    let renderHTML = ''; //用于显示
    // 定义模糊搜索函数
    function performSearch2(searchKeyword) {
        const lowerKeyword = searchKeyword.toLowerCase();
        informationOfMain.forEach((item) => {
          const itemAuthorName = item.authorInformation.authorName.toLowerCase();
          const itemVideoTitle = item.videoInformation.title.toLowerCase();
          if(itemAuthorName.includes(lowerKeyword)  ||  itemVideoTitle.includes(lowerKeyword)){
            results.push(item);
          }
        }
    );
    }

    //定义结果渲染函数
    function renderSearchResults(results) {
        if (results.length === 0) { //未能找到结果
         renderHTML = `<div class="no-results">未找到相关结果</div>`;
        }
    
        else{
            results.forEach((item) => {
            let content = `
                <div class="content">
                    <div class ="authorInformation>
                       
                        <p class="author">作者：${item.authorInformation.authorName}</p>
                    </div>
                    <p class = "title">主题：${item.videoInformation.title}</p>
                    <a href = "${item.videoInformation.videoLink}">
                        <div class = "video-and-videoTimes">
                            <img class = "videoImage" src = "${item.videoInformation.videoImage}">
                            <p class = "videoTimes">${item.videoInformation.videoTimes}</p>
                        </div>
                    </a>
                </div>
            `;
            renderHTML += content;
            
            });
        }

    }

 
 if(query){
    performSearch2(query); //搜索
    // console.log(query);
    // console.log(results);
    renderSearchResults(results);  //结果渲染
    container.innerHTML  = renderHTML; //结果显示
 }
