import { getData } from './utils/getData.js';
import toggleMenu from './utils/toggleMenu.js';
import render from './utils/render.js';

import skillsComponent from './components/skillsComponent.js';
import projectsComponent from './components/projectsComponent.js';
import certificatesComponent from './components/certificatesComponent.js';

(async function load() {
  const query = el => document.querySelector(el);
  const queryAll = el => document.querySelectorAll(el);

  toggleMenu();

  const [skills, projects, certificates] = await Promise.all([
    getData('/api/skills'),
    getData('/api/projects'),
    getData('/api/certificates'),
  ]);

  // FRONTEND_SKILLS_____
  const frontendSkillsNode = skillsComponent(
    skills.data.filter(item => item.category === 'frontend')
  );
  const $frontendSkillsContainer = queryAll('.card')[0];
  render(frontendSkillsNode, $frontendSkillsContainer);

  // COMPLEMENTARY_SKILLS_____
  const complementarySkillsNode = skillsComponent(
    skills.data.filter(item => item.category === 'complementary')
  );
  const $complementarySkillsContainer = queryAll('.card')[1];
  render(complementarySkillsNode, $complementarySkillsContainer);

  // PROJECTS_____
  const projectsNode = projectsComponent(projects.data);
  const $projectsContainer = query('#projectsContainer');
  render(projectsNode, $projectsContainer);

  // CERTIFICATES_____
  const certificatesNode = certificatesComponent(certificates.data.courses);
  const $certificatesContainer = query('#certificatesContainer');
  render(certificatesNode, $certificatesContainer);
})();
