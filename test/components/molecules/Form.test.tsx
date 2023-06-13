import { fireEvent, render, screen } from "@testing-library/react"
import Form from "../../../src/components/molecules/Form"

describe('Pruebas a un Formulario', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<Form addCategorie={() => { console.log('Hola') }} />)
        const input = screen.getByRole<HTMLInputElement>('textbox');
        fireEvent.input(input, { target: { value: 'Nuevo Texto' } })
        expect(input.value).toBe('Nuevo Texto')
    })

    test('Envio de Submit', () => {
        const inputValue = "Valor Texto";
        const sendFunction = jest.fn()

        render(<Form addCategorie={sendFunction} />)

        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(input.value).toBe("")


        expect(sendFunction).toHaveBeenCalled()
        expect(sendFunction).toHaveBeenCalledTimes(1)
        expect(sendFunction).toHaveBeenCalledWith(inputValue)


    })

    test('No se debde de enviar el Submit si el input esta vacío', () => {
        // const inputValue = "Valor Texto";
        const sendFunction = jest.fn()

        render(<Form addCategorie={sendFunction} />)

        // const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');

        // fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)



        expect(sendFunction).not.toHaveBeenCalled()
        expect(sendFunction).toHaveBeenCalledTimes(0)
        // expect(sendFunction).toHaveBeenCalledWith(inputValue)


    })
})