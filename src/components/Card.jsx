import CardTag from "./CardTag"

function Card(props) {
  const title = props.title
  const description = props.description
  const date = props.date
  const imageUrl = props.imageUrl
  const tags = props.tags
  const archived = props.archived

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image"/>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
        <p className="card-date">{date}</p>
        <div className="card-tags">
          {
            tags.map((tag, id) => <CardTag
              key = {id}
              tag = {tag} 
            />)
          }
        </div>
      </div>
    </div>
  )
}

export default Card
