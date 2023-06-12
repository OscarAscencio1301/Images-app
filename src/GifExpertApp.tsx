import { useState } from "react"
import Form from "./components/molecules/Form";
import Title from "./components/atoms/Title";
import ElementsList from "./components/molecules/ElementsList";


const GifExpertApp = () => {
  const [categories, setcategories] = useState<string[]>([]);


  const addCategorie = (newCategorie: string) => {
    if (categories.includes(newCategorie)) return
    setcategories([newCategorie, ...categories ])

  }


  return (
    <>
      {/* Título */}
      <Title />
      {/* Input */}
      <Form addCategorie={addCategorie} />
      {/* Listado */}
      <ElementsList categories={categories} />
    </>
  )
}

export default GifExpertApp
