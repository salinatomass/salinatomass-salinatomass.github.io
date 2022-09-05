const { getData } = require('./utils/getData.js')
const { render, query, queryAll } = require('./utils/render.js')

const skillsComponent = require('./components/skillsComponent.js')
const projectsComponent = require('./components/projectsComponent.js')
const certificatesComponent = require('./components/certificatesComponent.js')

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
})()
