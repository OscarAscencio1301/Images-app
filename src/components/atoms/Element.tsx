import Gif from "./Gif";
import useFetch from "../../hooks/useFetch";



const Element = ({ categorie }: { categorie: string }) => {

  const { imagesView, loading } = useFetch(categorie)

  if(loading){
    return <h1>Cargando...</h1>
  }


  return (
    <>
      <h1>{categorie}</h1>
      <div className="card-grid">
        {
          imagesView.map(image => <Gif key={image.id} {...image} />)
        }
      </div>
    </>
  )
}

export default Element
