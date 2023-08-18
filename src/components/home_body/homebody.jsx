import "./homebody.css"
import {useState} from "react";

const HomeBody = () => {
    const images = [
        {
            "url": "src/assets/image1.png",
            "info": "Fully furnished bed rooms."
        },
        {
            "url": "src/assets/image2.png",
            "info": "Location expected as perfect."
        },
        {
            "url": "src/assets/image3.png",
            "info": "Healthy and Tasty food."
        },
        {
            "url": "src/assets/image4.png",
            "info": "Laundry service on time."
        },
        {
            "url": "src/assets/image5.png",
            "info": "Peaceful environment for study."
        }
    ];

    let [index, setIndex] = useState(0);
    const imageSlider = () => {
        index === images.length - 1 ? setIndex(index = 0) : setIndex(index + 1);
    }
    // setInterval(imageSlider, 5000);

    return (
        <>
            <div className={"main_body"}>
                <img src={images[index].url} alt={images[index].info}/>
                <h3>{images[index].info}</h3>
                <div className={"bubble_container"}>
                    <div className={"bubble"}></div>
                    <div className={"bubble"}></div>
                    <div className={"bubble"}></div>
                    <div className={"bubble"}></div>
                    <div className={"bubble"}></div>
                </div>
            </div>
        </>
    );
}
export default HomeBody;