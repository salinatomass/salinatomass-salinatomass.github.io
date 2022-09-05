const fs = require('fs')

const TEMPLATE_PATH = 'public/index.template.html'
const GENERATED_PATH = 'public/index.html'

const render = ({ content, placeholder, firstRendering = false }) => {
  const filePath = firstRendering ? TEMPLATE_PATH : GENERATED_PATH

  const templateFileBuffer = fs.readFileSync(filePath)
  const htmlText = templateFileBuffer.toString()
  const [precontent, postcontent] = htmlText.split(placeholder)

  const html = `${precontent}${content}${postcontent}`

  fs.writeFileSync(GENERATED_PATH, html)
}

module.exports = { render }
