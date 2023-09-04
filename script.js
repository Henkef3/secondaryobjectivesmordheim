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

function finalizeCards() {
    const missionElems = Array.from(document.querySelectorAll('.mission-card .card-img'));
    const rewardElems = Array.from(document.querySelectorAll('.reward-card .card-img'));

    const discardedMissions = missionElems.filter(img => img.src.endsWith('MISSION_BACK.jpg')).length;
    const unshuffledRewards = rewardElems.filter(img => img.src.endsWith('REWARD_BACK.jpg')).length;

    if (discardedMissions < 1 || discardedMissions > 1 || unshuffledRewards > 0) {
        alert("Discard exactly one mission and make sure you've shuffled once to get your rewards.");
    } else {
        // Open new page and display non-discarded cards
        const newWindow = window.open("", "Final Cards", "width=600,height=400");
        newWindow.document.body.innerHTML = ""; // Clear old results
        newWindow.document.write("<h1>Final Cards</h1>");
        
        missionElems.forEach((img) => {
            if (!img.src.endsWith('MISSION_BACK.jpg')) {
                newWindow.document.write(`<img src="${img.src}" width="400" height="600" object-fit: cover>`);
            }
        });
        
        rewardElems.forEach((img) => {
            if (!img.src.endsWith('REWARD_BACK.jpg')) {
                newWindow.document.write(`<img src="${img.src}" width="400" height="600" object-fit: cover>`);
            }
        });
		
		// Add 'How to Play' section
        newWindow.document.write('<div id="how-to-play" style="text-align:left; font-size:18px; font-weight:bold;">');
        newWindow.document.write('<p>How to Play:</p>');
        newWindow.document.write('<p>If you succeed with a mission, you randomely pick one reward card. You then get the reward for that same type as your Mission card. For example: A Mission: Attack gives the Reward: Attack. If you complete your second mission, you check your reward against the other reward card you have left.</p>');
        newWindow.document.write('</div>');
    }
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
