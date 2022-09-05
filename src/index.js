import { getData } from './utils/getData.js'
import { render, query, queryAll } from './utils/render.js'
import toggleMenu from './utils/toggleMenu.js'
import openDetails from './utils/openDetails.js'
import carousel from './components/carousel/index.js'

import skillsComponent from './components/skillsComponent.js'
import projectsComponent from './components/projectsComponent.js'
import certificatesComponent from './components/certificatesComponent.js'

import slider from './components/carousel/slider.js'
import devFinder from './components/carousel/devFinder.js'
import imageComparison from './components/carousel/imageComparison.js'

import './css/main.css'
import '../lib/highlight/styles/atom-one-dark.min.css'
;(async function load() {
  const [skills, projects, certificates] = await Promise.all([
    getData('/api/skills'),
    getData('/api/projects'),
    getData('/api/certificates'),
  ])

  // FRONTEND_SKILLS_____
  const frontendSkillsNode = skillsComponent(
    skills.data.filter(item => item.category === 'frontend')
  )
  const $frontendSkillsContainer = queryAll('.card')[0]
  await render(frontendSkillsNode, $frontendSkillsContainer)

  // COMPLEMENTARY_SKILLS_____
  const complementarySkillsNode = skillsComponent(
    skills.data.filter(item => item.category === 'complementary')
  )
  const $complementarySkillsContainer = queryAll('.card')[1]
  await render(complementarySkillsNode, $complementarySkillsContainer)

  // PROJECTS_____
  const projectsNode = projectsComponent(projects.data)
  const $projectsContainer = query('#projectsContainer')
  await render(projectsNode, $projectsContainer)

  // CERTIFICATES_____
  const certificatesNode = certificatesComponent(certificates.data.courses)
  const $certificatesContainer = query('#certificatesContainer')
  await render(certificatesNode, $certificatesContainer)

  toggleMenu()
  openDetails()
  carousel()
})()

slider()
devFinder()
imageComparison()
