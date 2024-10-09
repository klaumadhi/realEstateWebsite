import { useState } from "react"
import "./slider.scss"

export default function Slider({images}) {
    const [imageIndex, setImageIndex] = useState(null)

    const changeSlider = (direction) => {
        if(direction ==="left") {
            if(imageIndex === 0){
                setImageIndex(images.length - 1)
            }else{
                setImageIndex(imageIndex-1)
            }
        }
        else{
            if(imageIndex === images.length-1){
                setImageIndex(0)
            }else{
                setImageIndex(imageIndex+1)
            }
        }
    }
  return (
    <div className="slider">
        {imageIndex !==null && <div className="fullSlider">
            <div className="arrow">
                <img src="/arrow.png" alt="" onClick={()=> changeSlider("left")}/>
            </div>
            <div className="imageContainer">
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className="arrow">
                <img src="/arrow.png" className="right" alt="" onClick={()=> changeSlider("right")}/>
            </div>
            <div className="close" onClick={()=> setImageIndex(null)}>X</div>
        </div>}
        <div className="bigImage">
            <img src={images[0]} alt=""  onClick={()=> setImageIndex(0)}/>
        </div>
        <div className="smallImages">
            {images.slice(1).map((image,index) => (
                <img key={index} src={image} alt="" onClick={()=> setImageIndex(index+1)}/>
            ))}
        </div>
    </div>
    )
}
