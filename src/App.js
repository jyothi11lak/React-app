import React from "react"
import {myRoute} from "./Routes";
import {BrowserRouter} from "react-router-dom";
import reducers from "./redux/reducers";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

class App extends React.Component{
  
    state = {
      user: {}
      
    }
  
getUserdetails(userdetails){
  console.log(userdetails);
this.setState( {user: userdetails})

}

  render(){
  const xStore = createStore(reducers, applyMiddleware(thunk));
  
    return(
<div>
  <Provider store={xStore}>
  <BrowserRouter>
      {myRoute}
  </BrowserRouter>
  </Provider>
</div>

    )
  }

  
}
export default App