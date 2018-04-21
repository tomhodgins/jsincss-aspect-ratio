function aspect(selector, ratio) {

  return Array.from(document.querySelectorAll(selector))

    .reduce((styles, tag, count) => {

      const width = tag.offsetWidth
       const height = `${width/ratio}px`
      const attr = selector.replace(/\W/g, '')

      tag.setAttribute(`data-aspect-${attr}`, count)
      styles += `${selector}[data-aspect-${attr}="${count}"] { height: ${height} }\n`
      count++

      return styles

    }, '')

}
