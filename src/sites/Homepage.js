
import { useEffect, useState} from "react";
import Login from "../components/Login";

const Homepage = (props) => {

//extract JWT from cookie after login
    useEffect(() => {
      
        const getCookie = (cookieName) => {
            let cookie = {};
            document.cookie.split(';').forEach(function(el) {
                let [key,value] = el.split('=');
                cookie[key.trim()] = value;
            })
            return cookie[cookieName];
        }
        const jwt = getCookie('jwt');
        console.log(getCookie('jwt'));
    }, []);

    return (
        <div className="homepage">
            
            <Login />
            
        </div>
        
    );
};

export default Homepage;