let linkToWebsite;
document.querySelectorAll(".left-button").forEach((item, index) => {
   switch(index) {
       case 0: 
           linkToWebsite = "https://www.youtube.com/";
           AddEventListener(linkToWebsite);
           break;
       case 1: 
           linkToWebsite = "https://www.youtube.com/@ExploreCN";
           AddEventListener(linkToWebsite);
           break;
          
       case 2: 
           linkToWebsite = "https://www.youtube.com/feed/subscriptions";
           AddEventListener(linkToWebsite);
           break;
           
       case 3: 
           linkToWebsite = "https://www.youtube.com/channel/UCqVDpXKLmKeBU_yyt_QkItQ";
           AddEventListener(linkToWebsite);
           break;
           
       case 4: 
           linkToWebsite = "https://music.youtube.com/";
           AddEventListener(linkToWebsite);
           break;
           
       case 5: 
           linkToWebsite = "https://studio.youtube.com/channel/UCZG4BFS-Nlz_OVSfv0eVPqQ/music";
           AddEventListener(linkToWebsite);
           break;
           
       default:
           linkToWebsite = "https://www.youtube.com/";  // 默认链接，可选
           AddEventListener(linkToWebsite);
           break;
   }

   function AddEventListener(linkToWebsite){

    item.addEventListener('click', function() {
        window.location.href = linkToWebsite;
    });
 }
});
 
   
 