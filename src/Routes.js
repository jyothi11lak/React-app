import {Switch, Route} from "react-router-dom";
import Information from "./firstpage";
import Regbasic from "./secondpage";
import Display from "./thirdpage";
import React from "react";

export const  myRoute = (
    <Switch>
        <Route path ="/" exact  component={Information} />
        <Route path ="/Register"  component={Regbasic} />
        <Route path ="/Feed"  component={Display} />
    </Switch>
);