import { getGifs } from '../../src/helpers/getImage'

describe('Probando getImage', () => {
    const categorie = 'Batman'
    test('Debe de retornar un arreglo', async () => {
        const data = await getGifs(categorie)
        expect(data.length).toBe(12)

    })

    test('Debe de retornar un arreglo mayor a 0 elementos', async () => {
        const data = await getGifs(categorie)
        expect(data.length).toBeGreaterThan(0)

    })

    test('Debe de retornar elementos con ciertas propiedades', async () => {
        const data = await getGifs(categorie)
        expect(data[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })

    })

})