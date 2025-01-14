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
      textElement.textContent = "ŦRÖNİÇA MÖNØ";
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
// once
//   document.addEventListener("DOMContentLoaded", () => {
//     const overlay = document.querySelector(".green-layer");
//     const cubeWidth = 16; // Cube width (16px)
//     const cubeHeight = 32; // Cube height (32px)
//     const fadeDuration = 2500; // Duration for each fade-out transition
//     let cubes = [];
  
//     // Function to reset cubes
//     const resetCubes = () => {
//       // Clear existing cubes
//       overlay.innerHTML = "";
  
//       const width = overlay.offsetWidth; // Get the width of the green-layer
//       const height = overlay.offsetHeight; // Get the height of the green-layer
//       const cols = Math.ceil(width / cubeWidth); // Number of columns of cubes
//       const rows = Math.ceil(height / cubeHeight); // Number of rows of cubes
  
//       // Recreate the cubes and append them
//       cubes = [];
//       for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//           const cube = document.createElement("div");
//           cube.classList.add("cube");
//           cube.style.position = "absolute";
//           cube.style.width = `${cubeWidth}px`;
//           cube.style.height = `${cubeHeight}px`;
//           cube.style.top = `${row * cubeHeight}px`;
//           cube.style.left = `${col * cubeWidth}px`;
//           cube.style.backgroundColor = "rgba(169, 169, 169, 0.8)";
//           cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
//           cube.style.backgroundPosition = `-${col * cubeWidth}px -${row * cubeHeight}px`; // Adjust background image position
//           cube.style.backgroundSize = `${width}px ${height}px`;
//           cube.style.opacity = 1; // Start fully visible
//           cube.style.transition = "opacity 0.5s ease"; // Smooth fade-out transition
//           overlay.appendChild(cube);
//           cubes.push(cube);
//         }
//       }
//     };
  
//     // Function to fade out cubes one by one and remove them
//     const fadeCubes = () => {
//       return new Promise((resolve) => {
//         let fadeCount = 0;
  
//         cubes.forEach((cube) => {
//           const delay = Math.random() * fadeDuration; // Random delay for each cube
//           setTimeout(() => {
//             cube.style.opacity = 0; // Fade out the cube
//             fadeCount++;
  
//             // When all cubes have faded out, resolve the promise
//             if (fadeCount === cubes.length) {
//               setTimeout(() => {
//                 cubes.forEach((cube) => {
//                   cube.remove(); // Remove the cube from the DOM
//                 });
//                 resolve(); // Resolve the promise after fading and removal
//               }, 1000); // Delay before resolving
//             }
//           }, delay);
//         });
//       });
//     };
  
//     // Function to show cubes
//     const showCubes = () => {
//         const width = overlay.offsetWidth; // Get the width of the green-layer
//         const height = overlay.offsetHeight; // Get the height of the green-layer
//         const cols = Math.ceil(width / cubeWidth); // Number of columns of cubes
//         const rows = Math.ceil(height / cubeHeight); // Number of rows of cubes
      
//         // Randomly fade out and remove existing cubes
//         const fadeOutAndRemove = (cube) => {
//           return new Promise((resolve) => {
//             const delay = Math.random() * 1000; // Random delay for fade-out
//             setTimeout(() => {
//               cube.style.opacity = 0; // Fade out the cube
//               setTimeout(() => {
//                 cube.remove(); // Remove the cube from the DOM
//                 resolve(); // Resolve when done
//               }, 500); // Wait for the fade-out to complete
//             }, delay);
//           });
//         };
      
//         const fadeInAndAdd = (row, col) => {
//           return new Promise((resolve) => {
//             const delay = Math.random() * 1000; // Random delay for fade-in
//             setTimeout(() => {
//               const cube = document.createElement("div");
//               cube.classList.add("cube");
//               cube.style.position = "absolute";
//               cube.style.width = `${cubeWidth}px`;
//               cube.style.height = `${cubeHeight}px`;
//               cube.style.top = `${row * cubeHeight}px`;
//               cube.style.left = `${col * cubeWidth}px`;
//               cube.style.backgroundColor = "rgba(169, 169, 169, 0.8)";
//               cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
//               cube.style.backgroundPosition = `-${col * cubeWidth}px -${row * cubeHeight}px`; // Adjust background image position
//               cube.style.backgroundSize = `${width}px ${height}px`;
//               cube.style.opacity = 0; // Start fully invisible
//               cube.style.transition = "opacity 0.5s ease"; // Smooth fade-in transition
//               overlay.appendChild(cube);
//               cubes.push(cube);
      
