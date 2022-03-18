
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

        const deleteCookie = (name) => {
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        };
        

        const jwt = getCookie('jwt');
        console.log(jwt);
        localStorage.setItem('jwt', jwt);
        deleteCookie('jwt');
       
    }, []);

    return (
        <div className="homepage">
            
            <Login />
            
        </div>
        
    );
};

export default Homepage;