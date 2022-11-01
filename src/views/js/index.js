const socket = io();

const circle = document.querySelector('#circle')

const drag = e => {
    const position = {
        top : e.clientY  + 'px',
        left : e.clientX + 'px'
    }

    drawCircle(position)
    socket.volatile.emit('circle position', position)

}

const drawCircle = position => {
    circle.style.left = position.left
    circle.style.top = position.top
}

document.addEventListener('mousedown', e =>  {
    document.addEventListener('mousemove', drag)
})

document.addEventListener('mouseup', e =>  {
    document.removeEventListener('mousemove', drag)
})

socket.on('move circle', position => {
    drawCircle(position)
})