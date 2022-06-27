/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv() {
  document.body.classList.add('scale-cv');
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
  document.body.classList.remove('scale-cv');
}

/*==================== GENERATE PDF ====================*/
// PDF generated area
const areaCv = document.getElementById('area-cv');
const resumeButton = document.getElementById('resume-button');

// Html2pdf options
const opt = {
  margin: 0,
  filename: 'myResume.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { format: 'a4', orientation: 'portrait' },
};

const opt2 = {
  margin: 0,
  filename: 'myfile.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 4, dpi: 72 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
};

// Function to call areaCv and Html2Pdf options
function generateResume() {
  html2pdf(areaCv, opt);
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  scaleCv();

  // 2. The PDF is generated
  generateResume();

  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
  setTimeout(removeScale, 5000);
});
