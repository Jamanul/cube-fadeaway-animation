const blickingLight = () => {
    const arrows = document.getElementsByClassName('arrow');
    let currentIndex = 0;
  
    const updateArrows = () => {
      for (let i = 0; i < arrows.length; i++) {
        arrows[i].classList.remove('red-arrow');
      }
  
      arrows[currentIndex].classList.add('red-arrow');
  
      currentIndex = (currentIndex + 1) % arrows.length;
  
      setTimeout(updateArrows,500);
    };
    updateArrows();
  };
  
  blickingLight();