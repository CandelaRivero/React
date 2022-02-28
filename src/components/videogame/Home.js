import { useState } from "react"
import HeroSlide from './HeroSlide'



    const HeroContainer = () => {
        const slides = [
            {
                title: 'Fly',
                subtitle:'Learn to fly and enjoy the skies',
                img:'https://res.cloudinary.com/dvyoczetf/image/upload/v1646079884/fly1_dvuitl.jpg',
                id:1
            },
            {
                title: 'Train',
                subtitle:'Get all your certificates here',
                img:'https://res.cloudinary.com/dvyoczetf/image/upload/v1646082454/fly2_k4jqbj.jpg',
                id:2
            },
            {
                title: 'Work',
                subtitle:'Make a living of flying',
                img:'https://res.cloudinary.com/dvyoczetf/image/upload/v1646082522/fly3_ywd0wt.jpg',
                id:3
            }

        ];
        const [index, setIndex]= useState(0);

        const changeSlide = (i) => {
            setIndex (i);
        }

        return <HeroSlide
        slide={slides[index]}
        changeSlide={changeSlide}
        arrayIndex={[slides.map(el=>el.id)]}/>;
    }
    export default HeroContainer

    
  
