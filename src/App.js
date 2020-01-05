import React from "react"
import Information from "./firstpage"
import Regbasic from "./secondpage"
import Display from "./thirdpage"
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
  
  <Regbasic box = {(user)=>this.getUserdetails(user)}/>
  
</div>

    )
  }

  
}
export default App