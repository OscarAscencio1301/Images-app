import { render, screen } from '@testing-library/react'
import Gif from '../../../src/components/atoms/Gif'

describe("Test Atom Grid", () => {
    const title = 'Nuevo Gif';
    const url = 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg';

    test('Snapshot to component', () => {
        const { container } = render(<Gif title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })
    test('Debe de mostrar la imagen con el url indicado y el alt', () => {
        render(<Gif title={title} url={url} />)
        // expect(screen.getByRole<HTMLImageElement>('img').src).toBe(url)
        // expect(screen.getByRole<HTMLImageElement>('img').alt).toBe(title)

        const {src, alt} = screen.getByRole<HTMLImageElement>('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('Debe de mostrar el título en el componente', () => {
        render(<Gif title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })
    


})