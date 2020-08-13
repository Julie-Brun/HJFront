import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';

import ImagePreview from './ImagePreview';
import AddressField from './AddressField';
import '../css/FormShelter.css';

const FormShelter = () => {
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

    const { register, errors, handleSubmit, control } = useForm({
        resolver: yupResolver(schema)
    });

    const[isLoaded, setIsLoaded] = useState(false);
    const[isData, setIsData] = useState('');
    const[isError, setIsError] = useState('');
    
    const onSubmit = async(data) => { 
        console.log(data);

        const form = new FormData();
        form.append("name", data.name);
        form.append("logo", data.logo[0]);
        form.append("specializeAt", data.specializeAt);
        form.append("address", data.address);
        form.append("email", data.email);
        form.append("phone01", data.phone01);
        form.append("phone02", data.phone02);
        form.append("description", data.description);

        const url = 'http://localhost:3050/home/trouver/ajouter';

        const res = await fetch(url, {
            method: 'POST',
            body: form
        })
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setIsData(result);                
                console.log("Load:", isLoaded, "Data:", isData);
            },
            (error) => {
                setIsLoaded(true);
                setIsError(error)
                console.log("Load:", isLoaded, "error:", isError);
            }
        );
    };

    const [imagePreview, setImagePreview] = useState('');

    const previewLogo = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);

        if (file) {
            reader.onloadend = () => {
                setImagePreview(reader.result)
            }
           reader.readAsDataURL(file);
        } else {
            return file;
        }
    };

    return(
        <div id='form'>
            <h2>Ajout d'un Refuge</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label id='nameLabel' htmlFor='name'>Nom de l'Association/du Refuge</label>
                <input id='nameInput' name='name' placeholder='Refuge de Tata Monique' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='name' />

                <ImagePreview imagePreview={imagePreview}/>
                <label id='logoLabel' htmlFor='logo'>Logo/Image</label>
                <input id='logoInput' name='logo' type='file' ref={register} onChange={(event) => {previewLogo(event);}} />

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
                <ErrorMessage as='span' errors={errors} name='specializeAt' />

                <Controller as={<AddressField/>} id='addressField' name='address' control={control} defaultValue=''/>
                <ErrorMessage as='span' errors={errors} name='address'/>

                <label id='emailLabel' htmlFor='email'>Email</label>
                <input id='emailInput' name='email' placeholder='tatamonique@mail.fr' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='email' />

                <label id='phone01Label' htmlFor='phone01'>Téléphone 01</label>
                <input id='phone01Input' name='phone01' placeholder='0123456789' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='phone01'/>

                <label id='phone02Label' htmlFor='phone02'>Téléphone 02</label>
                <input id='phone02Input' name='phone02' placeholder='0123456789' ref={register}/>

                <div id='description'>
                    <label id='descriptionLabel' htmlFor='description'>Description</label>
                    <textarea id='descriptionInput' name='description' placeholder='Un petit mot sur votre asso/refuge ?' ref={register}/>
                    <ErrorMessage as='span' errors={errors} name='description' />                           
                </div>
                <button type='submit'>Envoyer</button>
            </form>
        </div>
    )
}

export default FormShelter;