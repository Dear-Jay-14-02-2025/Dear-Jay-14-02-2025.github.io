const numBees = 5;
const bees = [];

for (let i = 0; i < numBees; i++) {
    let bee = document.createElement('div');
    bee.classList.add('bee');
    document.body.appendChild(bee);
    let startY = Math.random() * window.innerHeight;
    bee.style.top = `${startY}px`;
    bee.style.left = `-${Math.random() * 100}px`;
    bees.push({ element: bee, speed: Math.random() * 3 + 2 });
}

function moveBees() {
    bees.forEach(bee => {
        let currentLeft = parseFloat(bee.element.style.left);
        if (currentLeft > window.innerWidth) {
            bee.element.style.left = `-${Math.random() * 100}px`;
            bee.element.style.top = `${Math.random() * window.innerHeight}px`;
        } else {
            bee.element.style.left = `${currentLeft + bee.speed}px`;
        }
    });
    requestAnimationFrame(moveBees);
}

moveBees();