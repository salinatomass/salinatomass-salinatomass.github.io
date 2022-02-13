const openDetails = () => {
  const $details = document.querySelector('details');
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  if (mediaQuery.matches) $details.setAttribute('open', true);

  mediaQuery.addEventListener('change', e => {
    e.matches
      ? $details.setAttribute('open', true)
      : $details.removeAttribute('open');
  });
};

export default openDetails;
