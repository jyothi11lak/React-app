import React from "react"
import "./thirdstyle.css"
import Flexbox from "flexbox-react";
import { connect } from "react-redux";
class Display extends React.Component {

    render() {
        const {user} = this.props;
        //const user = this.props.user;
    return (
        <Flexbox flexDirection="column">
            <Flexbox style={{ border: "red .5px solid", backgroundColor: "black" }}>Welcome to React Learning</Flexbox>
            <Flexbox flexDirection="column">
                <Flexbox>Bar</Flexbox>
                <Flexbox>
                    <Flexbox flexGrow="3">
                        {Object.keys(user).map(x => {
                            return (<p>{x} ":" {user[x]}</p>)
                        })}
                    </Flexbox>
                    <Flexbox >Side Nav</Flexbox>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
}
}

const mapStateToProps = state => ({
    user: state.userStore.myData
});

export default connect(mapStateToProps) (Display);