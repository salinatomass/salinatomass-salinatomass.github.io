import toggleMenu from './utils/toggleMenu.js'
import openDetails from './utils/openDetails.js'

import carousel from './components/carousel/index.js'
import slider from './components/carousel/slider.js'
import devFinder from './components/carousel/devFinder.js'
import imageComparison from './components/carousel/imageComparison.js'

import './css/main.css'
import '../lib/highlight/styles/atom-one-dark.min.css'

toggleMenu()
openDetails()

carousel()
slider()
devFinder()
imageComparison()
