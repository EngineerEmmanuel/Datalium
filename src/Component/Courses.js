import Footer from "./Footer";
import data from "./CoursesData";
import { useState } from "react";

const Courses = () => {
    const [coursesMenu, setCoursesMenu]=useState(data);
    const checkCourse=(courseName)=>{
        const theOne = data.filter((one)=> one.course===courseName)
        setCoursesMenu(theOne)

    }
    // to return all the available courses
    const allCourses=(all)=>{
        if(all==="all"){
            setCoursesMenu(data)
        }
    }
    return ( 
        <section className="courses-main ">
            <h1>Here Are Some Of The Awesome Courses  You Will Learn</h1>
            <div className="courses-btn-grid-con">
                <div className="courses-btns">
                <button onClick={()=>checkCourse("HTML")}>HTML</button>
            <button onClick={()=>checkCourse("Javascript")}>Javascript</button>
            <button onClick={()=>checkCourse("React")}>React js</button>
            <button onClick={()=>checkCourse("UI/UX design")}>UI/UX design</button>
            <button onClick={()=>checkCourse("Product Management")}>Product management</button>
            <button onClick={()=>checkCourse("Python")}>Python</button>
            <button onClick={()=>checkCourse("C")}>C</button>
            <button onClick={()=>checkCourse("Angular")}>Angular js</button>
            <button onClick={()=>checkCourse("Java")}>Java</button>
            <button onClick={()=>allCourses("all")}>All courses</button>
                </div>
           
            </div>
            


            {coursesMenu.map((course)=>{
                return(
                    <div className="first-course" key={course.id}>
                        <div className="first-course-display">
                            <iframe src={course.video}  title={course.by} allowFullScreen  ></iframe>
                            <p>{course.course}</p>
                            <p className="owner">{course.by}</p>
                        </div>
                        <div className="first-course-text">
                        <p> {course.why}</p>
                        <ul>
                            <li> <span><i class="fa-solid fa-check"></i></span>It`s from a professional.</li>
                            <li><span><i class="fa-solid fa-check"></i></span>Don`t rush it, practice it.</li>
                            <li><span><i class="fa-solid fa-check"></i></span>It`s free don`t worry.</li>
                            <li><span><i class="fa-solid fa-check"></i></span>Try to share it with your friends.</li>
                        </ul>
                    </div>
                    </div>
                )
            })}
            <Footer/>
        </section>
     );
}
 
export default Courses;