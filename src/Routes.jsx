import React,{useEffect,useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PremiumContent from "./Pages/PremiumContent/PremiumContent";
import Main from './Main';

const Routes = () => {
  // let isLoggedIn = false;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    let login = localStorage.getItem('login');
    // console.log(login);
    if(login === 'true'){
      console.log('isLoggedIn');
      //  isLoggedIn = true;
       setIsLoggedIn(true);
    }
  },[])

  // console.log(isLoggedIn);

  // if(isLoggedIn === true){
  //   return (
  //       <Redirect to={"/premium-content"} />
  //   )
  // }

  return (
    <Switch>
      {console.log(isLoggedIn)}
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/Services" component={Services} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/premium-content">
        {isLoggedIn ? <PremiumContent /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};

export default Routes;