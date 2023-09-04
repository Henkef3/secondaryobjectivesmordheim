// List of mission cards and reward cards
const missionCards = ['Mission.jpg'].concat(Array.from({length: 39}, (_, i) => `Mission${i + 2}.jpg`));
const rewardCards = ['Reward.jpg'].concat(Array.from({length: 38}, (_, i) => `Reward${i + 2}.jpg`)).concat(['JOKERS_black.jpg', 'JOKERS_red.jpg']);



// Shuffle function to shuffle an array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Function to shuffle all cards
function shuffleCards() {
    // Shuffle mission and reward cards
    shuffle(missionCards);
    shuffle(rewardCards);

    // Update the images for mission cards
    document.querySelectorAll('.mission-card .card-img').forEach((img, index) => {
        img.src = `Missions/${missionCards[index]}`;
    });

    // Update the images for reward cards
    document.querySelectorAll('.reward-card .card-img').forEach((img, index) => {
        img.src = `Reward/${rewardCards[index]}`;
    });
}

// Function to repick a mission card (shuffle it individually)
function repickMission(btnElement) {
    const parentDiv = btnElement.parentElement;
    const imgElement = parentDiv.querySelector('.card-img');

    // Shuffle the mission cards and pick the first one
    shuffle(missionCards);
    imgElement.src = `Missions/${missionCards[0]}`;
}

// Function to discard a mission card (reset it to the back image)
function discardMission(btnElement) {
    const parentDiv = btnElement.parentElement;
    const imgElement = parentDiv.querySelector('.card-img');

    // Set the image to MISSION_BACK.tif
    imgElement.src = "Missions/MISSION_BACK.jpg";
}
