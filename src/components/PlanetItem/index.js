import './index.css'

const PlanetItem = props => {
  const {planetsListData} = props
  const {name, imageUrl, description} = planetsListData

  return (
    <div className="planet-item-container">
      <div className="planet-section-container">
        <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
        <h1 className="planet-name">{name}</h1>
        <p className="planet-description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
