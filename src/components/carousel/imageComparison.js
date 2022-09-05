const imageComparison = () => {
  const divider = document.getElementById('comparisonDivider');
  const slider = document.getElementById('comparisonSlider');

  slider.addEventListener('input', moveDivisor);

  function moveDivisor() {
    divider.style.width = slider.value + '%';
  }
};

export default imageComparison;
