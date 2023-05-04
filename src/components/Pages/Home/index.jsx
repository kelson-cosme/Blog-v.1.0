import Navbar from "../../header/Navbar";
import { Link } from "react-router-dom";

import "./style.css"

export default function Home(){
    return(
        <div>
            <Navbar/>

            <div className="home-corpo">
                
                <Link to={"/vermais"}>
                    <div className="home-card">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="" />
                    
                        <h2>Titulo</h2>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias eaque sapiente, sint repellat earum laudantium unde esse tempore, quas amet qui maiores ipsum delectus, aliquam a aperiam consectetur! Ullam, officiis.</p>
                    </div>      
                </Link>
                
            </div>
        </div>
    );
}