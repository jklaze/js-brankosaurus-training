const game_over = document.querySelector('#game-over');
const player = document.querySelector('#player');
const obstacle = document.querySelector('.obstacle');

let score = 0;

function jump() {
    player.classList.add('hop');
    setTimeout(() => {
        player.classList.remove('hop');
    }, 700);
}

function retry() {
    game_over.classList.add('hidden');
    obstacle.style.animationPlayState = 'running';
    player.style.animationPlayState = 'running';
    score = 0;
}

function checkCollision() {
    const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    if (obstacleLeft < 150 && obstacleLeft > 40 && playerBottom <= 80) {
        obstacle.style.animationPlayState = 'paused';
        player.style.animationPlayState = 'paused';
        game_over.classList.remove('hidden');
    }
}
function checkScore() {
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    if (obstacleLeft < 40 && obstacleLeft > 39) {
        score++;
        document.querySelector('#score').textContent = score;
    }
}

window.addEventListener('click', jump);
window.addEventListener('keydown', function(e) {
    if (e.key === ' ' || e.key === 'ArrowUp') {
        jump();
    }
});
setInterval(checkCollision, 10);
setInterval(checkScore, 20);
