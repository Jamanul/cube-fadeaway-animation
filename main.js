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
  


  
  document.addEventListener("DOMContentLoaded", () => {
    /**
     * Divide the element into 16x16 cubes dynamically with randomized order and delay,
     * and then remove them randomly in a loop.
     * @param {HTMLElement} element - The element to divide into cubes.
     * @param {number} cubeSize - The size of each cube in pixels.
     */
    function divideIntoCubesLoop(element, cubeSize = 16) {
      // Get element dimensions
      const { offsetWidth: width, offsetHeight: height } = element;
  
      // Calculate number of columns and rows
      const cols = Math.ceil(width / cubeSize);
      const rows = Math.ceil(height / cubeSize);
  
      console.log(`Element dimensions: ${width}x${height}`);
      console.log(`Dividing into cubes of size ${cubeSize}px`);
      console.log(`Columns: ${cols}, Rows: ${rows}`);
  
      // Create an array of cube positions
      const cubePositions = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          cubePositions.push({ row, col });
        }
      }
  
      // Function to shuffle an array
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
  
      // Function to add cubes
      function addCubes() {
        shuffleArray(cubePositions); // Shuffle the positions randomly
        let index = 0;
  
        const interval = setInterval(() => {
          if (index >= cubePositions.length) {
            clearInterval(interval); // Stop adding cubes
            setTimeout(removeCubes, 1000); // Wait 2 seconds before removing cubes
            return;
          }
  
          const { row, col } = cubePositions[index];
          const cube = document.createElement("div");
          cube.classList.add("cube-text"); // Add a 'cube-text' class
          cube.style.width = `${cubeSize}px`;
          cube.style.height = `${cubeSize}px`;
          cube.style.position = "absolute";
          cube.style.left = `${col * cubeSize}px`;
          cube.style.top = `${row * cubeSize}px`;
          cube.style.backgroundColor = "rgba(0, 0, 0)"; // Optional: Cube color
  
          console.log(`Cube added at row ${row + 1}, col ${col + 1}`);
  
          // Append the cube to the element
          element.appendChild(cube);
  
          index++;
        }, 0); // Small delay between adding cubes
      }
  
      // Function to remove cubes randomly
      function removeCubes() {
        const cubes = Array.from(document.querySelectorAll(".cube-text"));
        shuffleArray(cubes); // Shuffle cubes for random removal
        let index = 0;
  
        const interval = setInterval(() => {
          if (index >= cubes.length) {
            clearInterval(interval); // Stop removing cubes
            setTimeout(addCubes, 1000); // Wait 2 seconds before adding cubes again
            return;
          }
  
          const cube = cubes[index];
          console.log(`Removing cube at position ${index}`);
          cube.remove();
  
          index++;
        }, 0); // Small delay between removing cubes
      }
  
      addCubes(); // Start the loop
    }
  
    // Select the text element
    const textElement = document.querySelector(".fade-away-text-container");
    textElement.style.position = "relative"; // Ensure the text element is positioned relative for absolute cubes
  
    // Call the function to divide the element into cubes dynamically and loop
    divideIntoCubesLoop(textElement, 32);
  });
  