mixin('aspect', ['selector', 'ratio'],
  returnValue('Array.from(document.querySelectorAll(selector))',
    reduceFunc(
      prelude('      const width = tag.offsetWidth\n\
      const height = `${width/ratio}px`\n',
        createAttribute(['selector'],
          addAttribute('tag', 'aspect',
            addRule('${selector}', '', 'aspect', 'height: ${height}')))))))
