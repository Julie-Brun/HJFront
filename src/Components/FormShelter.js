import React from 'react';

import '../css/FormShelter.css';

class FormShelter extends React.Component {
    render() {
        return(
            <div id='form'>
                <h2>Ajout d'un Refuge</h2>
                <form>
                    <label for='name'>Nom de l'Association/du Refuge</label>
                    <input type='text' name='name'></input>
                    
                    <label for='address'>Adresse</label>
                    <input type='text' name='address'></input>
                    
                    <label for='postalCode'>Code Postal</label>
                    <input type='text' name='postalCode'></input>
                    
                    <label for='city'>Ville</label>
                    <input type='text' name='city'></input>
                    
                    <label for='email'>Email</label>
                    <input type='text' name='email'></input>
                    
                    <label for='phone01'>Téléphone 01</label>
                    <input type='text' name='phone01'></input>
                    
                    <label for='phone02'>Téléphone 02</label>
                    <input type='text' name='phone02'></input>
                    
                    <label for='description'>Description</label>
                    <input type='text' name='description'></input>
                    
                    <label for='image'>Logo/Image</label>
                    <input type='text' name='image'></input>
                    
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
        );
    };
};

export default FormShelter;