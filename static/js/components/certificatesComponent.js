const lineTemplate = `
  <div class="line"></div>
`;

const summaryTemplate = `
  <summary>
    <p>See more</p>
    <img src="./assets/arrow-down.svg" alt="Arrow down" />
  </summary>
`;

const certificateTemplate = certificate => {
  const { name, image } = certificate;

  return `
    <li class="certificates-courses-item">
      <img src="${image.url}" alt="${image.alt}" />
      <p>${name}</p>
    </li>
  `;
};

const certificatesComponent = certificates => {
  const primaryList = certificates
    .filter(item => item.id <= 12)
    .map(item => certificateTemplate(item))
    .join('');

  const secondaryList = certificates
    .filter(item => item.id > 12)
    .map(item => certificateTemplate(item))
    .join('');

  const $detailsContainer = document.createElement('details');
  $detailsContainer.classList.add('certificates-courses-details');
  $detailsContainer.innerHTML = summaryTemplate + secondaryList;

  const $certificatesContainer = document.createElement('ul');
  $certificatesContainer.classList.add('certificates-courses-wrapper');
  $certificatesContainer.innerHTML = lineTemplate + primaryList;
  $certificatesContainer.append($detailsContainer);

  return $certificatesContainer;
};

export default certificatesComponent;
