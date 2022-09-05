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
    .filter(item => item.id < 10)
    .map(item => certificateTemplate(item))
    .join('');
  const secondaryList = certificates
    .filter(item => item.id >= 10)
    .map(item => certificateTemplate(item))
    .join('');

  const $mainCertificates = document.createElement('ul');
  $mainCertificates.innerHTML = primaryList;
  const $secondaryCertificates = document.createElement('details');
  $secondaryCertificates.innerHTML = summaryTemplate + secondaryList;

  const $lineUp = document.createElement('div');
  $lineUp.classList.add('line', 'line-up');
  const $lineDown = document.createElement('div');
  $lineDown.classList.add('line', 'line-down');

  const $certificatesContainer = document.createElement('div');
  $certificatesContainer.classList.add('certificates-courses-wrapper');

  $certificatesContainer.append(
    $lineUp,
    $mainCertificates,
    $secondaryCertificates,
    $lineDown
  );

  return $certificatesContainer;
};

export default certificatesComponent;
