import React from "react"
import "./thirdstyle.css"
import Flexbox from "flexbox-react";

export default function Display(props) {

    return (
        <Flexbox flexDirection="column">
            <Flexbox style={{ border: "red .5px solid", backgroundColor: "black" }}>Welcome to React Learning</Flexbox>
            <Flexbox flexDirection="column">
                <Flexbox>Bar</Flexbox>
                <Flexbox>
                    <Flexbox flexGrow="3">
                        Run the React Application
    If you followed the two commands above, you are ready to run your first real React application!
    
    Run this command to move to the myfirstreact directory:
    
    C:\Users\Your Name>cd myfirstreact
    Run this command to execute the React application myfirstreact:
    
    C:\Users\Your Name\myfirstreact>npm start
    A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.
    
                    </Flexbox>
                    <Flexbox >Side Nav</Flexbox>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
}