import React, { Component } from 'react';

export default class Inscription extends Component {
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
        document.title = 'Inscription'
    };

    render() {
        return (
            <div class="form-style-5">
                <h1 className="page-title">Inscription</h1>
                <form>
                    <fieldset>
                        <legend><span class="number">1</span> Compte</legend>
                        <input type="text" name="field1" placeholder="Login"/>
                        <input type="password" name="fieldPwdLeft" placeholder="Mot de passe"/>
                        <input type="password" name="fieldPwdRight" placeholder="Confirmation"/>
                    </fieldset>
                    <fieldset>
                        <legend><span class="number">2</span> Identité</legend>
                        <input type="text" name="field1" placeholder="Votre nom"/>
                        <input type="text" name="field2" placeholder="Votre prénom"/>
                        <input type="email" name="field3" placeholder="Votre Email"/>
                        <select id="gender" name="field4">
                            <option value="" disabled selected>Sexe</option>
                            <option value="male">Homme</option>
                            <option value="female">Femme</option>
                            <option value="none">Non précisé</option>
                        </select>      
                    </fieldset>
                    <fieldset>
                        <legend><span class="number">3</span> Adresse</legend>
                        <input type="number" name="fieldAddressLeft" placeholder="Numéro de rue"/>
                        <input type="text" name="fieldAddressRight" placeholder="Nom de rue"/>
                        <input type="text" name="field6" placeholder="Complément d'adresse"/>
                        <input type="number" name="fieldAddressLeft" placeholder="Code postal" max="99999"/>
                        <input type="text" name="fieldAddressRight" placeholder="Ville"/>
                    </fieldset>
                    <input type="submit" value="Valider" />
                </form>
            </div>
        )
    }
}
