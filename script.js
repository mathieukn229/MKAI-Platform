// MKAI Chat - Version 1

function sendMessage() {

    let input = document.getElementById("userInput");
    let messages = document.getElementById("messages");

    let userMessage = input.value;

    if(userMessage.trim() === "") {
        return;
    }


    messages.innerHTML += `
        <p style="background:#2563eb;padding:10px;border-radius:15px;">
        👤 ${userMessage}
        </p>
    `;


    let response = "🤖 Je suis MKAI. Je prépare une réponse intelligente pour toi 🚀";


    if(userMessage.toLowerCase().includes("bonjour")) {
        response = "🤖 Bonjour ! Je suis MKAI, ton assistant intelligent.";
    }

    if(userMessage.toLowerCase().includes("business")) {
        response = "🤖 MKAI peut t'aider à trouver des idées de business et créer des stratégies.";
    }


    messages.innerHTML += `
        <p class="bot">
        ${response}
        </p>
    `;


    input.value = "";

}
