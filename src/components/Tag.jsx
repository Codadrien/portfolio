import '../styles/Tag.scss'

function Tag({ data }) {
  return (
    <div className="tags">
      {data.tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tag
