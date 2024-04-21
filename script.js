const player = document.querySelector('#player');

function jump() {
    player.classList.add('hop');
    setTimeout(() => {
        player.classList.remove('hop');
    }, 700);
}

window.addEventListener('click', jump);
window.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'ArrowUp') {
        jump();
    }
});
