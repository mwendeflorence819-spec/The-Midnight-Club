// THE MOOD ROOM

function checkMood() {

    const mood = document.getElementById("mood").value;

    const responses = {
        happy: "Protect this energy. You deserve every bit of happiness. ✨",
        sad: "It's okay not to be okay. Be gentle with yourself today. 💗",
        chaotic: "Oh, we're choosing violence today? Interesting. 😈",
        tired: "Rest is productive too. Go recharge, bestie. 💤",
        motivated: "Main character energy activated. Go get that dream! 🔥"
    };

    document.getElementById("moodResult").textContent =
        responses[mood] || "Pick a mood first, bestie!";
}


// THE RANDOMIZER

function generateActivity() {

    const activities = [
        "Take yourself on a solo adventure.",
        "Learn a completely random skill.",
        "Make a playlist for your current era.",
        "Write a letter to your future self.",
        "Take 10 pictures of interesting things around you.",
        "Try drawing with your non-dominant hand.",
        "Learn five words in a new language.",
        "Rearrange your phone's home screen.",
        "Watch a documentary about something unusual.",
        "Create a fictional character with an entire backstory."
    ];

    const randomIndex = Math.floor(Math.random() * activities.length);

    document.getElementById("activityResult").textContent =
        activities[randomIndex];
}


// THE CONFESSION WALL

function saveConfession() {

    const input = document.getElementById("confession");

    const confession = input.value.trim();

    if (confession === "") {
        alert("You can't leave an empty confession!");
        return;
    }

    const confessions = JSON.parse(
        localStorage.getItem("confessions") || "[]"
    );

    confessions.push(confession);

    localStorage.setItem("confessions", JSON.stringify(confessions));

    input.value = "";

    displayConfessions();
}


function displayConfessions() {

    const wall = document.getElementById("confessionWall");

    const confessions = JSON.parse(
        localStorage.getItem("confessions") || "[]"
    );

    wall.innerHTML = "";

    confessions.forEach(function(confession) {

        const note = document.createElement("div");

        note.className = "confession-note";

        note.textContent = "💌 " + confession;

        wall.appendChild(note);

    });
}


// THE CHAOS BUTTON

function activateChaos() {

    const chaosMessages = [
        "🚨 SYSTEM OVERRIDE. You're officially the main character.",
        "👽 An alien somewhere is currently thinking about you.",
        "🪐 Your parallel universe self just sent you a message.",
        "⚠️ Warning: excessive levels of awesomeness detected.",
        "🎭 Plot twist: everything is about to get interesting.",
        "🔮 The universe says drink some water."
    ];

    const randomIndex = Math.floor(Math.random() * chaosMessages.length);

    document.getElementById("chaosResult").textContent =
        chaosMessages[randomIndex];
}


// LOAD SAVED CONFESSIONS

displayConfessions();
// THE SECRET PORTAL

function unlockSecret() {

    const password = prompt("Enter the secret password:");

    const message = document.getElementById("secretMessage");

    if (password === "moonlight") {

        message.textContent =
            "🌙 Congratulations, curious soul. You found what was hidden. Remember: you are the universe experiencing itself.";

    } else {

        message.textContent =
            "🚫 Access denied. The universe isn't ready to reveal its secrets.";

    }
}
// =========================
// MIDNIGHT_OS TERMINAL
// =========================

const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");


function printToTerminal(message) {

    const line = document.createElement("p");

    line.textContent = message;

    terminalOutput.appendChild(line);

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}


function runCommand(command) {

    const input = command.trim().toLowerCase();

    if (input === "") return;

    printToTerminal("visitor@midnight:~$ " + command);

    switch (input) {

        case "help":

            printToTerminal("AVAILABLE COMMANDS:");
            printToTerminal("about - Discover the Midnight Club");
            printToTerminal("date - Check today's date");
            printToTerminal("whoami - Discover your identity");
            printToTerminal("spell - Generate a magical spell");
            printToTerminal("secret - Discover something hidden");
            printToTerminal("clear - Clear the terminal");

            break;


        case "about":

            printToTerminal("MIDNIGHT_OS: A digital universe between dreams and reality.");

            break;


        case "date":

            printToTerminal(new Date().toLocaleString());

            break;


        case "whoami":

            printToTerminal("You are a curious explorer of the Midnight Club.");

            break;


        case "spell":

            const spells = [
                "Lumos Nocturna: Summons light in darkness.",
                "Somnia Aeterna: Protects beautiful dreams.",
                "Astra Viventem: Awakens your inner universe.",
                "Velora Mystica: Grants temporary invisibility."
            ];

            const randomSpell = spells[
                Math.floor(Math.random() * spells.length)
            ];

            printToTerminal(randomSpell);

            break;


        case "secret":

            printToTerminal("ACCESS GRANTED.");
            printToTerminal("You were never supposed to find this terminal.");
            printToTerminal("But since you're here... welcome home. 🌙");

            break;


        case "clear":

            terminalOutput.textContent = "";

            break;


        default:

            printToTerminal("Unknown command. Type 'help' for assistance.");

    }

}


terminalInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const command = terminalInput.value;

        runCommand(command);

        terminalInput.value = "";

    }

});
// =========================
// LUNA'S PERSONALITY SYSTEM
// =========================

