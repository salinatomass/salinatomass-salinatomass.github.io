import { slider, devFinder, filter } from './snippets.js'

const $carouselContainer = document.getElementById('carouselContainer')
const $carouselItemList = document.querySelectorAll('.carousel-item')
const $backwardButton = document.getElementById('backward')
const $forwardButton = document.getElementById('forward')

const $htmlCode = document.getElementById('htmlCode')
const $cssCode = document.getElementById('cssCode')
const $jsCode = document.getElementById('jsCode')

const carousel = () => {
  let position = 0
  const minPosition = -800
  const maxPosition = 0
  const movement = 400 // item size + gap

  let itemInFocus = 0 // index

  const hiddenItem = $item => $item.classList.remove('active')

  const showItem = $item => $item.classList.add('active')

  const updateCodeTabs = ({ htmlString, cssString, jsString }) => {
    $htmlCode.innerHTML = htmlString
    $cssCode.innerHTML = cssString
    $jsCode.innerHTML = jsString
    window.hljs.highlightAll()
  }

  const setCodeHighlight = $item => {
    const codeTabName = $item.dataset.name

    switch (codeTabName) {
      case 'slider':
        updateCodeTabs(slider)
        break
      case 'devFinder':
        updateCodeTabs(devFinder)
        break
      case 'filter':
        updateCodeTabs(filter)
        break
    }
  }

  const moveCarouselToLeft = () => {
    if (position === minPosition) return

    $backwardButton.disabled = false
    position -= movement
    $carouselContainer.style.transform = `translate(${position}px)`

    hiddenItem($carouselItemList[itemInFocus])
    itemInFocus += 1
    showItem($carouselItemList[itemInFocus])
    setCodeHighlight($carouselItemList[itemInFocus])

    if (position === minPosition) $forwardButton.disabled = true
  }

  const moveCarouselToRight = () => {
    if (position === maxPosition) return

    $forwardButton.disabled = false

    position += movement
    $carouselContainer.style.transform = `translate(${position}px)`

    hiddenItem($carouselItemList[itemInFocus])
    itemInFocus -= 1
    showItem($carouselItemList[itemInFocus])
    setCodeHighlight($carouselItemList[itemInFocus])

    if (position === maxPosition) $backwardButton.disabled = true
  }

  updateCodeTabs(slider)

  $forwardButton.addEventListener('click', () => {
    moveCarouselToLeft()
  })
  $backwardButton.addEventListener('click', () => {
    moveCarouselToRight()
  })
}

export default carousel
