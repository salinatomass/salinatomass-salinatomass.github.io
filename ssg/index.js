// # npm run ssg

const { getData } = require('./getData')
const { render } = require('./render')

const skillsComponent = require('./components/skillsComponent')
const projectsComponent = require('./components/projectsComponent')
const certificatesComponent = require('./components/certificatesComponent')

async function generateHTML() {
  const [skills, projects, certificates] = await Promise.all([
    getData('/api/skills'),
    getData('/api/projects'),
    getData('/api/certificates'),
  ])

  // _____SKILLS

  const skillsContent = skillsComponent(skills.data)
  const skillsPlaceholder = '<div id="skills-placeholder"></div>'
  render({
    content: skillsContent,
    placeholder: skillsPlaceholder,
    firstRendering: true,
  })

  // _____PROJECTS
  const projectsContent = projectsComponent(projects.data)
  const projectsPlaceholder = '<div id="projects-placeholder"></div>'
  render({ content: projectsContent, placeholder: projectsPlaceholder })

  // _____CERTIFICATES
  const certificatesContent = certificatesComponent(certificates.data.courses)
  const certificatesPlaceholder = '<div id="certificates-placeholder"></div>'
  render({ content: certificatesContent, placeholder: certificatesPlaceholder })
}

generateHTML()
