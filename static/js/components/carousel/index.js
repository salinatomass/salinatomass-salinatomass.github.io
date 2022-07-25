import { slider, devFinder, comparison } from './codeSnippets.js';

const $carouselContainer = document.getElementById('carouselContainer');
const $carouselItemList = document.querySelectorAll('.carousel-item');
const $backwardButton = document.getElementById('backward');
const $forwardButton = document.getElementById('forward');

const $htmlCode = document.getElementById('htmlCode');
const $cssCode = document.getElementById('cssCode');
const $jsCode = document.getElementById('jsCode');

const carousel = () => {
  let position = 165; // = translate(165px)
  const minPosition = -635;
  const maxPosition = 165;
  const movement = 400; // item size + gap

  let itemInFocus = 0; // index

  const hiddenItem = $item => $item.classList.remove('active');

  const showItem = $item => $item.classList.add('active');

  const updateCodeTabs = ({ htmlString, cssString, jsString }) => {
    $htmlCode.innerHTML = htmlString;
    $cssCode.innerHTML = cssString;
    $jsCode.innerHTML = jsString;
    window.hljs.highlightAll();
  };

  const setCodeHighlight = $item => {
    const codeTabName = $item.dataset.name;

    switch (codeTabName) {
      case 'slider':
        updateCodeTabs(slider);
        break;
      case 'devFinder':
        updateCodeTabs(devFinder);
        break;
      case 'comparison':
        updateCodeTabs(comparison);
        break;
    }
  };

  const moveCarouselToLeft = () => {
    if (position === minPosition) return;

    position -= movement;
    $carouselContainer.style.transform = `translate(${position}px)`;

    hiddenItem($carouselItemList[itemInFocus]);
    itemInFocus += 1;
    showItem($carouselItemList[itemInFocus]);
    setCodeHighlight($carouselItemList[itemInFocus]);
  };

  const moveCarouselToRight = () => {
    if (position === maxPosition) return;

    position += movement;
    $carouselContainer.style.transform = `translate(${position}px)`;

    hiddenItem($carouselItemList[itemInFocus]);
    itemInFocus -= 1;
    showItem($carouselItemList[itemInFocus]);
    setCodeHighlight($carouselItemList[itemInFocus]);
  };

  updateCodeTabs(slider);

  $forwardButton.addEventListener('click', () => {
    moveCarouselToLeft();
  });
  $backwardButton.addEventListener('click', () => {
    moveCarouselToRight();
  });
};

export default carousel;
