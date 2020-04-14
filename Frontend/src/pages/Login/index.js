import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi/index';
import api from '../../services/api'

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png'

const Login = () => {
    const [id, setId] = useState('');
    const history = useHistory();

    const handleLogin = async(e) => {
        e.preventDefault();

        try{
            const response = await api.post('session', { id });

            localStorage.setItem('ong', response.data.name);
            alert('Logado com sucesso');
            history.push('/profile');

        } catch (err) {
            alert('Usuário ou Senha inválidos')
        }
    }
    return (
   <div className="logon-container">
       <section className="form">
           <img src={logoImg} alt="Be The Hero"/>

           <form onSubmit={handleLogin}>
            <h1>Faça seu Logon</h1>

            <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
            />
            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/register">
                <FiLogIn size={16} color="#E02041" />
                Não tenho Cadastro
            </Link>
           </form>
       </section>

       <img src={heroesImg} alt="Heroes"/>
   </div>
)}

export default Login;