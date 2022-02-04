import { BASE_API, getData } from './utils/getData.js';
import toggleMenu from './utils/toggleMenu.js';

const skillsPath = '/api/skills?populate=*&sort[0]=id';
const projectsPath = '/api/projects?populate=*&sort[0]=id';

(async function load() {
  toggleMenu();

  const [skills, projects] = await Promise.all([
    getData(skillsPath),
    getData(projectsPath),
  ]);
})();
