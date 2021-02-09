import React,{useState,useEffect} from "react";
import {Redirect} from 'react-router-dom';

const PremiumContent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const Logout = () => {
        localStorage.removeItem('login');
        setIsLoggedIn(false);
    }

    useEffect(()=>{
        let login = localStorage.getItem('login');
        // console.log(login);
        if(login === 'true'){
          console.log('isLoggedIn');
          //  isLoggedIn = true;
          setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
      },[isLoggedIn])
    if(isLoggedIn === false){
        return (
            <Redirect to={"/login"} />
        )
    }
    return (
        <div>
            <h1>PremiumContent</h1>
            <button onClick={Logout}>Logout</button>
        </div>
    );
};

export default PremiumContent;