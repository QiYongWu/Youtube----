      // 检查浏览器是否支持 SpeechRecognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert("当前浏览器不支持语音识别，请使用 Chrome 或 Edge 等支持的浏览器。");
      } else {
        const recognition = new SpeechRecognition();
        recognition.lang = 'zh-CN';           // 设置识别语言为中文
        recognition.interimResults = false;   // 只返回最终结果
        recognition.maxAlternatives = 1;      // 返回一个最可能的识别结果
  
        const recordButton = document.getElementById('header-button4');
        const searchInput = document.getElementById('header-input');
  
        // 点击按钮开始语音识别
        recordButton.addEventListener('click', () => {
          recognition.start();
          recordButton.classList.add('recording');
          console.log('开始语音识别...');
        });
  
        // 处理识别结果
        recognition.addEventListener('result', (event) => {
          const transcript = event.results[0][0].transcript;
          console.log('识别结果：', transcript);
          // 将识别到的文字填入搜索输入框
          searchInput.value = transcript;
        });
  
        // 识别结束时恢复按钮样式
        recognition.addEventListener('speechend', () => {
          recognition.stop();
          recordButton.classList.remove('recording');
          console.log('语音识别结束');
        });
  
        recognition.addEventListener('error', (event) => {
          console.error('识别错误：', event.error);
          recordButton.classList.remove('recording');
        });
      }