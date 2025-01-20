//      // document.addEventListener("DOMContentLoaded", () => {
//       //   const overlay = document.querySelector(".green-layer");
//       //   const cubeWidth = 16; // Cube width (16px)
//       //   const cubeHeight = 32; // Cube height (32px)
//       //   const fadeDuration = 2500; // Duration for each fade-out transition
//       //   let cubes = [];
//       //   // let testNumber = 4; // Control how many loops we want
//       //   let isRunning = true;

//       //   // Function to reset cubes
//       //   const resetCubes = () => {
//       //     overlay.innerHTML = ""; // Clear existing cubes

//       //     const width = overlay.offsetWidth; // Get the width of the green-layer
//       //     const height = overlay.offsetHeight; // Get the height of the green-layer
//       //     const topHeight = height * 0.35; // Only use the top 40% of the height
//       //     const bottomHeight = height * 0.64; // The bottom half
//       //     const cols = Math.ceil(width / cubeWidth); // Number of columns of cubes
//       //     const rowsTop = Math.ceil(topHeight / cubeHeight); // Rows for the top 40%
//       //     const rowsBottom = Math.ceil(bottomHeight / cubeHeight); // Rows for the bottom 60%

//       //     // Add static cubes to the bottom half
//       //     for (let row = 0; row < rowsBottom; row++) {
//       //       for (let col = 0; col < cols; col++) {
//       //         const cube = document.createElement("div");
//       //         cube.classList.add("cube");
//       //         cube.style.position = "absolute";
//       //         cube.style.width = `${cubeWidth}px`;
//       //         cube.style.height = `${cubeHeight}px`;
//       //         cube.style.top = `${height - bottomHeight + row * cubeHeight}px`; // Position on the bottom half
//       //         cube.style.left = `${col * cubeWidth}px`;
//       //         cube.style.backgroundColor = "rgba(169, 169, 169, 0.8)";
//       //         cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
//       //         cube.style.backgroundPosition = `-${col * cubeWidth}px -${
//       //           row * cubeHeight
//       //         }px`; // Adjust background image position
//       //         cube.style.backgroundSize = `${width}px ${height}px`;
//       //         cube.style.opacity = 1; // Fully visible
//       //         overlay.appendChild(cube);
//       //       }
//       //     }

//       //     // Recreate animated cubes and append them to the top 40%
//       //     cubes = [];
//       //     for (let row = 0; row < rowsTop; row++) {
//       //       for (let col = 0; col < cols; col++) {
//       //         const cube = document.createElement("div");
//       //         cube.classList.add("cube");
//       //         cube.style.position = "absolute";
//       //         cube.style.width = `${cubeWidth}px`;
//       //         cube.style.height = `${cubeHeight}px`;
//       //         cube.style.top = `${row * cubeHeight}px`;
//       //         cube.style.left = `${col * cubeWidth}px`;
//       //         cube.style.backgroundColor = "rgba(169, 169, 169, 0.8)";
//       //         cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
//       //         cube.style.backgroundPosition = `-${col * cubeWidth}px -${
//       //           row * cubeHeight
//       //         }px`; // Adjust background image position
//       //         cube.style.backgroundSize = `${width}px ${height}px`;
//       //         cube.style.opacity = 1; // Start fully visible
//       //         cube.style.transition = "opacity 0.5s ease"; // Smooth fade-out transition
//       //         overlay.appendChild(cube);
//       //         cubes.push(cube);
//       //       }
//       //     }
//       //   };

//       //   // Function to fade out cubes one by one (for the top 40%)
//       //   const fadeCubes = () => {
//       //     return new Promise((resolve) => {
//       //       let fadeCount = 0;

//       //       cubes.forEach((cube) => {
//       //         const delay = Math.random() * fadeDuration; // Random delay for each cube
//       //         setTimeout(() => {
//       //           cube.style.opacity = 0; // Fade out the cube
//       //           fadeCount++;

//       //           // When all cubes have faded out, resolve the promise
//       //           if (fadeCount === cubes.length) {
//       //             setTimeout(() => {
//       //               cubes.forEach((cube) => cube.remove()); // Remove the cubes from the DOM
//       //               resolve(); // Resolve the promise after fading and removal
//       //             }, 1000); // Delay before resolving
//       //           }
//       //         }, delay);
//       //       });
//       //       // testNumber--;
//       //       // if (testNumber == 0) {
//       //       //     isRunning = false;
//       //       // }
//       //     });
//       //   };

//       //   // Function to show cubes (for the top 40%)
//       //   const showCubes = () => {
//       //     resetCubes();
//       //     cubes.forEach((cube) => {
//       //       cube.style.opacity = 0; // Start fully invisible
//       //       setTimeout(() => {
//       //         cube.style.opacity = 1; // Fade in the cube
//       //       }, Math.random() * 1000);
//       //     });
//       //   };

//       //   // Function to loop the animation (only for the top 40%)
//       //   const loopCubes = () => {
//       //     fadeCubes().then(() => {
//       //       if (isRunning) {
//       //         setTimeout(() => {
//       //           showCubes();
//       //           if (isRunning) {
//       //             setTimeout(loopCubes, 2000); // Continue the loop
//       //           }
//       //         }, 2000);
//       //       }
//       //     });
//       //   };