//               // Fade in the cube
//               setTimeout(() => {
//                 cube.style.opacity = 1; // Fade in the cube
//                 resolve(); // Resolve when done
//               }, 0);
//             }, delay);
//           });
//         };
      
//         // Remove all existing cubes randomly
//         const removeCubesPromises = cubes.map(fadeOutAndRemove);
      
//         // After all cubes are removed, add new cubes randomly
//         Promise.all(removeCubesPromises).then(() => {
//           cubes = []; // Reset the array
//           const addCubesPromises = [];
//           for (let row = 0; row < rows; row++) {
//             for (let col = 0; col < cols; col++) {
//               addCubesPromises.push(fadeInAndAdd(row, col));
//             }
//           }
//           Promise.all(addCubesPromises).then(() => {
//             console.log("Reset complete!");
//           });
//         });
//     };
  
//     // Start the process
//     resetCubes(); // Initially create cubes
//     fadeCubes() // Fade out the cubes
//       .then(() => {
//         setTimeout(() => {
//           showCubes(); // Show cubes after a 2-second delay
//         }, 2000); // 2-second delay before showing cubes again
//       });
//   });


//infinitely
// document.addEventListener("DOMContentLoaded", () => {
//     const overlay = document.querySelector(".green-layer");
//     const cubeWidth = 16; // Cube width (16px)
//     const cubeHeight = 32; // Cube height (32px)
//     const fadeDuration = 2500; // Duration for each fade-out transition
//     let cubes = [];
  
//     // Function to reset cubes
//     const resetCubes = () => {
//       overlay.innerHTML = ""; // Clear existing cubes
//       const width = overlay.offsetWidth; // Get the width of the green-layer
//       const height = overlay.offsetHeight; // Get the height of the green-layer
//       const cols = Math.ceil(width / cubeWidth); // Number of columns of cubes
//       const rows = Math.ceil(height / cubeHeight); // Number of rows of cubes
  
//       // Recreate the cubes and append them
//       cubes = [];
//       for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//           const cube = document.createElement("div");
//           cube.classList.add("cube");
//           cube.style.position = "absolute";
//           cube.style.width = `${cubeWidth}px`;
//           cube.style.height = `${cubeHeight}px`;
//           cube.style.top = `${row * cubeHeight}px`;
//           cube.style.left = `${col * cubeWidth}px`;
//           cube.style.backgroundColor = "rgba(169, 169, 169, 0.8)";
//           cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
//           cube.style.backgroundPosition = `-${col * cubeWidth}px -${row * cubeHeight}px`; // Adjust background image position
//           cube.style.backgroundSize = `${width}px ${height}px`;
//           cube.style.opacity = 1; // Start fully visible
//           cube.style.transition = "opacity 0.5s ease"; // Smooth fade-out transition
//           overlay.appendChild(cube);
//           cubes.push(cube);
//         }
//       }
//     };
  
//     // Function to fade out cubes one by one and remove them
//     const fadeCubes = () => {
//       return new Promise((resolve) => {
//         let fadeCount = 0;
  
//         cubes.forEach((cube) => {
//           const delay = Math.random() * fadeDuration; // Random delay for each cube
//           setTimeout(() => {
//             cube.style.opacity = 0; // Fade out the cube
//             fadeCount++;
  
//             // When all cubes have faded out, resolve the promise
//             if (fadeCount === cubes.length) {
//               setTimeout(() => {
//                 cubes.forEach((cube) => {
//                   cube.remove(); // Remove the cube from the DOM
//                 });
//                 resolve(); // Resolve the promise after fading and removal
//               }, 1000); // Delay before resolving
//             }
//           }, delay);
//         });
//       });
//     };
  
//     // Function to show cubes
//     const showCubes = () => {
//       const width = overlay.offsetWidth; // Get the width of the green-layer
//       const height = overlay.offsetHeight; // Get the height of the green-layer
//       const cols = Math.ceil(width / cubeWidth); // Number of columns of cubes
//       const rows = Math.ceil(height / cubeHeight); // Number of rows of cubes
  
