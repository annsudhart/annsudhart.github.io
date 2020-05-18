import React, {useState} from 'react';
import './Carousel.scss';
function Carousel(props) {
    const [imageIndex, setImageIndex] = useState(0);
    const flipLeft = () => {
        setImageIndex((imageIndex - 1 + props.imgList.length) % props.imgList.length);
        console.log(imageIndex);
    }
    
    const flipRight = () => {
        setImageIndex((imageIndex + 1) % props.imgList.length);
        console.log(imageIndex);
    }

    return (
        <div className="carousel">
            <div className="arrow" onClick={flipLeft}>◀</div>
            <img src={props.imgList[imageIndex]}/>
            <div className="arrow" onClick={flipRight}>▶</div>
        </div>
    )
}

export default Carousel;