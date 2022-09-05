const slider = () => {
  const slider = document.querySelector('#productSlider');
  const canvas = document.querySelector('#canvasSlider');
  const ctx = canvas.getContext('2d');
  const images = [];

  const handleInputSlider = e => imageRendering(e.target.value);

  const imageRendering = index =>
    ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);

  const pageLoaded = () => {
    for (let i = 1; i <= 36; i++) {
      const number = i.toString().padStart(2, '00');
      const url = `https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pollen/Images/Air-Jordan-1-Retro-High-Pollen/Lv2/img${number}.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1626802470&h=320&fm=avif`;

      const image = new Image();
      image.src = url;
      image.addEventListener('load', () => {
        images[i] = image;
        if (i === 1) {
          imageRendering(i);
        }
      });
    }

    slider.addEventListener('input', handleInputSlider);
  };

  window.addEventListener('load', pageLoaded);
};

export default slider;
