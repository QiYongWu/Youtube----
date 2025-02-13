let headerHTML = "";
let leftHTML = "";
let mainHTML = "";
const header = document.getElementById("header-div");
informationOfHeader.forEach((item,index)=>{

  let html;
  if(item.image == "This is input"){ //输入框
    html = 
    `
      <input id = "header-input" placeholder = "Search">
    `
  }
  else{
    if(item.showText){  //需要显示文本 after hover
      html = 
      `
      <div class = "header-button-preview" isShowText = true>
        <button class = "header-button" id = "header-button${index+1}">
          <img class = "header-image" id = "header-image${index+1}" src = "${item.image}">
        </button>
      </div>
      `
    }
    else{  //不需要显示文本
      html = 
      `
      <div class = "header-button-preview" isShowText = false>
        <button class = "header-button" id = "header-button${index+1}">
          <img class = "header-image" id = "header-image${index+1}" src = "${item.image}">
        </button>
      </div>
      `
    }
  } 
  headerHTML +=html;

})
// 使用属性选择器查找指定src的img元素

header.innerHTML = headerHTML;


