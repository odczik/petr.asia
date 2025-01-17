/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

var PETER = {
    size: 0
}

const resize = () => {

    if(window.innerHeight > window.innerWidth){
        canvas.width = window.innerWidth, canvas.height = window.innerWidth
    }else{
        canvas.width = window.innerHeight, canvas.height = window.innerHeight
    }
}
resize()
window.addEventListener('resize', () => {
    resize()
    drawPeter(100, 100, 50, 0, 0)
})
drawPeter(100, 100, 50, 0, 0)

