let isWhiteConfetti = false; // Flag to track the confetti color state

window.addEventListener("load", function() {
    createConfetti();
});

function createConfetti() {
    const confettiContainer = document.getElementById("confetti-container");

    for (let i = 0; i < 150; i++) { 
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Random position and animation speed for each confetti
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = getRandomColor();

        confettiContainer.appendChild(confetti);
    }
}

function getRandomColor() {
    const colors = ["#ffd700", "#a50044", "#004d98", "#ffcb00", "#ffffff"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showSurprise() {
    const surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");

    // Toggle the text color under the button to white
    surprise.style.color = "#ffffff";

    // Toggle confetti colors between white and the original colors
    document.querySelectorAll(".confetti").forEach(confetti => {
        confetti.style.backgroundColor = isWhiteConfetti ? getRandomColor() : "#ffffff";
    });

    // Toggle the flag to track confetti color state
    isWhiteConfetti = !isWhiteConfetti;
}
