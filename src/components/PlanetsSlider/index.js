import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <h1 className="planets-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachData => (
          <PlanetItem planetsListData={eachData} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
