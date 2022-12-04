const devFinder = () => {
  const BASE_API = 'https://api.github.com'

  const $userContainer = document.getElementById('finderContainer')
  const $userForm = document.getElementById('finderForm')
  const $search = document.getElementById('finderSearch')

  const fetchUser = username =>
    new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(`${BASE_API}/users/${username}`)
        if (!res.ok || res.status === 404) reject('User not found')

        const data = await res.json()
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })

  const userTemplate = user => {
    return `
          <picture class="devfinder__avatar">
            <img src=${user.avatar_url} alt="${user.name} avatar" loading="lazy" />
          </picture>
          <h3>${user.name}</h3>
          <a href=${user.html_url} target="_blank">@${user.login}</a>
          <ul class="devfinder__stats">
            <li class="devfinder__stats-item">Repos <span>${user.public_repos}</span></li>
            <li class="devfinder__stats-item">Followers <span>${user.followers}</span></li>
            <li class="devfinder__stats-item">Following <span>${user.following}</span></li>
          </ul>
        `
  }

  const loadUser = async username => {
    try {
      const user = await fetchUser(username)
      $userContainer.innerHTML = userTemplate(user)
    } catch (error) {
      alert(error)
    }
  }

  const searchUser = e => {
    e.preventDefault()
    const username = $search.value
    loadUser(username)
    $search.value = ''
  }

  window.addEventListener('load', () => loadUser('salinatomass'))
  $userForm.addEventListener('submit', searchUser)
}

export default devFinder
