// List of mission cards and reward cards
const missionCards = Array.from({length: 41}, (_, i) => `Mission${i}.jpg`);
const rewardCards = Array.from({length: 40}, (_, i) => `Reward${i}.jpg`).concat(['JOKERS_black.jpg', 'JOKERS_red.jpg']);

// Shuffle function
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Shuffle all cards
function shuffleCards() {
    shuffle(missionCards);
    shuffle(rewardCards);

    document.querySelectorAll('.mission-card .card-img').forEach((img, index) => {
        img.src = `Missions/${missionCards[index]}`;
    });

    document.querySelectorAll('.reward-card .card-img').forEach((img, index) => {
        img.src = `Reward/${rewardCards[index]}`;
    });
}

// Discard a mission card
function discardMission(btnElement) {
    const parentDiv = btnElement.parentElement;
    const imgElement = parentDiv.querySelector('.card-img');

    shuffle(missionCards);
    imgElement.src = `Missions/${missionCards[0]}`;
}

// Discard a reward card
function discardReward(btnElement) {
    const parentDiv = btnElement.parentElement;
    const imgElement = parentDiv.querySelector('.card-img');

    imgElement.src = "Reward/REWARD_BACK.jpg";
}
