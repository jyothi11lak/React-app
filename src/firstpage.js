import React from 'react'
import './firststyle.css'

export default class Information extends React.Component{
    handleRegistration() {
        this.props.history.push("/Register");
    }

render()
{
return(
<div>
<div className =  "Info-header"> Welcome to Learn React Basics</div>  
<div className = "Info-body">
    <p>
This Application is created to learn the basics of React. </p>
       <p> Why should we delay!</p>
        <p>Let's get started with a Demo Application. Happy Learning !!!!
    </p>
</div>
<div className = "Info-footer">
    <button onClick= {() => this.handleRegistration()}>Register</button><p> Click here to Start UP!!!</p>

</div>


</div>

)

}


}




