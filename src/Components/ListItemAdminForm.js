import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';

import PopUpPassword from './PopUpPassword';

import Edit from '../img/edit.png';
import Bin from '../img/bin.png';
import Password from '../img/password.png';

import '../css/ListItemAdminForm.css';

const ListItemAdminForm = (props) => {
    const schema = Yup.object({
        name: Yup.string().required('Obligatoire'),
        email: Yup.string().email("Format d'adresse email invalide").required('Obligatoire')
    });

    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: props.data.name,
            email: props.data.email,
            isSuperAdmin: props.data.isSuperAdmin
        }
    });

    const isEditOk = () => {
        props.isEdit();
    }

    const [isLoading, setIsLoading] = useState(false);
    const [isData, setIsData] = useState('');
    const [isError, setIsError] = useState('');
    
    const onSubmit = (data) => {
        console.log(data);
        const token = localStorage.getItem('token');
        const url = 'http://localhost:3050/hj2adm/admin';

        const id = props.id;
        const name = data.name;
        const email = data.email;
        const isSuperAdmin = data.isSuperAdmin;

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
                email,
                isSuperAdmin
            })
        })
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoading(true);
                setIsData(result); 
                isEditOk();
                console.log("Load:", isLoading, "Data:", isData);
            },
            (error) => {
                setIsLoading(true);
                setIsError(error)
                console.log("Load:", isLoading, "error:", isError);
            }
        );
    };

    return(
        <li className='listItemAdminEdit'>
            {props.newPassword ? 
                <PopUpPassword 
                newPassword={props.newPassword} 
                isNewPassword={props.isNewPassword} 
                id={props.dataId}/> 
            : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='listItemAdminHeaderEdit'>
                    <input type='text' className='nameEdit' name='name' ref={register}/>
                    <ErrorMessage as='span' errors={errors} name='name'/>

                    <div className='imgAdminContainerEdit'>
                        <img src={Password} alt='Icône Password' onClick={props.isNewPassword}/>
                        <img src={Edit} alt='Icône Edit' onClick={props.isEdit}/>
                        <img src={Bin} alt='Icône Bin' onClick={props.isDelete}/>
                    </div>
                </div>
                <div className='listItemAdminBodyEdit'>
                    <input type='text' className='emailEdit' name='email' ref={register}/>
                    <ErrorMessage as='span' errors={errors} name='email'/>

                    <div className='checkboxEdit'>
                        <label htmlFor='isSuperAdmin'>Super Admin ?</label>
                        <input type='checkbox' className='superAdminEdit' name='isSuperAdmin' ref={register}/>
                    </div>

                    <button type='submit'>Envoyer</button>
                </div>
            </form>
        </li>
    );
};

export default ListItemAdminForm;