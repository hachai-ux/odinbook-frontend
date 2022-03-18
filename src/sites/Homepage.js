
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

    //test protected route
    useEffect(() => {
        //get user
        const getUser = () => {
             
            console.log(localStorage.getItem('jwt'));

             fetch(`http://localhost:3000/users/profile`, {
                 mode: 'cors',
                 headers: { Authorization: "Bearer " + localStorage.getItem('jwt') }
       
             })
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    console.log(response);
            
                   
                
                })
                .catch(function (error) {
                    console.log(error);
                });
      
        
        };
        getUser();
    }, []);



    return (
        <div className="homepage">
            
            <Login />
            
        </div>
        
    );
};

export default Homepage;