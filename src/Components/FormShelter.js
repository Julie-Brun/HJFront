import React from 'react';

import NoLogo from '../img/NoLogo.png'
import '../css/FormShelter.css';

class FormShelter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            imagePreview: NoLogo,
            logo: '',
            specializeAt: [],
            address:  {
                street: '',
                postalCode: '',
                city: '',
                land: ''
            },
            email: '',
            phone01: '',
            phone02: '',
            description: '',
            data: [],
            isLoaded: false,
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.isInArray = this.isInArray.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.previewLogo = this.previewLogo.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const input = e.target;
        const name = input.name;
        const value = input.value;

        this.setState({
            [name]: value
        });
    };

    isInArray(item) {
        return this.state.specializeAt.some(j => item === j)
    }

    addItem(item, state) {
        return [...state.specializeAt, item]
    };

    removeItem(item, state) {
        return state.specializeAt.filter(j => item !== j);
    };

    handleCheckbox(e) {
        const input = e.target;
        const name = input.name;

        this.setState(prevState =>{
            const updatedArray = this.isInArray(name) ? this.removeItem(name, prevState) : this.addItem(name, prevState);
            return {
                specializeAt: updatedArray
            }
        });   
    }

    previewLogo(e) {
        let reader = new FileReader();
        let file = e.target.files[0];

        if (file) {
            reader.onloadend = () => {
                this.setState({
                    logo: file,
                    imagePreview: reader.result
                });
            }
           reader.readAsDataURL(file);
        } else {
            return file;
        }
    }

    handleAddress(e) {
        const input = e.target;
        const name = input.name;
        const value = input.value;

        this.setState(prevState => ({
            address : {
                ...prevState.address,
                [name]: value
            }
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        const {street, postalCode, city, land} = this.state.address;
        const address = `${street}, ${postalCode}, ${city}, ${land}`;

        const form = new FormData();
        form.append("name", this.state.name);
        form.append("logo", this.state.logo);
        form.append("specializeAt", this.state.specializeAt);
        form.append("address", address);
        form.append("email", this.state.email);
        form.append("phone01", this.state.phone01);
        form.append("phone02", this.state.phone02);
        form.append("description", this.state.description);

        // const data = {
        //     name: this.state.name,
        //     logo: this.state.logo,
        //     specializeAt: this.state.specializeAt,
        //     address: address,
        //     email: this.state.email,
        //     phone01: this.state.phone01,
        //     phone02: this.state.phone02,
        //     description: this.state.description
        // };
        
        const url = 'http://localhost:3050/home/trouver/ajouter';
        
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: form,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                  isLoaded: true,
                  data: result
                });                
                console.log("Load:", this.state.isLoaded, "Data:", this.state.data);
            },
            (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
                console.log("Load:", this.state.isLoaded, "error:", this.state.error);
            }
        );

        console.log("Data:", this.state.data, "isLoaded:", this.state.isLoaded, "Error:", this.state.error);

    };

    render() {

        console.log(this.state.logo);
        
        let imagePreviewUrl = this.state.imagePreview;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt='Logo' />);
        } else {
            $imagePreview = (<img src={NoLogo} alt='Pas de Logo'/>);
        }
        
        return(
            <div id='form'>
                <h2>Ajout d'un Refuge</h2>
                <form id='formAddShelter' onSubmit={this.handleSubmit}>
                    <label className='name'>Nom de l'Association/du Refuge
                        <input className='name' type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    {$imagePreview}
                    <label id='choiceField' className='logo'>Logo/Image
                        <input className='logo' type='file' name='logo' onChange={this.previewLogo}/>
                    </label>
                    <p>Spécialisé dans :</p>
                    <div id='checkboxField'>
                        <label className='check chien'>Chiens
                            <input className='check chien' type='checkbox' name='Chiens' value={this.state.chiens} onChange={this.handleCheckbox}/>
                        </label>
                        <label className='check chats'>Chats
                            <input className='check chats' type='checkbox' name='Chats' value={this.state.chats} onChange={this.handleCheckbox}/>
                        </label>
                        <label className='check rongeurs'>Rongeurs
                            <input className='check rongeurs' type='checkbox' name='Rongeurs' value={this.state.rongeurs} onChange={this.handleCheckbox}/>
                        </label>
                        <label className='check reptiles'>Reptiles
                            <input className='check reptiles' type='checkbox' name='Reptiles' value={this.state.reptiles} onChange={this.handleCheckbox}/>
                        </label>
                        <label className='check chevaux'>Chevaux
                            <input className='check chevaux' type='checkbox' name='Chevaux' value={this.state.chevaux} onChange={this.handleCheckbox}/>
                        </label>
                        <label className='check animauxFerme'>Animaux de Ferme
                            <input className='check animauxFerme' type='checkbox' name='Animaux de ferme' value={this.state.animauxFerme} onChange={this.handleCheckbox}/>
                        </label>
                        <label className='check autres'>Autres
                            <input className='check autres' type='checkbox' name='Autres' value={this.state.autres} onChange={this.handleCheckbox}/>
                        </label>
                    </div>
                    
                    <label className='street'>Rue
                        <input className='street' type='text' name='street' value={this.state.address.street} onChange={this.handleAddress}/>
                    </label>
                    <label className='postalCode'>Code Postal
                        <input className='postalCode' type='text' name='postalCode' value={this.state.address.postalCode} onChange={this.handleAddress}/>
                    </label>                        
                    <label className='city'>Ville
                        <input className='city' type='text' name='city' value={this.state.address.city} onChange={this.handleAddress}/>
                    </label>
                    <label className='land'>Pays
                        <input className='land' type='text' name='land' value={this.state.address.land} onChange={this.handleAddress}/>
                    </label>
                    <label className='email'>Email
                        <input className='email' type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <label className='phone01'>Téléphone 01
                        <input className='phone01' type='text' name='phone01' value={this.state.phone01} onChange={this.handleChange}/>
                    </label>
                    <label className='phone02'>Téléphone 02
                        <input className='phone02' type='text' name='phone02'value={this.state.phone02} onChange={this.handleChange}/>
                    </label>
                    <label id='description' className='description'>Description
                        <textarea className='description' type='text' name='description' form='formAddShelter' value={this.state.description} onChange={this.handleChange}/>
                    </label>
                </form>
                <button type='submit' form='formAddShelter'>Envoyer</button>
            </div>
        );
    };
};

export default FormShelter;