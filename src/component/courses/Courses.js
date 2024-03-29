import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import './courses.css';
function Courses() {
    return (
        <div className="container">
            <div className="mohil">
                <img src={require(`./image/1.webp`)}></img>
            </div>
            <div className="tital">
                <span>CREATIVE COURSE</span>
                <h2>OFFERED COURSES</h2>
            </div>
            <div className="c-info">
                <div className="c-grid">
                    <div className="box1">
                        <div className="c-img"><img src={require(`./image/c1.webp`)}></img></div>
                        <div className="c-text">
                            <h2>Development Courses</h2>
                        </div>
                        <div className="d-flex c-icon">
                            <div className="c-star">
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStarHalf /></i>
                            </div>
                            <div className="c-button">
                                <button>know More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="c-img"><img src={require(`./image/c2.webp`)}></img></div>
                        <div className="c-text">
                            <h2>Design Courses</h2>
                        </div>
                        <div className="d-flex c-icon">
                            <div className="c-star">
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStarHalf /></i>
                            </div>
                            <div className="c-button">
                                <button>know More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="c-img"><img src={require(`./image/c3.webp`)}></img></div>
                        <div className="c-text">
                            <h2>Programming IT</h2>
                        </div>
                        <div className="d-flex c-icon">
                            <div className="c-star">
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStarHalf /></i>
                            </div>
                            <div className="c-button">
                                <button>know More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="c-img"><img src={require(`./image/c4.jpg`)}></img></div>
                        <div className="c-text">
                            <h2>Trendy Courses</h2>
                        </div>
                        <div className="d-flex c-icon">
                            <div className="c-star">
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStarHalf /></i>
                            </div>
                            <div className="c-button">
                                <button>know More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="c-img"><img src={require(`./image/c5.webp`)}></img></div>
                        <div className="c-text">
                            <h2>Civil-Mech. Engineering</h2>
                        </div>
                        <div className="d-flex c-icon">
                            <div className="c-star">
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStarHalf /></i>
                            </div>
                            <div className="c-button">
                                <button>know More!</button>
                            </div>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="c-img"><img src={require(`./image/c6.webp`)}></img></div>
                        <div className="c-text">
                            <h2>Business Development</h2>
                        </div>
                        <div className="d-flex c-icon">
                            <div className="c-star">
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStar /></i>
                                <i><IoStarHalf /></i>
                            </div>
                            <div className="c-button">
                                <button>know More!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="c-view"><button>View All Courses !</button></div>          
        </div>
    )

}
export default Courses;