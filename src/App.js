import React from "react"
import {myRoute} from "./Routes";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component{
  
    state = {
      user: {}
      
    }
  
getUserdetails(userdetails){
  console.log(userdetails);
this.setState( {user: userdetails})

}

  render()
  {
    return(
<div>
  
  <BrowserRouter>
      {myRoute}
  </BrowserRouter>
  
</div>

    )
  }

  
}
export default App