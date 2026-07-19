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

    input.value = "";

    // Effet MKAI réfléchit
    let thinking = document.createElement("p");
    thinking.className = "bot";
    thinking.innerHTML = "🤖 MKAI réfléchit...";
    messages.appendChild(thinking);

    setTimeout(() => {

        thinking.remove();

        let response = "🤖 Je suis MKAI. Je peux t'aider avec le business, l'IA, la création de contenu et tes projets 🚀";

        let message = userMessage.toLowerCase();

        if (message.includes("bonjour") || message.includes("salut")) {
            response = "🤖 Bonjour Mathieu ! Bienvenue sur MKAI Platform 🚀 Comment puis-je t'aider aujourd'hui ?";
        }

        else if (message.includes("business")) {
            response = "🤖 Je peux t'aider à trouver des idées de business, créer des produits digitaux et développer une stratégie.";
        }

        else if (message.includes("ia") || message.includes("intelligence artificielle")) {
            response = "🤖 L'IA permet de créer, automatiser et apprendre plus rapidement. Je peux t'aider à utiliser l'IA pour tes projets.";
        }

        else if (message.includes("contenu") || message.includes("facebook") || message.includes("tiktok")) {
            response = "🤖 Je peux t'aider à créer des publications, des scripts vidéos et des idées de contenu.";
        }

        else if (message.includes("projet")) {
            response = "🤖 Décris ton projet et je vais t'aider à construire un plan étape par étape.";
        }

        messages.innerHTML += `
        <p class="bot">
            ${response}
        </p>
        `;

    }, 1500);

                }
