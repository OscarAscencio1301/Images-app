import { Response } from "../interfaces/elements"

export const getGifs = async (categorie: string) => {
    const api_key = 'HmAn3UBjbdCGuPqc6pzoASyWHfdOovQR'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${categorie} &limit=12`)
    const { data }: Response = await resp.json()
    const images = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.original.url
    }))

    return images
}

