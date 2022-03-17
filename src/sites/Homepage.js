
import { useEffect, useState} from "react";
import Login from "../components/Login";

const Homepage = (props) => {

//extract JWT from cookie after login
    useEffect(() => {
        console.log(document.cookie);
    }, []);

    return (
        <div className="homepage">
            
            <Login />
            
        </div>
        
    );
};

export default Homepage;