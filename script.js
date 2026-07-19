function sendMessage() {

    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    const userMessage = input.value.trim();

    if (userMessage === "") {
        return;
    }

    messages.innerHTML += `
    <p class="user">
        👤 ${userMessage}
    </p>
`;
    `;

    input.value = "";

    // Effet MKAI réfléchit
    let thinking = document.createElement("p");
    thinking.className = "bot";
    thinking.innerHTML = "🤖 MKAI réfléchit<span>...</span>";
    messages.appendChild(thinking);

    setTimeout(() => {

        thinking.remove();

        let response = "🤖 Je suis MKAI. Je peux t'aider à créer, apprendre et développer tes projets.";

        if (userMessage.toLowerCase().includes("bonjour")) {
            response = "🤖 Bonjour Mathieu ! Bienvenue sur MKAI Platform 🚀";
        }

        if (userMessage.toLowerCase().includes("business")) {
            response = "🤖 Je peux t'aider à trouver des idées de business et des stratégies.";
        }

        messages.innerHTML += `
            <p class="bot">
            ${response}
            </p>
        `;

    }, 1500);

}
