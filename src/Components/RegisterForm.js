import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';

import RegisterComplete from './RegisterComplete';
import '../css/RegisterForm.css';

const RegisterForm = (props) => {
    const schema = Yup.object({
        name: Yup.string().required('Obligatoire'),
        email: Yup.string().email("Format d'adresse email invalide").required('Obligatoire'),
        password: Yup.string().required('Obligatoire'),
        confirmPassword: Yup.string().required('Obligatoire'),
        superAdmin: Yup.boolean()
    });

    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isData, setIsData] = useState('');
    const [isError, setIsError] = useState('');
    const [showError, setShowError] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [comeBack, setComeBack] = useState(false);

    const onSubmit = data => {
        console.log(data);

        const token = localStorage.getItem('token');
        const itemId = props.id;

        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;
        const superAdmin = data.superAdmin;

        const url = 'http://localhost:3050/hj2adm/admin';

        if(password !== confirmPassword) {
            setShowError('Les mots de passes ne correspondent pas !')
        } else {
            fetch(url, {
                headers : {
                    'Authorization': 'Bearer ' + token,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: 'POST',
                body: JSON.stringify({
                    itemId,
                    name,
                    email,
                    password,
                    superAdmin
                })
            })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    if (result.auth === false) {
                        setShowError(result.message);
                    } else {
                        setIsLoading(true);
                        setIsData(result); 
                        console.log("Load:", isLoading, "Data:", isData);
                        setIsComplete(true);
                        setTimeout(() => {
                            setComeBack(true);
                        }, 3000);
                    };
                },
                (error) => {
                    setIsLoading(true);
                    setIsError(error)
                    console.log("Load:", isLoading, "error:", isError);
                }
            );
        };
    };

    return(
        <div id='registerForm'>
            {isComplete ? <RegisterComplete/> : null }
            {comeBack ? <Redirect to='/admin/admins'/> : null }
            <h2>Enregistrement d'un·e nouvel·le Admin</h2>
            {showError ? <span>{showError}</span> : null }
            <form onSubmit={handleSubmit(onSubmit)}>
                <label id='pseudoLabel' htmlFor='name'>Nom d'administrateur</label>
                <input id='pseudoInput' name='name' placeholder='Tata Monique' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='name'/>

                <label id='emailLabel' htmlFor='email'>Email</label>
                <input id='emailInput' name='email' placeholder='tatamonique@mail.fr' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='email'/>

                <label id='passwordLabel' htmlFor='password'>Mot de passe</label>
                <input id='passwordInput' name='password' type='password' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='password'/>
                
                <label id='confirmPasswordLabel' htmlFor='confirmPassword'>Confirmez le mot de passe</label>
                <input id='confirmPasswordInput' name='confirmPassword' type='password' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='confirmPassword'/>

                <label id='checkboxLabel' htmlFor='superAdmin'>Super Admin ?</label>
                <input id='checkboxInput' type='checkbox' name='superAdmin' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='superAdmin'/>

                <button type='submit'>Enregistrer</button>
            </form>
        </div>
    );
};

export default RegisterForm;