import { render, screen } from "@testing-library/react"
import Element from "../../../src/components/atoms/Element"
import useFetch from "../../../src/hooks/useFetch"

jest.mock("../../../src/hooks/useFetch")

describe('Pruebas a lista de Elementos', () => {
    const categorie = "Messi"
    const images: { id: string; title: string; url: string; }[] = [
        {
            id: 'a',
            title: 'Imagen 1',
            url: 'imagen1.jpg'
        },
        {
            id: 'b',
            title: 'Imagen 2',
            url: 'imagen2.jpg'
        }
    ]
    test('Debe de mostrar el loading Inicial', () => {

        (useFetch as jest.Mock).mockReturnValue({
            imagesView: [],
            loading: true
        })


        render(<Element categorie={categorie} />)
        expect(screen.getByText('Cargando...')).toBeTruthy()
    })


    test('Probando el useFetch con información', () => {


        (useFetch as jest.Mock).mockReturnValue({
            imagesView: images,
            loading: false
        })


        render(<Element categorie={categorie} />)

        expect(screen.getAllByRole('img').length).toBe(2)
    })

})