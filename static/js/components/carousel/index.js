const $carouselContainer = document.getElementById('carouselContainer');
const $carouselItemList = document.querySelectorAll('.carousel-item');
const $backwardButton = document.getElementById('backward');
const $forwardButton = document.getElementById('forward');

const $htmlCode = document.getElementById('htmlCode');
const $cssCode = document.getElementById('cssCode');
const $jsCode = document.getElementById('jsCode');

const initializeCarousel = () => {
  $htmlCode.innerText =
    '<div class="product">\n  <h3 class="product-title">Jordan 1 Retro High</h3>\n  <p class="product-subtitle">Pollen</p>\n  <ul class="product-tags">\n    <li>100% Authentic</li>\n    <li>Condition: new</li>\n  </ul>\n  <div class="product-actions">\n    <button type="button"></button>\n    <button type="button"></button>\n    <button type="button"></button>\n  </div>\n  <canvas class="product-picture" id="canvas"></canvas>\n  <input\n    class="product-slider"\n    type="range"\n    min="1"\n    max="36"\n    value="1"\n    step="1"\n    id="slider"\n  />\n</div>';
  $cssCode.innerText =
    '.product {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font: var(--body-1);\n}\n.product-title {\n  color: var(--black);\n  font-size: 20px;\n  line-height: 26px;\n}\n.product-subtitle {\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--black);\n}\n.product-tags {\n  display: flex;\n  gap: 10px;\n  list-style: none;\n}\n.product-tags li {\n  font: var(--body-2);\n  font-weight: 500;\n  padding: 0 6px;\n  color: var(--secondary-color);\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 12px;\n}\n.product-picture {\n  height: 250px;\n}\n.product-slider {\n  width: 60%;\n  height: 2px;\n  align-self: center;\n  margin-bottom: 10px;\n}\n.product-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 5px;\n}\n.product-actions button {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background-color: transparent;\n  color: var(--black);\n  cursor: pointer;\n}';

  $jsCode.innerText =
    "const slider = document.querySelector('#productSlider');\nconst canvas = document.querySelector('#canvasSlider');\nconst ctx = canvas.getContext('2d');\nconst images = [];\n\nconst handleInputSlider = e => imageRendering(e.target.value);\n\nconst imageRendering = index =>\n  ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);\n\nconst pageLoaded = () => {\n  for (let i = 1; i <= 36; i++) {\n    const number = i.toString().padStart(2, '00');\n    const url = `https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pollen/Images/Air-Jordan-1-Retro-High-Pollen/Lv2/img${number}.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1626802470&h=320&fm=avif`;\n\n    const image = new Image();\n    image.src = url;\n    image.addEventListener('load', () => {\n      images[i] = image;\n      if (i === 1) {\n        imageRendering(i);\n      }\n    });\n  }\n\n  slider.addEventListener('input', handleInputSlider);\n};\n\nwindow.addEventListener('load', pageLoaded);";

  // window.hljs.highlightAll();
};

const carousel = () => {
  let position = 165; // = translate(165px)
  const minPosition = -635;
  const maxPosition = 165;
  const movement = 400; // item size + gap

  let itemInFocus = 0; // index

  const hiddenItem = $item => {
    $item.style.filter = 'blur(5px)';
    $item.style['z-index'] = 0;
  };

  const showItem = $item => {
    $item.style.filter = 'none';
    $item.style['z-index'] = 2;
  };

  const moveCarouselToLeft = () => {
    if (position === minPosition) return;

    position -= movement;
    $carouselContainer.style.transform = `translate(${position}px)`;

    hiddenItem($carouselItemList[itemInFocus]);
    itemInFocus += 1;
    showItem($carouselItemList[itemInFocus]);
  };

  const moveCarouselToRight = () => {
    if (position === maxPosition) return;

    position += movement;
    $carouselContainer.style.transform = `translate(${position}px)`;

    hiddenItem($carouselItemList[itemInFocus]);
    itemInFocus -= 1;
    showItem($carouselItemList[itemInFocus]);
  };

  // initializeCarousel();

  $forwardButton.addEventListener('click', () => {
    moveCarouselToLeft();
  });
  $backwardButton.addEventListener('click', () => {
    moveCarouselToRight();
  });
};

export default carousel;
