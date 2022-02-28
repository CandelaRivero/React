import React from 'react' 
import './styles/HeroSlide.css'

const HeroSlide = ({slide, changeSlide, arrayIndex}) => {
    return (
        <section className="heroslide">
            <div className="bg">
                <img
                className='img'
                src={slide.img}
                alt='Imagen fonde del hero'
                />
            </div>
            <div className="caption">
                <h2 className='h2'>{slide.title}</h2>
                <p className='p'>{slide.subtitle}</p>
            </div>
            <ul className="controls">
                {arrayIndex.map ( id=> {
                    return (
                        <li
                        className={`controlsitem ${ slide.id === id ? 'controlselected': null }`}
                            key={id}
                            onClick={()=> {changeSlide(id - 1)}}
                        ></li>
                    )}
                )}
            </ul>
        </section>
    )
}

export default HeroSlide