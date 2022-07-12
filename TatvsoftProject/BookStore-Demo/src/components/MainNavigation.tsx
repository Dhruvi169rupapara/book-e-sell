import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../pages/register";
import { RoutePaths } from "../utils/enum";

//component lazy loading
// const Home = lazy(() => import("../pages/register/index"));
// const Login = lazy(() => import("../pages/login/index"));
// const Register = lazy(() => import("../pages/register/index"));

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Register}/>
    </Switch>
  );
};

export default AppRoutes;
