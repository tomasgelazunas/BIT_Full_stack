const data = {
    interval: null,
    clicked: false,
    userPoints: 0,
    computerPoints: 0,
    userWonRounds: 0,
    computerWonRounds: 0,
    ran: false,
    timeLeft: 30
}
const dataCopy = { ...data };

const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

const didClicked = () => {
    if (data.clicked) {
        data.userPoints++;
    } else {
        data.computerPoints++;
    }

    document.getElementById('user-points').textContent = data.userPoints;
    document.getElementById('computer-points').textContent = data.computerPoints;

    data.clicked = false;
}

const appendRoundResult = winnerText => {
    const node = document.createElement('DIV');
    node.className = 'item';
    node.innerHTML = `
    <h3>Round ${(data.computerWonRounds + data.userWonRounds)}</h3>
    ${winnerText}
    Your points: <b>${data.userPoints}</b><br>
    Computer points: <b>${data.computerPoints}</b><br>
    You won ${data.userWonRounds} rounds, while computer won ${data.computerWonRounds} rounds.
    `;
    document.getElementById('rounds-results').prepend(node);
}

const roundFinished = () => {
    let winnerText;

    if (data.userPoints > data.computerPoints) {
        winnerText = 'You won this round against computer.';

        data.userWonRounds++;
    } else {
        winnerText = 'Computer won this round against you.';

        data.computerWonRounds++;
    }

    appendRoundResult(winnerText);

    data.computerPoints = 0;
    data.userPoints = 0;
    data.timeLeft = 30;
}

const timer = () => {
    data.timeLeft--;

    if (data.timeLeft === 0) roundFinished();

    document.getElementById('timer').textContent = data.timeLeft.toString().padStart(2, '0');
}

const handleRestartGameEl = action => {
    const restartGameEl = document.getElementById('restart-game');

    if(action) {
        restartGameEl.classList.remove('hide');
        restartGameEl.classList.add('show');
    } else {
        restartGameEl.classList.add('hide');
        restartGameEl.classList.remove('show');
    }
}

const finishGame = () => {
    if (data.userWonRounds + data.computerWonRounds === 10) {
        clearInterval(data.interval);

        let wonText;
        const restartGameEl = document.getElementById('restart-game');

        if (data.userWonRounds > data.computerWonRounds) {
            wonText = 'You won the game against computer.';

            restartGameEl.style.borderColor = 'green';
        } else if (data.userWonRounds < data.computerWonRounds) {
            wonText = 'Computer won the game against you.';

            restartGameEl.style.borderColor = 'red';
        } else {
            wonText = 'Game is draw.';

            restartGameEl.style.borderColor = 'blue';
        }

        handleRestartGameEl(true);

        document.getElementById('restart-game-text').innerHTML = `${wonText}<br>
        You won rounds: <b>${data.userWonRounds}</b><br>
        Computer won rounds: <b>${data.computerWonRounds}</b><br>
        `;
    }
}

const randomPosition = () => {
    let top = rand(0, 500);
    let left = rand(0, 500);

    top = (top + 50) > 500 ? 450 : top;
    left = (left + 50) > 500 ? 450 : left;

    const player = document.getElementById('player');
    player.style.top = top + 'px';
    player.style.left = left + 'px';
    player.style.backgroundColor = `rgb(${rand(50, 255)}, ${rand(50, 255)}, ${rand(50, 255)})`;
}

const initFrame = () => {
    randomPosition();

    if (data.ran) {
        didClicked();
        timer();
    } else {
        data.ran = true;
    }

    finishGame();
}

const interval = () => {
    data.interval = setInterval(initFrame, 1000);
}

document.getElementById('player').addEventListener('click', () => {
    data.clicked = true;
})

document.getElementById('btn').addEventListener('click', () => {
    Object.assign(data, dataCopy);

    document.getElementById('rounds-results').innerHTML = '';

    handleRestartGameEl(false);
    interval();
});

interval();