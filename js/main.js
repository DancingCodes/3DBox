const body = document.body
const realBox = document.querySelector('.realBox')

// 缩放
let perspectiveValue = 500
body.style.perspective = `${perspectiveValue}px`
window.addEventListener('mousewheel', (e) => {
    if (e.wheelDelta < 0) {
        // 向下滚动
        perspectiveValue += 5
    }
    if (e.wheelDelta > 0) {
        // 向上滚动
        perspectiveValue -= 5
    }
    body.style.perspective = `${perspectiveValue}px`
})


let moveX = 0
let moveY = 0
let rotateXValue = 0
let rotateYValue = 0
// 旋转
window.addEventListener('mousedown', (e) => {
    if (realBox.style.transform) {
        rotateXValue = realBox.style.transform.match(/(?<=\()(.+?)(?=\))/g)[0].replace(/deg/, '') - 0
        rotateYValue = realBox.style.transform.match(/(?<=\()(.+?)(?=\))/g)[1].replace(/deg/, '') - 0
    }
    moveX = e.pageX
    moveY = e.pageY
    window.addEventListener('mousemove', startRotate)
})
window.addEventListener('mouseup', (e) => {
    window.removeEventListener('mousemove', startRotate)
})

function startRotate(e) {
    realBox.style.transform = `rotateX(${-(e.pageY - moveY - rotateXValue)}deg) rotateY(${e.pageX - moveX + rotateYValue}deg)`
}