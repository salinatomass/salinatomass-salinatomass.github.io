const projectTemplate = project => {
  const { id, title, role, description, website, repository } = project;
  const primaryImage = project.images[0];
  const secondaryImage = project.images[1];

  return `
    <article class="portfolio-projects-item">
      <div class="portfolio-projects-images">
        <img src="${primaryImage.url}" alt="${primaryImage.alt}" />
        <img src="${secondaryImage.url}" alt="${secondaryImage.alt}" />
      </div>
      <div class="portfolio-projects-details">
        <span>0${id}</span>
        <h3>${title}</h3>
        <div class="portfolio-projects-skill">
          <img src="./assets/bullet.svg" alt="Bullet gray" />
          <h4>${role}</h4>
        </div>
        <p>${description}</p>
      </div>
      <div class="portfolio-projects-buttons">
        <a href="${website}" class="btn btn-primary">Live preview</a>
        <a href="${repository}" class="btn btn-secondary">See code</a>
      </div>
    </article>
  `;
};

const projectsComponent = projects => {
  const projectsList = projects.map(item => projectTemplate(item)).join('');

  const $projectsContainer = document.createElement('div');
  $projectsContainer.classList.add('portfolio-projects');
  $projectsContainer.innerHTML = projectsList;

  return $projectsContainer;
};

export default projectsComponent;
