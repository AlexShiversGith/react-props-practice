import CardTag from "./CardTag"

function Card(props) {
  const title = props.props.title
  const description = props.props.description
  const date = props.props.date
  const imageUrl = props.props.imageUrl
  const tags = props.props.tags
  const archived = props.props.archived

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image"/>
      <div className="card-content">
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
        <p className="card-date">{date}</p>
        <div className="card-tags">
          {
            tags.map(tag => <CardTag tag={tag} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Card
