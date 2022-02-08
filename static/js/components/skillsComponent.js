const skillTemplate = skill => {
  const { name } = skill;
  const image = skill.image;

  return `
    <li class="card-item">
      <img src="${image.url}" alt="${image.alt} logo" />
      <p>${name}</p>
    </li>
  `;
};

const skillsComponent = skills => {
  const skillsList = skills.map(skill => skillTemplate(skill)).join('');

  const $skillsContainer = document.createElement('ul');
  $skillsContainer.classList.add('card-container');
  $skillsContainer.innerHTML = skillsList;

  return $skillsContainer;
};

export default skillsComponent;
