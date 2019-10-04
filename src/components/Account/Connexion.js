import React, { Component } from 'react';

export default class Connexion extends Component {
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
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    componentWillMount() {
        document.title = 'Connexion'
    };

    render() {
        return (
            <div class="form-style-5">
                <h1 className="page-title">Connexion</h1>
                <form>
                    <fieldset>
                        <input type="text" name="field1" placeholder="Login"/>
                        <input type="password" name="field2" placeholder="Mot de passe"/>
                    </fieldset>
                    <input type="submit" value="Connexion" />
                </form>
            </div>
        )
    }
}
