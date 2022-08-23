let FOULS = [
    "Blocking",
    "Hand Check",
    "Hit",
    "Holding",
    "Intentional Foul",
    "Player Control",
    "Push",
    "Technical Foul",
];

let TEAM_COLORS = ["Black", "Blue", "Green", "Red", "White"];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomTeamColor() {
    return TEAM_COLORS[getRandomInt(0, TEAM_COLORS.length - 1)]
}

function getRandomFoul() {
    return FOULS[getRandomInt(0, FOULS.length - 1)]
}

function getRandomJerseyNumber() {
    let firstDigit = getRandomInt(1, 5);
    let secondDigit = getRandomInt(0, 5);
    return `${firstDigit}${secondDigit}`;
}

function generateFoul() {
    return `
        <h1>${getRandomTeamColor()}</h1>
        <h1>${getRandomJerseyNumber()}</h1>
        <h1>${getRandomFoul()}</h1>
    `;
}

function updateCallDisplay() {
    document.querySelector('#call-display-container').innerHTML = generateFoul();
}

document.addEventListener(
    "DOMContentLoaded",
    function () {
        updateCallDisplay();
        document
            .querySelector('#generate-call')
            .addEventListener('click', updateCallDisplay);
    },
    false
);
