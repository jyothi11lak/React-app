import React from "react"
import "./secondstyle.css"
import axios from "axios";

export default class Regbasic extends React.Component {
    state = {
        user: {
            fName: "",
            lName: "",
            eId: "",
            mobileNum: "",
            gender: "",
            address: "",
            stat: "Tamil Nadu",
            country: [],
            selectedCountry: {
                id: 1,
                name:"Afghanistan"
            },
            draw: "Drawing",
            sing: "Singing",
            dance: "Dancing",
            sketch: "Sketching",
            other: "",
            boardX: "",
            markXp: "",
            boardXii: "",
            markXiip: "",
            degree: "",
            degreeP: ""
        }
    }

    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/hiiamrohit/Countries-States-Cities-database/master/countries.json")
            .then(resp => {
                console.log(resp.data.countries);
                let data = resp.data.countries;
                this.setState(prevState => ({
                    user: {
                        ...prevState.user, country: data
                    }
                }))
            })
    }

    handleClick() {
        //this.props.box(this.state.user);
        this.props.history.push("/Feed");
    }

    firstName(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, fName: updatedValue
            }
        }))
    }

    lastName(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, lName: updatedValue
            }
        }));
    }
    updateMail(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, eId: updatedValue
            }
        }));

    }
    updateMobile(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, mobileNum: updatedValue
            }
        }));
        //this.setState({...user, mobileNum: e.target.value})
    }
    updateAddress(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, address: updatedValue
            }
        }));
        //this.setState({...user, address: e.target.value})
    }

    handleGenderChange(e) {
        let updatedValue = e.target.value;
        alert(updatedValue);
        this.setState(prevState => ({
            user: {
                ...prevState.user, gender: updatedValue
            }
        }));
        //this.setState({...user, address: e.target.value})
    }

    handleOtherChange(e) {
        console.log("handleChange")
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, other: updatedValue
            }
        }));
        //this.setState({...user, other:e.target.value})
    }
    updateBoardx(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, boardX: updatedValue
            }
        }));

        //this.setState({...user, boardX:e.target.value})
    }
    updateMarkxp(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, markXp: updatedValue
            }
        }));
        // this.setState({...user, markXp:e.target.value})
    }
    updateBoardxii(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, boardXii: updatedValue
            }
        }));
        // this.setState({...user, boardXii:e.target.value})
    }
    updateMarkxiip(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, markXiip: updatedValue
            }
        }));
        //this.setState(...user, markXiip:e.target.value)
    }
    updateDegree(e) {
        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, degree: updatedValue
            }
        }));
        //this.setState(...user, degree:e.target.value)
    }
    updateDegreep(e) {

        let updatedValue = e.target.value;

        this.setState(prevState => ({
            user: {
                ...prevState.user, degreeP: updatedValue
            }
        }));
        //this.setState({...user, degreeP:e.target.value)
    }

    handleCountrySelection(e) {
        console.log(e.target.value);
    }

    render() {

        return (
            <div>


                <h1>Student Registration Form</h1>
                <table align="center" cellpadding="30" >
                    <tbody>
                        <tr>
                            <td>FIRST NAME</td>
                            <td><input type="text" value={this.state.user.fName} onChange={(e) => this.firstName(e)} />(max 30 characters a-z and A-Z)
</td>
                        </tr>


                        <tr>
                            <td>LAST NAME</td>
                            <td><input type="text" value={this.state.user.lName} onChange={(e) => this.lastName(e)} />
                                (max 30 characters a-z and A-Z)
</td>
                        </tr>

                        <tr>
                            <td>EMAIL ID</td>
                            <td><input value={this.state.user.eId} onChange={(e) => this.updateMail(e)} /></td>
                        </tr>


                        <tr>
                            <td>MOBILE NUMBER</td>
                            <td>
                                <input type="integer" value={this.state.user.mobileNum} onChange={(e) => this.updateMobile(e)} />
                                (10 digit number)
</td>
                        </tr>


                        <tr>
                            <td>GENDER</td>
                            <td>
                                <select name="Gender" onChange={(e) => this.handleGenderChange(e)}>
                                    <option value={"male"}>male</option>
                                    <option value={"female"}>female</option>
                                </select>

                            </td>
                        </tr>


                        <tr>
                            <td>ADDRESS <br /><br /><br /></td>
                            <td><textarea value={this.state.user.address} onChange={(e) => this.updateAddress(e)} /></td>
                        </tr>



                        <tr>
                            <td>STATE</td>
                            <td><input type="text" value={this.state.user.stat} />
                                (max 30 characters a-z and A-Z)
</td>
                        </tr>


                        <tr>
                            <td>COUNTRY</td>
                            <td> <select name="Country"  onChange={(e) => this.handleCountrySelection(e)}>
                            <option value=''>Select Country</option>
                                    {this.state.user.country.map((count)=>{
                                            return( <option value={count.id}>{count.name}</option>);
                                    })
                                   
                                    }
                                </select></td>
                        </tr>

                        <tr>
                            <td>HOBBIES <br /><br /><br /></td>

                            <td>
                                Drawing
<input type="checkbox" value={this.state.user.draw} />
                                Singing
<input type="checkbox" value={this.state.user.sing} />
                                Dancing
<input type="checkbox" value={this.state.user.dance} />
                                Sketching
<input type="checkbox" value={this.state.user.sketch} />
                                <br /><br></br>
                                Others
<input value={this.state.user.other} onChange={(e) => this.handleOtherChange(e)} />
                            </td>
                        </tr>


                        <tr>
                            <td>QUALIFICATION <br /><br /><br /><br /><br /><br /><br /></td>

                            <td>
                                <table>

                                    <tr>
                                        <td align="center"><b>Sl.No.</b></td>
                                        <td align="center"><b>Examination</b></td>
                                        <td align="center"><b>Board</b></td>
                                        <td align="center"><b>Percentage</b></td>
                                    </tr>
                                    <br></br>
                                    <tr>
                                        <td>1</td>
                                        <td>Class X</td>
                                        <td><input type="text" value={this.state.user.boardX} Onchange={(e) => this.updateBoardx(e)} /></td>
                                        <td><input type="text" value={this.state.user.markXp} Onchange={(e) => this.updateMarkxp(e)} /></td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Class XII</td>
                                        <td><input type="text" value={this.state.user.boardXii} Onchange={(e) => this.updateBoardxii(e)} /></td>
                                        <td><input type="text" value={this.state.user.markXiip} Onchange={(e) => this.updateMarkxiip(e)} /></td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Graduation</td>
                                        <td><input type="text" value={this.state.user.degree} Onchange={(e) => this.updateDegree(e)} /></td>
                                        <td><input type="text" value={this.state.user.degreeP} Onchange={(e) => this.updateDegreep(e)} /></td>
                                    </tr>


                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td align="center">(10 char max)</td>
                                        <td align="center">(upto 2 decimal)</td>
                                    </tr>
                                </table>

                            </td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={() => this.handleClick()} > Submit</button>
            </div>
        )

    }

}