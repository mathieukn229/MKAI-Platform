function sendMessage() {

    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");

    const userMessage = input.value.trim();

    if (userMessage === "") {
        return;
    }

    messages.innerHTML += `
        <p style="background:#2563eb;padding:10px;border-radius:15px;">
        👤 ${userMessage}
        </p>
    `;

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

    input.value = "";

}
