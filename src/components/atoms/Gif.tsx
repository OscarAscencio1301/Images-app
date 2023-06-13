

const Gif = ({title, url}:{ id?: string; title: string; url: string; }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default Gif
