
window.addEventListener('scroll', () => {
    let parent = document.getElementById('bkgd-img-splash');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      var offsetVal = window.pageYOffset * Math.sqrt((i+1) / children.length);
      //if(offsetVal <= 85) {
        children[i].style.transform = 'translateY(-' + (offsetVal) + 'px)';
      //}
    }
}, false)