const updateTime = () => {
    const MyDate = new Date();
    const time = MyDate.toLocaleTimeString();
    /*
        When you use document.getElementById('clock') or document.querySelector('#clock') to select an element by its ID, you're explicitly telling the browser to find that element in the document. However, if you directly reference an element by its ID without explicitly selecting it, the browser will still find it and update its content.
     */
    /* only in browsers */
    clock.innerHTML = MyDate.toLocaleTimeString();
  };
  
  // updateTime();
  
  setInterval(updateTime, 1000);
  