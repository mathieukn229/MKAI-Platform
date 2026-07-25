export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Méthode non autorisée"
    });
  }

  try {

    const { message } = req.body;

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-5-mini",
          messages: [
            {
              role: "system",
              content:
                "Tu es MKAI, un assistant IA spécialisé dans le business, la création de contenu, l'apprentissage et les projets."
            },
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    );

    const data = await response.json();

    const reply =
      data.choices?.[0]?.message?.content ||
      "Je n'ai pas pu répondre.";

    res.status(200).json({
      reply
    });

  } catch (error) {

    res.status(500).json({
      error: "Erreur serveur"
    });

  }

              }
