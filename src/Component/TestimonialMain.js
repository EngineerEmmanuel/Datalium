import { useState } from "react";
import students from "./TestimonialData";
const TestimonialMain = () => {
    
    const [index, setIndex] = useState(0);
    const {name, topic,qoute,pic, location } = students[index];

    const checkTheNumber = (number)=>{
        if(number > students.length-1){
            return 0;
        }
        if(number < 0){
            return students.length-1;
        }

        return number;
    }
    const nextOne = ()=>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkTheNumber(newIndex) ;
        })
    }
    const prevOne =()=>{
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkTheNumber(newIndex);
        })
    }

    return ( 
        <section className="review-main">
            <h2>Testimonials</h2>
            <div className="review-gen-con">
            <div className="review-con">
                <h2>{topic}</h2>
                <p>{qoute}</p>
                <div className="review-pic-name-location-con">
                    <div className="review-pic-con">
                        <img src={pic} alt={name} />
                    </div>
                    <p>{name} <br/> <span>{location}</span></p>
                </div>
            </div>
            <button onClick={nextOne} className="next-btn"><i class="fa-solid fa-arrow-right"></i></button>
            <button onClick={prevOne} className="prev-btn"><i class="fa-solid fa-arrow-left"></i></button>
            </div>
            
        </section>
     );
}
 
export default TestimonialMain;