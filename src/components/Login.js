
import { useEffect, useState} from "react";


const Login = (props) => {

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
        <div className="login">
            <form action="http://localhost:3000/login/oauth2/facebook">
            <input type="submit" value="Signin with Facebook" />
        </form>
        </div>
        
    );
};

export default Login;