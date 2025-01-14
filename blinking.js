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

  const textElement = document.getElementById('blinking-text');
  let isFirstText = true;

  setInterval(() => {
    if (isFirstText) {
      textElement.textContent = "TRONICA MONO";
    } else {
      textElement.textContent = "TRÖNİÇA MÖNØ";
    }
    isFirstText = !isFirstText;
  }, 800); 

  function toggleBorderClass() {
    const textElement = document.querySelector('.border-text');
    
    setInterval(() => {
      textElement.classList.toggle('border-text-border');
    }, 1000); // Toggle the class every 2 seconds
  }

  toggleBorderClass(); 

  document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".green-layer");
    const width = overlay.offsetWidth;  // Get the width of the green-layer
    const height = overlay.offsetHeight;  // Get the height of the green-layer
  
    const cubeWidth = 16;  // Cube width (16px)
    const cubeHeight = 32;  // Cube height (32px)
    const cols = Math.ceil(width / cubeWidth);  // Number of columns of cubes
    const rows = Math.ceil(height / cubeHeight);  // Number of rows of cubes
  
    // Create cubes for the green layer and append them
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        cube.style.position = "absolute";
        cube.style.width = `${cubeWidth}px`;
        cube.style.height = `${cubeHeight}px`;
        cube.style.top = `${row * cubeHeight}px`;
        cube.style.left = `${col * cubeWidth}px`;
        cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
        cube.style.backgroundPosition = `-${col * cubeWidth}px -${row * cubeHeight}px`;  // Adjust background image position
        cube.style.backgroundSize = `${width}px ${height}px`;
        cube.style.transition = "opacity 0.5s ease";  // Smooth fade-out transition
        overlay.appendChild(cube);
      }
    }
  
    const cubes = Array.from(overlay.querySelectorAll(".cube"));
    const fadeDuration = 1500;  // Duration for each fade-out transition
  
    // Function to fade out cubes one by one and remove them
    const fadeCubes = () => {
      let fadeCount = 0;
  
      cubes.forEach((cube, index) => {
        const delay = Math.random() * fadeDuration;  // Random delay for each cube
        setTimeout(() => {
          cube.style.opacity = 0;  // Fade out the cube
          fadeCount++;
  
          // When all cubes have faded out, remove them from the DOM
          if (fadeCount === cubes.length) {
            setTimeout(() => {
              cubes.forEach((cube) => {
                cube.remove();  // Remove the cube from the DOM
              });
            }, 1000);  // Delay before removing the cubes from the DOM
          }
        }, delay);
      });
    };
  
    fadeCubes();  // Start the fading process
  });
  
  