// 콜백(Callback)

const loadImage = (url, cb) => {
    const imgEl = document.createElement('img')
    imgEl.src = url
    imgEl.addEventListener('load', () => {
        setTimeout(() => {
            cb(imgEl)
        }, 1000);
    })
}

const containerEl = document.querySelector('.container')
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
    containerEl.innerHTML = ''
    containerEl.append(imgEl)
})