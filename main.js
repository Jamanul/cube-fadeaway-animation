document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".image-overlay");
    const cubesContainer = document.querySelector(".cubes");
    const overlayImage = document.getElementById("current-image");
  

    const images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg"];
    let currentIndex = 0; 
  

    const width = overlay.offsetWidth;
    const height = overlay.offsetHeight;
  

    const cubeSize = 64;   /**cube width */
    const cols = Math.ceil(width / cubeSize);
    const rows = Math.ceil(height / cubeSize);
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        cube.style.backgroundImage = `url(${images[currentIndex]})`;
        cube.style.backgroundPosition = `-${col * cubeSize}px -${row * cubeSize}px`;
        cube.style.backgroundSize = `${width}px ${height}px`;
        cubesContainer.appendChild(cube);
      }
    }
  
    const cubes = Array.from(document.querySelectorAll(".cube"));
    const fadeDuration = 2000;
  
    const fadeCubesAndChangeImage = () => {
      let fadeCount = 0;
  
      const nextIndex = (currentIndex + 1) % images.length;
      overlayImage.src = images[nextIndex]; 
  

      cubes.forEach((cube) => {
        const delay = Math.random() * fadeDuration; 
        setTimeout(() => {

          cube.style.opacity = 0; 
          fadeCount++;
  
          if (fadeCount === cubes.length) {
            currentIndex = nextIndex; 
            cubes.forEach((cube) => {
              cube.style.opacity = 1;
              cube.style.backgroundImage = `url(${images[currentIndex]})`;
            });
  
            setTimeout(fadeCubesAndChangeImage, 1000); 
          }
        }, delay);
      });
    };
  
    fadeCubesAndChangeImage();
  });
  

  