//       //   // Start the process
//       //   if (isRunning) {
//       //     resetCubes(); // Initially create cubes (top and bottom)
//       //     loopCubes(); // Start the loop for the animated cubes in the top 40%
//       //   }
//       // });

//       <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <style>
//     .earth-container {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       position: relative;
//     }
//     .earth {
//       position: relative;
//       width: 700px; /* Size of the Earth container */
//       height: 700px; /* Size of the Earth container */
//       background-image: url("./images/final.png"); /* Earth image as background */
//       background-size: cover; /* Ensure image covers the entire container */
//       background-position: center; /* Center the image */
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }

//     .green-layer {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%; /* Size of the Earth container */
//       height: 100%; /* Size of the Earth container */
//       display: flex;
//       background-image: "url('./images/Patterm-merge.svg')";
//       clip-path: circle(50% at 50% 50%);
//       background-repeat: none;
//       justify-content: center;
//       align-items: center;
//       pointer-events: none; /* Prevent the green-layer from interfering with the text */
//     }

//     .cube {
//       position: absolute;
//       transition: opacity 0.5s ease; /* Smooth fade-out transition */
//     }
//     .text-overlay {
//       position: absolute;
//       color: white; /* Text color */
//       font-size: 100px; /* Text size */
//       font-weight: bold; /* Text boldness */
//       z-index: 1;
//     }
//   </style>
//   <body>
//     <section>
//       <div class="earth-container">
//         <div class="earth">
//           <div class="green-layer"></div>
//         </div>
//         <div class="text-overlay">Centered Text</div>
//       </div>
//     </section>
//     <script>
//       // 2nd one

//       // document.addEventListener("DOMContentLoaded", () => {
//       //   const overlay = document.querySelector(".green-layer");
//       //   const cubeWidth = 512; // Cube width (16px)
//       //   const cubeHeight = 32; // Cube height (32px)
//       //   let cubes = [];
//       //   let isRunning = true;

//       //   overlay.innerHTML = ""; // Clear existing cubes
//       //   const width = overlay.offsetWidth; // Get the width of the green-layer
//       //   const height = overlay.offsetHeight; // Get the height of the green-layer
//       //   const topHeight = height * 0.4; // Only use the top 35% of the height
//       //   const bottomHeight = height * 0.6; // The bottom half
//       //   const cols = Math.ceil(width / cubeWidth); // Number of columns of cubes
//       //   const rowsTop = Math.ceil(topHeight / cubeHeight); // Rows for the top 35%
//       //   const rowsBottom = Math.ceil(bottomHeight / cubeHeight); // Rows for the bottom 65%

//       //   // Add static cubes to the bottom half
//       //   for (let row = 0; row < rowsBottom; row++) {
//       //     for (let col = 0; col < cols; col++) {
//       //       const cube = document.createElement("div");
//       //       cube.classList.add("cube");
//       //       cube.style.position = "absolute";
//       //       cube.style.width = `${cubeWidth}px`;
//       //       cube.style.height = `${cubeHeight}px`;
//       //       cube.style.top = `${height - bottomHeight + row * cubeHeight}px`; // Position on the bottom half
//       //       cube.style.left = `${col * cubeWidth}px`;
//       //       cube.style.backgroundColor = "rgba(169, 169, 169, 0.8)";
//       //       cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
//       //       cube.style.backgroundPosition = `-${col * cubeWidth}px -${
//       //         row * cubeHeight
//       //       }px`; // Adjust background image position
//       //       cube.style.backgroundSize = `${width}px ${height}px`;
//       //       cube.style.opacity = 1; // Fully visible
//       //       overlay.appendChild(cube);
//       //     }
//       //   }

//       //   // Recreate animated cubes and append them to the top 35%
//       //   cubes = [];
//       //   for (let row = 0; row < rowsTop; row++) {
//       //     for (let col = 0; col < cols; col++) {
//       //       const cube = document.createElement("div");
//       //       cube.classList.add("cube");
//       //       cube.style.position = "absolute";
//       //       cube.style.width = `${cubeWidth}px`;
//       //       cube.style.height = `${cubeHeight}px`;
//       //       cube.style.top = `${row * cubeHeight}px`;
//       //       cube.style.left = `${col * cubeWidth}px`;
//       //       cube.style.backgroundColor = "rgba(169, 169, 169, 0.8)";
//       //       cube.style.backgroundImage = "url('./images/Patterm-merge.svg')";
//       //       cube.style.backgroundPosition = `-${col * cubeWidth}px -${
//       //         row * cubeHeight
//       //       }px`; // Adjust background image position
//       //       cube.style.backgroundSize = `${width}px ${height}px`;
//       //       cube.style.opacity = 1; // Start fully visible
//       //       cube.style.transition = "opacity 0.5s ease, transform 0.2s ease"; // Smooth fade-out and glitch movement
//       //       overlay.appendChild(cube);
//       //       cubes.push(cube);
//       //     }
//       //   }
//       //   console.log(cubes[0]);
//       //   // Check if cubes are created
//       //   if (cubes.length > 0) {
//       //     // Modify the first cube's left position
//       //     cubes[0].style.overflow = "visible";
//       //     cubes[0].style.transform = "translateX(-200px)";
//       //     cubes[0].style.backgroundPositionX = "100px";
//       //   }

//       //   // Optionally add animation or effects here
//       // });
//     </script>
//   </body>
// </html>
