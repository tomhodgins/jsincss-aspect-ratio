function aspect(selector, ratio) {
  const attr = (selector + ratio).replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(selector))
    .reduce((output, tag, count) => {
      const height = `${tag.offsetWidth / ratio}px`
      output.add.push({tag: tag, count: count})
      output.styles.push(`${selector}[data-aspect-${attr}="${count}"] { height: ${height} }`)
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-aspect-${attr}`, tag.count))
  return result.styles.join('\n')
}
