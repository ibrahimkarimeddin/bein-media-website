import React from 'react'
import ImageField from '../utils/Image'

const HeroSectionSwiper = () => {
  return (
    <div className='HeroSectionSwiper'>
        <picture>
      <source media="(max-width: 800px)" srcSet="img/heroSectionMobile.webp" />
      <img src="img/heroSection.webp" alt="Flowers" className='heroSection' width="100%" height="600"  />
    </picture>
        <h1>
        Find Healthy and favourite foods Near you
        </h1>
    </div>
  )
}

export default HeroSectionSwiper