//       cubes = []; // Clear previous cube array
//       for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//           const cube = document.createElement("div");
//           cube.classList.add("cube");
//           cube.style.position = "absolute";
//           cube.style.width = `${cubeWidth}px`;
//           cube.style.height = `${cubeHeight}px`;
//           cube.style.top = `${row * cubeHeight}px`;
//           cube.style.left = `${col * cubeWidth}px`;
//           cube.style.backgroundColor = "rgba(169, 169, 169, 0.8)";
//           cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
//           cube.style.backgroundPosition = `-${col * cubeWidth}px -${row * cubeHeight}px`;
//           cube.style.backgroundSize = `${width}px ${height}px`;
//           cube.style.opacity = 0; // Start fully invisible
//           cube.style.transition = "opacity 0.5s ease"; // Smooth fade-in transition
//           overlay.appendChild(cube);
//           cubes.push(cube);
  
//           // Fade in the cube with a random delay
//           setTimeout(() => {
//             cube.style.opacity = 1; // Fade in the cube
//           }, Math.random() * 1000);
//         }
//       }
//     };
  
//     // Function to loop the cube animations
//     const loopCubes = () => {
//       fadeCubes()
//         .then(() => {
//           setTimeout(() => {
//             showCubes();
//             setTimeout(loopCubes, 2000); // Repeat the loop after showing cubes
//           }, 2000); // Delay before showing cubes again
//         });
//     };
  
//     // Start the loop
//     resetCubes(); // Initially create cubes
//     loopCubes(); // Start the infinite loop
//   });
  
//controlled by loops of how many we want.
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".green-layer");
    const cubeWidth = 16; // Cube width (16px)
    const cubeHeight = 32; // Cube height (32px)
    const fadeDuration = 2500; // Duration for each fade-out transition
    let cubes = [];
    let testNumber=4; //controll how many loops we want.
    let isRunning = true; 
  
    // Function to reset cubes
    const resetCubes = () => {
      overlay.innerHTML = ""; // Clear existing cubes
  
      const width = overlay.offsetWidth; // Get the width of the green-layer
      const height = overlay.offsetHeight; // Get the height of the green-layer
      const cols = Math.ceil(width / cubeWidth); // Number of columns of cubes
      const rows = Math.ceil(height / cubeHeight); // Number of rows of cubes
  
      // Recreate the cubes and append them
      cubes = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cube = document.createElement("div");
          cube.classList.add("cube");
          cube.style.position = "absolute";
          cube.style.width = `${cubeWidth}px`;
          cube.style.height = `${cubeHeight}px`;
          cube.style.top = `${row * cubeHeight}px`;
          cube.style.left = `${col * cubeWidth}px`;
          cube.style.backgroundColor = "rgba(169, 169, 169, 0.8)";
          cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
          cube.style.backgroundPosition = `-${col * cubeWidth}px -${row * cubeHeight}px`; // Adjust background image position
          cube.style.backgroundSize = `${width}px ${height}px`;
          cube.style.opacity = 1; // Start fully visible
          cube.style.transition = "opacity 0.5s ease"; // Smooth fade-out transition
          overlay.appendChild(cube);
          cubes.push(cube);
        }
      }
    
    };
  
    // Function to fade out cubes one by one
    const fadeCubes = () => {
      return new Promise((resolve) => {
        let fadeCount = 0;
  
        cubes.forEach((cube) => {
          const delay = Math.random() * fadeDuration; // Random delay for each cube
          setTimeout(() => {
            cube.style.opacity = 0; // Fade out the cube
            fadeCount++;
  
            // When all cubes have faded out, resolve the promise
            if (fadeCount === cubes.length) {
              setTimeout(() => {
                cubes.forEach((cube) => cube.remove()); // Remove the cubes from the DOM
                resolve(); // Resolve the promise after fading and removal
              }, 1000); // Delay before resolving
            }
          }, delay);
        });
        testNumber--;
        // console.log(testNumber)
        // console.log(isRunning)
        if(testNumber==0){
            isRunning=false;
            // console.log(isRunning)
        }
      });
    };
  
    // Function to show cubes
    const showCubes = () => {
      resetCubes();
      cubes.forEach((cube) => {
        cube.style.opacity = 0; // Start fully invisible
        setTimeout(() => {
          cube.style.opacity = 1; // Fade in the cube
        }, Math.random() * 1000);
      });
    };

    // Function to loop the animation
    const loopCubes = () => {
      fadeCubes()
        .then(() => {
          if (isRunning) {
            setTimeout(() => {
              showCubes();
              if (isRunning) {
                setTimeout(loopCubes, 2000); // Continue the loop
              }
            }, 2000);
          }
        });
    };

    // Start the process
    if(isRunning){
         resetCubes(); // Initially create cubes
    loopCubes(); // Start the loop
    }
  });
  
  
  