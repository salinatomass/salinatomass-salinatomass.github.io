// # npm run ssg

const { render } = require('./render')

const skillsComponent = require('./components/skillsComponent')
const projectsComponent = require('./components/projectsComponent')
const certificatesComponent = require('./components/certificatesComponent')

const skills = require('./data/skills.json')
const projects = require('./data/projects.json')
const certificates = require('./data/certificates.json')

async function generateHTML() {
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

  console.log('🚀 public/index.html successfully generated')
}

generateHTML()
