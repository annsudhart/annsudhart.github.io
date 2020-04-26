window.addEventListener('scroll', () => {
  let waves = document.getElementsByClassName('splash')[0];
  if(window.pageYOffset <= window.innerHeight) {
    if(window.innerHeight/window.innerWidth)
    waves.style.backgroundSize = 'calc(' + (100+(window.pageYOffset/2)) + '%)';
    waves.style.backgroundPositionY = 'calc(' + (100-(window.pageYOffset/50)) + '%)';
  }
}, false);