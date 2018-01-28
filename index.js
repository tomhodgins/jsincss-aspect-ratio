export default (selector, ratio) => {

  let styles = ''
  let count = 0

  document.querySelectorAll(selector).forEach(tag => {

    const attr = selector.replace(/\W/g, '')
    const width = tag.offsetWidth
    const height = `${width/ratio}px`

    tag.setAttribute(`data-aspect-${attr}`, count)
    styles += `${selector}[data-aspect-${attr}="${count}"] { height: ${height} }\n`
    count++

  })

  return styles

}