function talkToLuna() {

    const input = document.getElementById("lunaInput");

    const chat = document.getElementById("lunaChat");

    const message = input.value.trim().toLowerCase();

    if (message === "") return;

    // Display visitor's message

    const userMessage = document.createElement("p");

    userMessage.textContent = "You: " + input.value;

    chat.appendChild(userMessage);

    // Save visitor's message

const history = JSON.parse(
    localStorage.getItem("lunaChatHistory") || "[]"
);

history.push({
    sender: "You",
    text: input.value
});


    // Luna's responses

    let response;

    if (message.includes("hello") || message.includes("hi")) {

        response = "Well, hello there, beautiful stranger! 🧚‍♀️";

    } else if (message.includes("sad") || message.includes("cry")) {

        response = "Sending you the biggest magical hug. Remember, even stars need darkness to shine. 💜";

    } else if (message.includes("love")) {

        response = "Ahhh, love. The universe's most confusing little experiment. 💗";

    } else if (message.includes("name")) {

        response = "I'm Luna! Guardian of this little corner of cyberspace.";

    } else if (message.includes("help")) {

        response = "Try telling me hello, asking my name, or telling me how you're feeling!";

    } else if (message.includes("bored")) {

        response = "Boredom is just an invitation to cause some harmless chaos. Try the Randomizer!";

    } else if (message.includes("bye")) {

        response = "Until the stars bring us together again. 🌙";

    } else {

        const randomResponses = [

            "Interesting... tell me more. ✨",

            "The stars are listening. 🌌",

            "I feel like there's a story behind that.",

            "If I had a notebook, I'd write that down.",

            "Hmm. My magical instincts are tingling.",

            "You humans are fascinating creatures. 🧚‍♀️"

        ];

        response = randomResponses[
            Math.floor(Math.random() * randomResponses.length)
        ];

    }


    // Display Luna's response

    const lunaMessage = document.createElement("p");

    lunaMessage.textContent = "Luna: " + response;

    chat.appendChild(lunaMessage);

    // Save Luna's response

history.push({
    sender: "Luna",
    text: response
});

localStorage.setItem(
    "lunaChatHistory",
    JSON.stringify(history)
);


    // Clear input

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

}
// =========================
// LUNA'S MEMORY SYSTEM
// =========================

function loadLunaMemory() {

    const chat = document.getElementById("lunaChat");

    const history = JSON.parse(
        localStorage.getItem("lunaChatHistory") || "[]"
    );

    chat.innerHTML = "";

    if (history.length === 0) {

        chat.textContent = "Luna: Welcome back, stranger. ✨";

        return;
    }

    history.forEach(function(message) {

        const line = document.createElement("p");

        line.textContent = message.sender + ": " + message.text;

        chat.appendChild(line);

    });

    chat.scrollTop = chat.scrollHeight;
}

loadLunaMemory();
// CLEAR LUNA'S MEMORY

function clearLunaMemory() {

    const confirmation = confirm(
        "Are you sure you want to erase Luna's conversation?"
    );

    if (confirmation) {

        localStorage.removeItem("lunaChatHistory");

        loadLunaMemory();

    }

}
// =========================
// THE ENCHANTED LIBRARY
// =========================


// SAVE JOURNAL ENTRIES

function saveJournalEntry() {

    const titleInput = document.getElementById("journalTitle");

    const entryInput = document.getElementById("journalEntry");

    const title = titleInput.value.trim();

    const content = entryInput.value.trim();

    if (title === "" || content === "") {

        alert("Please enter both a title and your journal entry.");

        return;

    }

    const entries = JSON.parse(
        localStorage.getItem("dreamJournal") || "[]"
    );

    const newEntry = {

        id: Date.now(),

        title: title,

        content: content,

        date: new Date().toLocaleString()

    };

    entries.unshift(newEntry);

    localStorage.setItem(
        "dreamJournal",
        JSON.stringify(entries)
    );

    titleInput.value = "";

    entryInput.value = "";

    displayJournalEntries();

    alert("Your memory has been preserved. ✨");

}


// DISPLAY JOURNAL ENTRIES

function displayJournalEntries() {

    const container = document.getElementById("journalEntries");

    const search = document.getElementById("journalSearch")
        .value.toLowerCase();

    const entries = JSON.parse(
        localStorage.getItem("dreamJournal") || "[]"
    );

    container.innerHTML = "";

    const filteredEntries = entries.filter(function(entry) {

        return entry.title.toLowerCase().includes(search) ||
               entry.content.toLowerCase().includes(search);

    });

    if (filteredEntries.length === 0) {

        container.textContent = "No memories found. Your story starts here. 🌙";

        return;

    }

    filteredEntries.forEach(function(entry) {

        const card = document.createElement("div");

        card.className = "journal-entry";

        const title = document.createElement("h4");

        title.textContent = entry.title;

        const date = document.createElement("small");

        date.textContent = entry.date;

        const content = document.createElement("p");

        content.textContent = entry.content;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete memory";

        deleteButton.className = "delete-entry";

        deleteButton.onclick = function() {

            deleteJournalEntry(entry.id);

        };

        card.appendChild(title);

        card.appendChild(date);

        card.appendChild(content);

        card.appendChild(deleteButton);

        container.appendChild(card);

    });

}


// DELETE INDIVIDUAL ENTRIES

function deleteJournalEntry(id) {

    const confirmation = confirm(
        "Are you sure you want to delete this memory?"
    );

    if (!confirmation) return;

    const entries = JSON.parse(
        localStorage.getItem("dreamJournal") || "[]"
    );

    const updatedEntries = entries.filter(function(entry) {

        return entry.id !== id;

    });

    localStorage.setItem(
        "dreamJournal",
        JSON.stringify(updatedEntries)
    );

    displayJournalEntries();

}


// LOAD SAVED ENTRIES

displayJournalEntries();