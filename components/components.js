// Function to change the background color to a specific color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  document
    .getElementById("colorDarkButton")
    .addEventListener("click", function () {
      changeBackgroundColor("#22031F"); // Dark purple color
    });

  document
    .getElementById("colorLightButton")
    .addEventListener("click", function () {
      changeBackgroundColor("#ADD8E6"); // Light beige color
    });

  document
    .getElementById("colorRandomButton")
    .addEventListener("click", function () {
      const randomColor = getRandomColor();
      changeBackgroundColor(randomColor);
    });

  function getRandomColor() { // Random colors
    const hexColors = [
      "#FFD275",
      "#BCB677",
      "#94FBAB",
      "#A9FFF7",
      "#F2ED67",
      "#8DB1AB",
      "#6F584B",
      "#E3170A",
      "#2D1E2F",
      "#5D737E",
      "#E67E22",
      "#95A5A6",
    ];

    const randomIndex = Math.floor(Math.random() * hexColors.length);
    return hexColors[randomIndex];
  }


  document
    .getElementById("increaseFontButton")
    .addEventListener("click", function () {
      increaseFontSize();
    });

  document
    .getElementById("decreaseFontButton")
    .addEventListener("click", function () {
      decreaseFontSize();
    });