function init(index) {
    const parent = document.querySelector('.frame');
    const child = document.createElement('span');
    child.classList.add('cube');
    child.style.setProperty('width', `${200 - (index * 10)}px`);
    child.style.setProperty('height', `${200 - (index * 10)}px`);
    // child.style.setProperty('left', `${(400 - 210 - (index * 10) / 2)}px`);
    // child.style.setProperty('top', `${(400 - 210 - (index * 10) / 2)}px`);
    child.style.setProperty('border-color', `rgb(${70 + (index * 8), 70 + (index * 8), 70 + (index * 8)})`);
    child.style.setProperty('animation', `rotate 2s ease-in-out ${index / 30}s alternate infinite`);
// child.style.setProperty('bo')

    parent.appendChild(child);
}

for (let index = 1; index <= 19; index++) {
    init(index)
}