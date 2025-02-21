import 'css-editor-element'
import './styles/global.css'

document.querySelectorAll('.stage').forEach(stage =>
  stage.addEventListener('click', function remove(e) {
    const stage = e.target!
    const newStage = stage.cloneNode(true)
    newStage.addEventListener('click', remove)
    stage.removeEventListener('click', remove)
    stage.replaceWith(newStage)
  })
)

const root = document.body
document.addEventListener('mousemove', e => {
  root.style.setProperty('--my', String(e.pageY / root.clientHeight))
  root.style.setProperty('--mx', String(e.pageX / root.clientWidth))
})
