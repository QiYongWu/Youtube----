let informationHtml = ""
information.forEach((item) => {
  const html = `
  <div class = "imageAndvedioTime-div" >
    <a  class = "videoLink-a" href="${item.videoInformation.videoLink}">
      <img class = "image" src="${item.videoInformation.videoImage}">
      <div class="vedio-time-div">
        ${item.videoInformation.videoTimes}
      </div>
  </div>

  <div class = "authorInformationAndViews-div">
    <div class = "authorVideo-div">
      <img class = "author-image" src="${item.authorInformation.authorImage}">
    </div>
    
    <div class = "TitleAndAuthorName-div">
      <p class="title">
        ${item.videoInformation.title}
      </p>
      
      <p class="author">
        ${item.authorInformation.authorName}
      </p>
    </a>
            
      <p class="views">
        ${item.videoInformation.views}
      </p>
    </div>  
  </div> `
  
  informationHtml = informationHtml + html;
})

const jsVideoPreview = document.querySelector('.js-video-preview');
jsVideoPreview.innerHTML = informationHtml;

