import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../../src/GifExpertApp";

describe('Pruebas al GifExpertApp', () => { 
    test('should ', () => {
        render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, {target: {value: 'Messi'}})
        const form = screen.getByRole('form')
        fireEvent.submit(form)
        expect(screen.getByText('GifExpertApp')).toBeTruthy()
        expect(screen.getByText('Cargando...')).toBeTruthy()
    });
 })