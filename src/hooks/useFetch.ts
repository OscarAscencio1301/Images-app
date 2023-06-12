import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getImage";

const useFetch = (categorie: string) => {

    const [loading, setloading] = useState(true)

    const [imagesView, setimagesView] = useState<{ id: string; title: string; url: string; }[]>([])

    const getImages = async () => {
        const images = await getGifs(categorie)
        setimagesView(images)
        setloading(false)
    }


    useEffect(() => {
        getImages()
    }, [categorie])


    return {
        imagesView,
        loading
    }
}

export default useFetch
