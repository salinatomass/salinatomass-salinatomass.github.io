const carousel = () => {
  const $carouselContainer = document.getElementById('carouselContainer');
  const $carouselItemList = document.querySelectorAll('.carousel-item');
  const $backwardButton = document.getElementById('backward');
  const $forwardButton = document.getElementById('forward');

  let position = 165;
  const minPosition = -635;
  const maxPosition = 165;
  const movement = 400; // Toma en cuenta el tamaño de un item y el gap entre ellos

  let itemInFocus = 0; // index

  const hiddenItem = $item => {
    console.log($item);
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

  $forwardButton.addEventListener('click', moveCarouselToLeft);
  $backwardButton.addEventListener('click', moveCarouselToRight);
};

export default carousel;
