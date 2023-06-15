import {Link} from "react-router-dom";
import TestimonialMain from "./TestimonialMain";
import Footer from "./Footer";

const Home = () => {
    return ( 
        <div className="home-section">

       
        <section className="hero-section">
                <div className="hero-section-item-con container">
                    <div className="hero-section-text">
                        <h1>Learn Digital Tech Skills <br/>  Today   For Free</h1>
                        <p>Discover, learn, and excel in today's digital age.Enhance your skills with curated courses, engage with experts, and unlock your potential.</p>
                        <div className="hero-section-btn">
                            <button><Link to="/Courses">Get Started</Link></button>
                        </div>
                    </div>
                    
                    <div className="hero-section-image">
                        <div className="active-students">
                            <h1>2k</h1>
                            <p>Active</p>
                            <p>Students</p>
                        </div>
                    </div>
                </div>
        </section>

        <div className="our-courses container">
            <h2>Our Courses</h2>
            <div className="small-courses-section">
                <div className="small-course-card">
                    <div className="padding-cards-con">
                        <img src="https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg?auto=compress&cs=tinysrgb&w=600" alt="  Someone learning digital marketing" />
                        <p>Product Management</p>
                        <div className="course-card-btn">
                            <p>Fee: free</p>
                            <button><Link to="/Courses">Enroll</Link></button>
                        </div>
                    </div>
                </div>

                <div className="small-course-card">
                    <div className="padding-cards-con">
                        <img src="https://images.pexels.com/photos/4012966/pexels-photo-4012966.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" Someone learning sales" />
                        <p>Back-end development</p>
                        <div className="course-card-btn">
                            <p>Fee: free</p>
                            <button><Link to="/Courses">Enroll</Link></button>
                        </div>
                    </div>
                </div>
                <div className="small-course-card">
                    <div className="padding-cards-con">
                        <img src="https://images.pexels.com/photos/7310202/pexels-photo-7310202.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" Someone learning digital branding" />
                        <p>Front-end development</p>
                        <div className="course-card-btn">
                            <p>Fee: free</p>
                            <button> <Link to="/Courses">Enroll</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-card-learn-more-btn-con">
                <button><Link to="/Courses">See more</Link></button>
            </div>
        </div>

        
        <div className="why-us-gen-con">
        <div className="why-us-section ">
            <div className="why-us-image">
                <h2>Why People Choose Us <br/>Over Other Platforms </h2>
                <div className="why-us-image-bg">
                    <img src="https://images.pexels.com/photos/5940713/pexels-photo-5940713.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>

            </div>
            <div className="why-us-text">
            <p>You will benefit alot if you use our platform to learn. Our students all doing doing well because of these benefits.</p>
            <div className="why-us-grid-con">
                <div className="why-us-grid-elements"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="icons" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
           
                <h3>It`s free</h3>
                <p>We have made all of courses free, so you have nothing to worry about.</p>
                </div>
                <div className="why-us-grid-elements">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>

                    <h3>Amazing courses </h3>
                    <p>All of our courses are taught by professionals who have years of experience</p>
                    </div>
                    <div className="why-us-grid-elements">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                    </svg>

                    <h3>Awesome community</h3>
                    <p>You will be opportuned to have access to a helpful community that will guid you</p>
                    </div>
                    <div className="why-us-grid-elements">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>

                    <h3>Jobs</h3>
                    <p>We will help you to get a well paying jobs when you done</p>
                    </div>

            </div>
            </div>


        </div>
        </div>
        
        <TestimonialMain/>
        <Footer/>
        </div>
     );
}
 
export default Home;