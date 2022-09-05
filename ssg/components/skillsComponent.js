const skillTemplate = skill => {
  const { name } = skill
  const image = skill.image

  return `
    <li class="card-item">
      <img src="${image.url}" alt="${image.alt}" />
      <p>${name}</p>
    </li>
  `
}

const skillsComponent = skills => {
  const frontendSkills = skills.filter(item => item.category === 'frontend')
  const complementarySkills = skills.filter(
    item => item.category === 'complementary'
  )

  const frontendSkillsList = frontendSkills
    .map(skill => skillTemplate(skill))
    .join('')
  const complementarySkillsList = complementarySkills
    .map(skill => skillTemplate(skill))
    .join('')

  // const skillsList = skills.map(skill => skillTemplate(skill)).join('')

  return `
    <div class="about-cards">
      <article class="card">
        <h3 class="card-title">Frontend Skills</h3>
        <ul class="card-container">${frontendSkillsList}</ul>
      </article>

      <article class="card">
        <h3 class="card-title">Complementary</h3>
        <ul class="card-container">${complementarySkillsList}</ul>
      </article>
    </div>
    `
}

module.exports = skillsComponent
