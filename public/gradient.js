// Create a SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

// Set the size of the SVG element
svg.setAttribute("width", "100%");
svg.setAttribute("height", "100%");

// Create a linear gradient
const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
gradient.setAttribute("id", "backgroundGradient");

// Define the colors and positions of the gradient stops
const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("offset", "0%");
stop1.setAttribute("stop-color", "#0077b6");

const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("offset", "100%");
stop2.setAttribute("stop-color", "#004d7a");

// Append the gradient stops to the gradient
gradient.appendChild(stop1);
gradient.appendChild(stop2);

// Append the gradient to the SVG element
svg.appendChild(gradient);

// Set the background of the chart to the gradient
document.querySelector(".chart").style.background = `url(#backgroundGradient)`;