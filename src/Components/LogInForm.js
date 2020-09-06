import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';

import Loading from './Loading';
import '../css/LogInForm.css';

const LogInForm = () => {
    const schema = Yup.object({
        name: Yup.string().required('Obligatoire'),
        password: Yup.string().required('Obligatoire'),
    });

    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isData, setIsData] = useState('');
    const [isError, setIsError] = useState('');
    const [showError, setShowError] = useState('');
    const [toHome, setToHome] = useState(false);

    const onSubmit = data => {
        console.log(data);
        console.log(data.name);

        const name = data.name;
        const password = data.password;

        const url = 'http://localhost:3050/hj2auth/login';

        fetch(url, {
            headers : {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify({
                name,
                password
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
                    localStorage.setItem("token", result.token);
                    console.log("Load:", isLoading, "Data:", isData);
                    setTimeout(() => {
                        setIsLoading(false);
                        setToHome(true);
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

    return(
        <div id='loginForm'>
            {isLoading ? <Loading/> : null }
            {toHome ? <Redirect to='/admin/home'/> : null }
            <h2>Connexion Admin</h2>
            {showError ? <span>{showError}</span> : null }
            <form onSubmit={handleSubmit(onSubmit)}>
                <label id='pseudoLabel' htmlFor='name'>Nom d'administrateur</label>
                <input id='pseudoInput' name='name' placeholder='Tata Monique' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='name'/>

                <label id='passwordLabel' htmlFor='password'>Mot de passe</label>
                <input id='passwordInput' name='password' type='password' ref={register}/>
                <ErrorMessage as='span' errors={errors} name='password' />

                <button type='submit'>Se connecter</button>
            </form>
        </div>
    );
};

export default LogInForm;