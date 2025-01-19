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
    function divideIntoCubesLoop(element, cubeSize = 2) {
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
          // Add 5 cubes at a time for faster effect
          const batchSize = 40;
          const endIndex = Math.min(index + batchSize, cubePositions.length);
  
          for (let i = index; i < endIndex; i++) {
            const { row, col } = cubePositions[i];
            const cube = document.createElement("div");
            cube.classList.add("cube-text"); // Add a 'cube-text' class
            cube.style.width = `${cubeSize}px`;
            cube.style.height = `${cubeSize}px`;
            cube.style.position = "absolute";
            cube.style.left = `${col * cubeSize}px`;
            cube.style.top = `${row * cubeSize}px`;
            cube.style.backgroundColor = "rgba(0, 0, 0)"; // Optional: Cube color
  
            // Append the cube to the element
            element.appendChild(cube);
          }
  
          index = endIndex;
          if (index >= cubePositions.length) {
            clearInterval(interval); // Stop adding cubes
            setTimeout(removeCubes, 500); // Wait 0.5 seconds before removing cubes
          }
        }, 50); // Small delay between adding cubes (50ms for faster animation)
      }
  
      // Function to remove cubes randomly
      function removeCubes() {
        const cubes = Array.from(document.querySelectorAll(".cube-text"));
        shuffleArray(cubes); // Shuffle cubes for random removal
        let index = 0;
  
        const interval = setInterval(() => {
          // Remove 5 cubes at a time for faster effect
          const batchSize = 40;
          const endIndex = Math.min(index + batchSize, cubes.length);
  
          for (let i = index; i < endIndex; i++) {
            const cube = cubes[i];
            console.log(`Removing cube at position ${i}`);
            cube.remove();
          }
  
          index = endIndex;
          if (index >= cubes.length) {
            clearInterval(interval); // Stop removing cubes
            setTimeout(addCubes, 500); // Wait 0.5 seconds before adding cubes again
          }
        }, 50); // Small delay between removing cubes (50ms for faster animation)
      }
  
      addCubes(); // Start the loop
    }
  
    // Select the text element
    const textElement = document.querySelector(".fade-away-text-container");
    textElement.style.position = "relative"; // Ensure the text element is positioned relative for absolute cubes
  
    // Call the function to divide the element into cubes dynamically and loop
    divideIntoCubesLoop(textElement, 32);
  });
  

  //text container

  // function controlAnimation() {
  //   const textParts = document.querySelectorAll('.text-part'); // Select all text parts
  
  //   const resetStyles = () => {
  //     textParts.forEach(part => {
  //       // Remove animation properties
  //       part.style.animation = 'none';
  
  //       // Reset position for elements with left-3 or other classes
  //       if (part.classList.contains('left')) {
  //         part.style.clipPath = 'inset(0% 0% 50% 0%)';
  //         part.style.transform = 'none';
  //         part.style.scale = 2;
  //       }
  //       if (part.classList.contains('right') || part.classList.contains('right-two')) {
  //         part.style.clipPath = 'inset(50% 0% 0% 0%)';
  //         part.style.transform = 'none';
  //         part.style.scale = 2;
  //       }
  
  //       // Remove data-text attribute
  //       part.removeAttribute('data-text');
  //     });
  
  //     // Disable pseudo-element animations, reset left, and remove text shadow
  //     const style = document.createElement('style');
  //     style.textContent = `
  //       .text-part::before, .text-part::after {
  //         animation: none !important;
  //         left: 0 !important;
  //         text-shadow: none !important;
  //         content: none !important;
  //       }
  //     `;
  //     document.head.appendChild(style);
  //   };
  
  //   // Stop animations after 5 seconds
  //   setTimeout(resetStyles, 5000);
  // }
  
  controlAnimation();
  