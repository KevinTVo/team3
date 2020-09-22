import React from 'react';


class DrRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repassword: '',
            firstName: '',
            lastName: '',
            npi: '',
            address: '',
            city: '',
            us_state: '',
            zip: '',
            picture: ''
        }

    }


    handleUsernameChange = (event) =>
    {
        this.setState(
            {
                username: event.target.value
            })
    }

    handlePasswordChange = (event) =>
    {
        this.setState(
            {
                password: event.target.value
            })
    }

    handleRePasswordChange = (event) =>
    {
        this.setState(
            {
                repassword: event.target.value
            })
    }

    handleFirstNameChange = (event) =>
    {
        this.setState(
            {
                firstName: event.target.value
            })
    }

    handleLastNameChange = (event) =>
    {
        this.setState(
            {
                lastName: event.target.value
            })
    }

    handleNpiChange = (event) =>
    {
        this.setState(
            {
                npi: event.target.value
            })
    }

    handleAddressChange = (event) =>
    {
        this.setState(
            {
                address: event.target.value
            })
    }

    handleCityChange = (event) =>
    {
        this.setState(
            {
                city: event.target.value
            })
    }

    handleStateChange = (event) =>
    {
        this.setState(
            {
                us_state: event.target.value
            }
        )
    }

    handleZipChange = (event) =>
    {
        this.setState(
            {
                zip: event.target.value
            }
        )
    }

    handlePictureChange = (event) =>
    {
        this.setState(
            {

            }
        )
    }

    handleSubmit = (event) =>
    {

        alert(`Test Variables
               --------------
               Username: ${this.state.username} 
               Password: ${this.state.password}
             Repassword: ${this.state.repassword}
              FirstName: ${this.state.firstName}
               LastName: ${this.state.lastName}
                    NPI: ${this.state.npi}
                Address: ${this.state.address}
                   City: ${this.state.city}
               US_State: ${this.state.us_state}
                    Zip: ${this.state.zip}
                Picture: ${this.state.picture}`
             );


        event.preventDefault();

    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit} method={"POST"}>
                <label>
                    <u>Registration for Physicians</u>
                    <br />
                </label>
                <br />
                <label>
                    Username:
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                        required/>
                </label>



                <br />
                <label>
                    Password:
                    <input
                        name="password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        required/>
                </label>

                <br />
                <label>
                    Repeat Password:
                    <input
                        name="repassword"
                        type="text"
                        value={this.state.repassword}
                        onChange={this.handleRePasswordChange}
                        required/>
                </label>

                <br />
                <label>
                    First Name:
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                        required/>
                </label>

                <br />

                <label>
                    Last Name:
                    <input
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                        required/>
                </label>

                <br />

                <label>
                    NPI:
                    <input
                        name="npi"
                        type="text"
                        value={this.state.npi}
                        onChange={this.handleNpiChange}
                        required/>
                </label>

                <br />
                <u>Clinic's Address:</u>
                <br />
                <label>
                    Street:
                    <input
                        name="address"
                        type="text"
                        value={this.state.address}
                        onChange={this.handleAddressChange}
                        required/>
                </label>

                <br />
                <label>
                    City:
                    <input
                        name="city"
                        type="text"
                        value={this.state.city}
                        onChange={this.handleCityChange}
                        required/>
                </label>

                <label>
                    State:
                    <select value={this.state.us_state} onChange={this.handleStateChange}>
                        <option us_state="AL">Alabama</option>
                        <option us_state="AK">Alaska</option>
                        <option us_state="AZ">Arizona</option>
                        <option us_state="AR">Arkansas</option>
                        <option us_state="CA">California</option>
                        <option us_state="CO">Colorado</option>
                        <option us_state="CT">Connecticut</option>
                        <option us_state="DE">Delaware</option>
                        <option us_state="DC">District Of Columbia</option>
                        <option us_state="FL">Florida</option>
                        <option us_state="GA">Georgia</option>
                        <option us_state="HI">Hawaii</option>
                        <option us_state="ID">Idaho</option>
                        <option us_state="IL">Illinois</option>
                        <option us_state="IN">Indiana</option>
                        <option us_state="IA">Iowa</option>
                        <option us_state="KS">Kansas</option>
                        <option us_state="KY">Kentucky</option>
                        <option us_state="LA">Louisiana</option>
                        <option us_state="ME">Maine</option>
                        <option us_state="MD">Maryland</option>
                        <option us_state="MA">Massachusetts</option>
                        <option us_state="MI">Michigan</option>
                        <option us_state="MN">Minnesota</option>
                        <option us_state="MS">Mississippi</option>
                        <option us_state="MO">Missouri</option>
                        <option us_state="MT">Montana</option>
                        <option us_state="NE">Nebraska</option>
                        <option us_state="NV">Nevada</option>
                        <option us_state="NH">New Hampshire</option>
                        <option us_state="NJ">New Jersey</option>
                        <option us_state="NM">New Mexico</option>
                        <option us_state="NY">New York</option>
                        <option us_state="NC">North Carolina</option>
                        <option us_state="ND">North Dakota</option>
                        <option us_state="OH">Ohio</option>
                        <option us_state="OK">Oklahoma</option>
                        <option us_state="OR">Oregon</option>
                        <option us_state="PA">Pennsylvania</option>
                        <option us_state="RI">Rhode Island</option>
                        <option us_state="SC">South Carolina</option>
                        <option us_state="SD">South Dakota</option>
                        <option us_state="TN">Tennessee</option>
                        <option us_state="TX">Texas</option>
                        <option us_state="UT">Utah</option>
                        <option us_state="VT">Vermont</option>
                        <option us_state="VA">Virginia</option>
                        <option us_state="WA">Washington</option>
                        <option us_state="WV">West Virginia</option>
                        <option us_state="WI">Wisconsin</option>
                        <option us_state="WY">Wyoming</option>
                    </select>

                </label>

                <label>
                    Zip Code:
                    <input
                        name="zip"
                        type="numbers"
                        value={this.state.zip}
                        onChange={this.handleZipChange}
                        required/>
                </label>

                <br />
                <label>
                    Upload Profile Picture:
                    <br />
                    <input type="file" value={this.state.picture} onChange={this.handlePictureChange}/>
                </label>
                <br />
                <br />
                <button type="submit">Register</button>
            </form>
        );
    }
};

export default DrRegister;