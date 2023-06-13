import useFetch from '../../src/hooks/useFetch'
import {renderHook, waitFor} from '@testing-library/react'

describe('Pruebas alcustom hook useFetch', () => {
  test('Retorno de un estado inicial', () => {
    const {result} = renderHook(() => useFetch('Goku'))
    const {imagesView, loading} = result.current

    expect(imagesView.length).toBe(0)
    expect(loading).toBeTruthy()
    
  })

  test('Retorno de un arreglo de imágnes y loading en false', async() => {
    const {result} = renderHook(() => useFetch('Goku'))
    await waitFor(
        () => expect(result.current.imagesView.length).toBeGreaterThan(0)
    )

    const {imagesView, loading} = result.current

    expect(imagesView.length).toBe(12)
    expect(loading).not.toBeTruthy()
    
  })
  
})
