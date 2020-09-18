import React from 'react';


class DrRegister extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form action={"App.js"} method={"GET"}>
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
                        onChange={this.handleInputChange}
                        required/>
                </label>



                <br />
                <label>
                    Password:
                    <input
                        name="password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required/>
                </label>

                <br />
                <label>
                    Repeat Password:
                    <input
                        name="re-password"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required/>
                </label>

                <br />
                <label>
                    Fullname:
                    <input
                        name="fullname"
                        type="text"
                        value={this.state.Fullname}
                        onChange={this.handleInputChange}
                        required/>
                </label>

                <br />
                <label>
                    NPI:
                    <input
                        name="npi"
                        type="text"
                        value={this.state.npi}
                        onChange={this.handleInputChange}
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
                        onChange={this.handleInputChange}
                        required/>
                </label>

                <br />
                <label>
                    City:
                    <input
                        name="city"
                        type="text"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        required/>
                </label>

                <label>
                    State:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>

                </label>

                <label>
                    Zip Code:
                    <input
                        name="zip"
                        type="numbers"
                        value={this.state.zip}
                        pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$"
                        onChange={this.handleInputChange}
                        required/>
                </label>

                <br />
                <label>
                    Upload Profile Picture:
                    <br />
                    <input type="file" />
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
};

export default DrRegister;