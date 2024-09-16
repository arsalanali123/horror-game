const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');

const story = {
    start: {
        text: "You stand before the eerie, dilapidated mansion. The wind howls through the broken windows, and a sense of dread fills the air. What will you do?",
        choices: [
            { text: "Enter through the front door.", next: "frontDoor" },
            { text: "Walk around the mansion.", next: "walkAround" },
            { text: "Try to find a back entrance.", next: "backEntrance" },
            { text: "Leave immediately.", next: "leave" }
        ]
    },
    frontDoor: {
        text: "The door creaks open, revealing a dark and dusty foyer. You hear a faint whispering sound from the second floor. What do you do?",
        choices: [
            { text: "Investigate the whispering sound.", next: "whisperingSound" },
            { text: "Explore the foyer.", next: "foyer" },
            { text: "Head to the basement.", next: "basement" },
            { text: "Leave the mansion.", next: "leave" }
        ]
    },
    whisperingSound: {
        text: "You cautiously climb the stairs and follow the whispering. At the top, you find a room with an old journal on a dusty table. What will you do?",
        choices: [
            { text: "Read the journal.", next: "readJournal" },
            { text: "Search the room for clues.", next: "searchRoom" },
            { text: "Leave the room and go back downstairs.", next: "frontDoor" },
            { text: "Return to the foyer.", next: "foyer" }
        ]
    },
    readJournal: {
        text: "The journal reveals that the mansion was once owned by a family who disappeared mysteriously. You feel a chill as you read about their tragic fate. Suddenly, the lights flicker, and you hear footsteps behind you. What do you do?",
        choices: [
            { text: "Investigate the noise.", next: "investigateNoise" },
            { text: "Hide in the closet.", next: "hideInCloset" },
            { text: "Confront the presence.", next: "confrontPresence" },
            { text: "Run downstairs.", next: "frontDoor" }
        ]
    },
    // Additional story paths...
    // (Define remaining paths here)
    
    leave: {
        text: "You decide it's best to leave. As you walk away from the mansion, you can't shake the feeling of being watched. The whispering continues in your mind as you disappear into the night.",
        choices: [] // End game
    },
    // Define other endings like 'goodEnding', 'badEnding', 'mysteriousEnding', etc.
};

function showStory(key) {
    const scene = story[key];
    storyElement.innerHTML = scene.text;
    choicesElement.innerHTML = '';
    
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choice-button');
        button.textContent = choice.text;
        button.addEventListener('click', () => showStory(choice.next));
        choicesElement.appendChild(button);
    });
}

// Start the game
showStory('start');
