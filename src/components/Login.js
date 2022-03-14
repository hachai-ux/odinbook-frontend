
import { useEffect, useState} from "react";


const Login = (props) => {



    return (
        <div className="login">
            <form action="http://localhost:3000/login/oauth2/facebook">
            <input type="submit" value="Signin with Facebook" />
        </form>
        </div>
        
    );
};

export default Login;