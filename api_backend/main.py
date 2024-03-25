from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import openai

app = FastAPI()

# Configurer CORS pour permettre les requêtes depuis le frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}



# Définir la clé API OpenAI à partir de la variable d'environnement
# openai.api_key = os.environ.get("OPENAI_API_KEY")

# openai.api_key = "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"

openai.api_key = "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"

@app.post("/generate_content")
async def generate_content(data: dict):
    try:
        # Construire le super prompt à partir des variables envoyées par le frontend
        prompt = f"Générez un post pour {data['social_network']} sur le sujet {data['content_topic']} en adoptant un style {data['content_style']}. Le contenu doit inclure des descriptions détaillées, des expériences uniques, des informations pertinentes et des conseils liés au sujet. Assurez-vous d'écrire dans la langue spécifiée {data['generate_posts_language']} et de respecter la longueur maximale de {data['max_characters']} caractères."

        # Générer le contenu textuel avec l'API OpenAI (utilisation de l'API de chat)
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt},
            ],
            max_tokens=2048,
            temperature=0.7,
        )

        # Extraire le contenu généré
        generated_content = response['choices'][0]['message']['content'].strip()

        # Générer les 4 images liées au contenu avec l'API DALL-E
        urlImages = []
        for i in range(4):
            image_response = openai.Image.create(
                prompt=f"Générez 4 images distinctes représentant des scènes emblématiques liées au sujet {data['content_topic']} et au style {data['content_style']}. Les images doivent adopter un style réaliste et capturer l'essence du sujet de manière visuelle et attrayante. Chaque image doit être unique et apporter une perspective différente sur le sujet.",  # Prompt pour générer l'image
                n=4,  # Générer une seule image à la fois
                size="512x512"  # Taille de l'image
            )
            urlImages.append(image_response['data'][0]['url'])  # Ajouter l'URL de l'image générée

        # Calculer le nombre de caractères du contenu généré
        num_characters = len(generated_content)

        # Retourner les données générées dans un dictionnaire
        return {
            "post": generated_content,
            "urlImages": urlImages,
            "number_of_characters": num_characters
        }

    except Exception as e:
        # Gérer les exceptions et renvoyer une erreur HTTP 500
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)