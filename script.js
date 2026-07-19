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

        let response = "🤖 Je suis MKAI. Je peux t'aider avec le business, l'IA, la création de contenu et tes projets 🚀";

let message = userMessage.toLowerCase();

if (message.includes("bonjour") || message.includes("salut")) {
    response = "🤖 Bonjour Mathieu ! Bienvenue sur MKAI Platform 🚀 Comment puis-je t'aider aujourd'hui ?";
}

else if (message.includes("business")) {
    response = "🤖 Voici une idée business : crée un produit digital simple (ebook, formation, service IA) et vends-le à ton audience. Je peux aussi t'aider à trouver une idée adaptée.";
}

else if (message.includes("ia") || message.includes("intelligence artificielle")) {
    response = "🤖 L'intelligence artificielle permet aux machines d'analyser, apprendre et aider les humains. Avec MKAI, tu peux apprendre à utiliser l'IA pour créer et développer tes projets.";
}

else if (message.includes("contenu") || message.includes("facebook") || message.includes("tiktok")) {
    response = "🤖 Je peux t'aider à créer des idées de publications, des scripts vidéos, des accroches et une stratégie de contenu.";
}

else if (message.includes("projet")) {
    response = "🤖 Décris-moi ton projet et je vais t'aider à organiser les étapes, les outils nécessaires et la stratégie.";
}
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
