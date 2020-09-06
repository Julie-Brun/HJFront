import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';

import Accept from '../img/accept.png';
import Accepted from '../img/accepted.png';
import Edit from '../img/edit.png';
import Bin from '../img/bin.png';

import '../css/ListItemForm.css';

const ListItemForm = (props) => {

    const schema = Yup.object({
        name: Yup.string().required('Obligatoire'),
        logo: Yup.mixed(),
        specializeAt: Yup.array().required('Veuillez sélectionner, au moins, une spécialité'),
        address: Yup.string().required('Obligatoire'),
        email: Yup.string().email("Format d'adresse email invalide").required('Obligatoire'),
        phone01: Yup.string().required('Obligatoire'),
        phone02: Yup.string(),
        description: Yup.string().required('Obligatoire')
    });

    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: props.data.name,
            specializeAt: props.data.specializeAt,
            address: props.data.address,
            email: props.data.email,
            phone01: props.data.phone01,
            phone02: props.data.phone02,
            description: props.data.description
        }
    });

    const isEditOk = () => {
        props.isEdit();
    }

    const [isLoading, setIsLoading] = useState(false);
    const [isData, setIsData] = useState('');
    const [isError, setIsError] = useState('');
    const [isEditing, setIsEditing] = useState(props.isEditing)
    
    const onSubmit = (data) => {
        console.log(data);
        const token = localStorage.getItem('token');
        const url = 'http://localhost:3050/hj2shel/shelters';

        const id = props.dataId;
        const name = data.name;
        const logo = data.logo.length === 0 ? props.data.logo : data.logo[0] ;
        const specializeAt = JSON.stringify(data.specializeAt);
        const address = data.address;
        const email = data.email;
        const phone01 = data.phone01;
        const phone02 = data.phone02;
        const description = data.description;

        fetch(url, {
            method: 'PUT',
            headers : {
                'Authorization': 'Bearer ' + token,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                name,
                logo,
                specializeAt,
                address,
                email,
                phone01,
                phone02,
                description
            })
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                setIsLoading(true);
                setIsData(result); 
                setIsEditing(false);
                isEditOk();
                console.log("Load:", isLoading, "Data:", isData);
                console.log(isEditing);
            },
            (error) => {
                setIsLoading(true);
                setIsError(error)
                console.log("Load:", isLoading, "error:", isError);
            }
        );
    };

    const local = "http://localhost:3050/";

    return(
        <li className='listAdminSheltersEdit'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='itemHeaderEdit'>
                    <input type='text' className='nameEdit' name='name' ref={register}/>
                    <div className='imgContainerEdit'>
                        <img src={props.isValid ? Accepted : Accept} alt='Icône Accept' onClick={props.isValidate}/>
                        <img src={Edit} alt='Icône Edit' onClick={props.isEdit}/>
                        <img src={Bin} alt='Icône Bin'/>
                    </div>
                </div>
                <div className='itemBodyEdit'>
                    <div className='imgEdit'>
                        <img src={local + props.data.logo} alt='Logo'/>
                        <input className='logo' name='logo' type='file' ref={register}/>
                    </div>
                    <ul className='infos'>
                        <li className='infoEdit'>
                            <p>Spécialisé dans :</p>
                            <div id='checkboxField' name='specializeAt'>
                                <label className='checkboxLabel'>Chiens
                                    <input className='checkboxInput' type='checkbox' name='specializeAt' value='Chiens' ref={register}/>
                                </label>
                                <label className='checkboxLabel'>Chats
                                    <input className='checkboxInput' type='checkbox' name='specializeAt' value='Chats' ref={register}/>
                                </label>
                                <label className='checkboxLabel'>Rongeurs
                                    <input className='checkboxInput' type='checkbox' name='specializeAt' value='Rongeurs' ref={register}/>
                                </label>
                                <label className='checkboxLabel'>Oiseaux
                                    <input className='checkboxInput' type='checkbox' name='specializeAt' value='Oiseaux' ref={register}/>
                                </label>
                                <label className='checkboxLabel'>Reptiles
                                    <input className='checkboxInput' type='checkbox' name='specializeAt' value='Reptiles' ref={register}/>
                                </label>
                                <label className='checkboxLabel'>Chevaux
                                    <input className='checkboxInput' type='checkbox' name='specializeAt' value='Chevaux' ref={register}/>
                                </label>
                                <label className='checkboxLabel'>Animaux de Ferme
                                    <input className='checkboxInput' type='checkbox' name='specializeAt' value='Animaux de Ferme' ref={register}/>
                                </label>
                                <label className='checkboxLabel'>Autres
                                    <input className='checkboxInput' type='checkbox' name='specializeAt' value='Autres' ref={register}/>
                                </label>
                            </div>
                            <ErrorMessage as='span' errors={errors} name='specializeAt'/>
                        </li>
                        <li className='infoEdit'>
                            <label id='addressLabel' htmlFor='address'>Adresse</label>
                            <input id='addressInput' name='address' placeholder='tatamonique@mail.fr' ref={register}/>
                            <ErrorMessage as='span' errors={errors} name='address' />
                        </li>
                        <li className='infoEdit'>
                            <label id='emailLabel' htmlFor='email'>Email</label>
                            <input id='emailInput' name='email' placeholder='tatamonique@mail.fr' ref={register}/>
                            <ErrorMessage as='span' errors={errors} name='email' />
                        </li>
                        <li className='infoEdit'>
                            <label id='phone01Label' htmlFor='phone01'>Téléphone 01</label>
                            <input id='phone01Input' name='phone01' placeholder='0123456789' ref={register}/>
                            <ErrorMessage as='span' errors={errors} name='phone01'/>
                        </li>
                        <li className='infoEdit'>
                            <label id='phone02Label' htmlFor='phone02'>Téléphone 02</label>
                            <input id='phone02Input' name='phone02' placeholder='0123456789' ref={register}/>
                        </li>
                    </ul>
                    <div className='descriptionContainer'>
                        <div id='description'>
                            <label id='descriptionLabel' htmlFor='description'>Description</label>
                            <textarea id='descriptionInput' name='description' placeholder='Un petit mot sur votre asso/refuge ?' ref={register}/>
                            <ErrorMessage as='span' errors={errors} name='description' />                           
                        </div>
                        <button type='submit'>Envoyer</button>
                    </div>
                </div>
            </form>
        </li>
    );
}

export default ListItemForm;