let All_ani = document.querySelectorAll('#screen_ocean .ani');

function inViewPort(el) {
    let rect = el.getBoundingClientRect()
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= window.innerHeight && rect.top <= window.innerHeight) ||
        (rect.top >= 0 && rect.bottom <= window.innerHeight)
    )
};

All_ani.forEach((item) =>
    inViewPort(item) ?
    item.classList.add('appear') :
    item.classList.remove('appear')
)