
import Element from "../atoms/Element"


const ElementsList = ({ categories }: { categories: string[] }) => {

  return (
    <>
      {
        categories.map((categorie, index) => <Element key={index} categorie={categorie} />)
      }
    </>
  )
}

export default ElementsList
