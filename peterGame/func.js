function drawPeter(x, y, size, rotation, shRotation){

    ctx.save()
    ctx.translate(x, y)

    ctx.fillStyle = '#0033cc'
    ctx.fillRect(-size/2, -size/5, size, size/2.5)

    ctx.restore()
}