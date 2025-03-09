  export const removeIndent = (input) => {
    const lines = input.split('\n')
    while (lines.length > 0 && lines.at(0).trim() === '') lines.shift()
    while (lines.length > 0 && lines.at(-1).trim() === '') lines.pop()
    const indentLength = lines.at(0).match(/^\s*/).at(0).length
    return lines.map(line => line.slice(indentLength)).join('\n')
  }

